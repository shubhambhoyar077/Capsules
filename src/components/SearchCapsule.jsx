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
      <select
        value={searchForm.status}
        onChange={handleChange}
        name="status"
        className="bg-[#292929] w-6/12 px-5 py-5 md:w-80"
      >
        <option value="all">all</option>
        {statusList.map((status) => (
          <option value={status}>{status}</option>
        ))}
      </select>

      <select
        value={searchForm.type}
        onChange={handleChange}
        name="type"
        className="bg-[#292929] w-6/12 px-5 py-5 md:w-80"
      >
        <option value="all">all</option>
        {typeList.map((type) => (
          <option value={type}>{type}</option>
        ))}
      </select>

      <input
        className="bg-[#292929] w-6/12 px-5 py-5 md:w-80"
        type="date"
        id="launch_date"
        value={searchForm.launch_date}
        onChange={handleChange}
        name="launch_date"
      />
    </form>
  );
};

export default SearchCapsule;
