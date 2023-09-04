import { useDispatch } from 'react-redux';
import { filterCapsules } from '../redux/capsules/capsulesSlice';
import { useState } from 'react';

const SearchCapsule = () => {
  const dispatch = useDispatch();
  const [searchForm, setSearchForm] = useState({
    status: 'all',
    launch_date: new Date().toISOString(),
    type: 'all',
  });

  const statusList = ['active', 'retired', 'unknown', 'destroyed'];
  const typeList = ['Dragon 1.0', 'Dragon 1.1', 'Dragon 2.0'];

  const handleChange = (e) => {
    setSearchForm({ ...searchForm, [e.target.name]: e.target.value });
    dispatch(
      filterCapsules({ ...searchForm, [e.target.name]: e.target.value })
    );
  };

  return (
    <form className="flex flex-col gap-3 items-center my-20 md:flex-row md:justify-center  text-2xl font-bold md:px-4">
      <div className="relative w-6/12 min-w-[230px] md:w-80">
        <select
          value={searchForm.status}
          onChange={handleChange}
          name="status"
          className="bg-[#292929] w-full px-5 py-5 cursor-pointer uppercase"
        >
          <option
            key="all"
            value="all"
            className=" text-2xl font-bold  text-white uppercase"
          >
            all
          </option>
          {statusList.map((status) => (
            <option
              key={status}
              value={status}
              className=" text-2xl font-bold  text-white uppercase"
            >
              {status}
            </option>
          ))}
        </select>
        <label
          htmlFor="status"
          className="absolute text-sm font-medium text-slate-400 top-0 left-0 px-5"
        >
          CAPSULE STATUS
        </label>
      </div>

      <div className="relative w-6/12 min-w-[230px] md:w-80 uppercase">
        <select
          value={searchForm.type}
          onChange={handleChange}
          name="type"
          className="bg-[#292929] w-full px-5 py-5 cursor-pointer uppercase"
        >
          <option
            key="all"
            value="all"
            className=" text-2xl font-bold  text-white uppercase"
          >
            all
          </option>
          {typeList.map((type) => (
            <option
              key={type}
              value={type}
              className=" text-2xl font-bold  text-white uppercase"
            >
              {type}
            </option>
          ))}
        </select>
        <label
          htmlFor="type"
          className="absolute text-sm font-medium text-slate-400 top-0 left-0 px-5"
        >
          CAPSULE TYPE
        </label>
      </div>

      <div className="relative w-6/12 min-w-[230px] md:w-80">
        <input
          className="bg-[#292929] w-full px-5 py-5 cursor-pointer"
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
          LAUNCH NO LATER THAN
        </label>
      </div>
    </form>
  );
};

export default SearchCapsule;
