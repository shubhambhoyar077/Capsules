import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  capsules: [],
  searchList: [],
  paginationList: [],
  isLoading: true,
  error: '',
};

export const fetchCapsules = createAsyncThunk(
  'capsules/fetchCapsules',
  async () => {
    try {
      const response1 = await fetch('https://api.spacexdata.com/v3/capsules');
      const response2 = await fetch('https://api.spacexdata.com/v3/dragons');
      if (!response1.ok && !response2.ok) {
        throw new Error('Please refreash page');
      }
      const data1 = await response1.json();
      const data2 = await response2.json();

      const capsulesDragon = data1.map((item1) => ({
        ...item1,
        images:
          data2.find((item2) => item2.id === item1.capsule_id)?.flickr_images ||
          '',
      }));
      return capsulesDragon;
    } catch (error) {
      return error;
    }
  }
);

export const capsulesSlice = createSlice({
  name: 'capsules',
  initialState,
  reducers: {
    filterCapsules: (state, { payload }) => {
      state.searchList = state.capsules.filter((capsule) => {
        if (payload.status !== 'all' && capsule.status !== payload.status) {
          return false;
        }

        if (payload.type !== 'all' && capsule.type !== payload.type) {
          return false;
        }

        if (
          new Date(payload.launch_date) &&
          new Date(capsule.original_launch) >= new Date(payload.launch_date)
        ) {
          return false;
        }

        return true;
      });
    },
    paginationCapsules: (state, { payload }) => {
      state.paginationList = state.searchList.slice(
        payload.itemOffset,
        payload.endOffset
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCapsules.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchCapsules.fulfilled, (state, action) => {
        return {
          ...state,
          capsules: action.payload,
          searchList: action.payload,
          paginationList: action.payload,
          isLoading: false,
        };
      })
      .addCase(fetchCapsules.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export const { filterCapsules, paginationCapsules } = capsulesSlice.actions;

export default capsulesSlice.reducer;
