import { useSelector, useDispatch } from 'react-redux';
import { filterCapsules } from '../redux/capsules/capsulesSlice';
import { useState } from 'react';

const SearchCapsule = () => {
  const { searchList } = useSelector((state) => state.capsules);
  const dispatch = useDispatch();
  const [searchForm, setSearchForm] = useState({
    status: 'all',
    launch_date: null,
    type: 'all',
  });

  const statusList = ['active', 'retired', 'unknown', 'destroyed'];
  const typeList = ['Dragon 1.0', 'Dragon 1.1', 'Dragon 2.0'];

  const handleChange = (e) => {
    console.log(e.target.name);
    setSearchForm({ ...searchForm, [e.target.name]: e.target.value });
    dispatch(
      filterCapsules({ ...searchForm, [e.target.name]: e.target.value })
    );
  };

  return (
    <form className="flex flex-col gap-3 items-center my-20 md:flex-row md:justify-center text-2xl font-bold md:px-4">
      {/* <label htmlFor="status" className="w-6/12">
        Status:
      </label> */}
      <div className="relative w-6/12 md:w-80">
        <select
          value={searchForm.status}
          onChange={handleChange}
          name="status"
          className="bg-[#292929] w-full px-5 py-5"
        >
          <option value="all">all</option>
          {statusList.map((status) => (
            <option value={status}>{status}</option>
          ))}
        </select>
        <label
          htmlFor="status"
          className="absolute text-sm font-medium text-slate-400 top-0 left-0 px-5"
        >
          CAPSULE STATUS
        </label>
      </div>

      <div className="relative w-6/12 md:w-80">
        <select
          value={searchForm.type}
          onChange={handleChange}
          name="type"
          className="bg-[#292929] w-full px-5 py-5"
        >
          <option value="all">all</option>
          {typeList.map((type) => (
            <option value={type}>{type}</option>
          ))}
        </select>
        <label
          htmlFor="type"
          className="absolute text-sm font-medium text-slate-400 top-0 left-0 px-5"
        >
          CAPSULE TYPE
        </label>
      </div>

      <div className="relative w-6/12 md:w-80">
        <input
          className="bg-[#292929] w-full px-5 py-5"
          type="date"
          id="launch_date"
          value={searchForm.launch_date}
          onChange={handleChange}
          name="launch_date"
        />
        <label
          htmlFor="date"
          className="absolute text-sm font-medium text-slate-400 top-0 left-0 px-5"
        >
          NO LATER THAN
        </label>
      </div>
    </form>
  );
};

export default SearchCapsule;
