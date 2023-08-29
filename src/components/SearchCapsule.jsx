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
    <form>
      <div>
        <select value={searchForm.status} onChange={handleChange} name="status">
          <option value="all" className="bg-black">
            all
          </option>
          {statusList.map((status) => (
            <option value={status}>{status}</option>
          ))}
        </select>
      </div>
      <div>
        <select value={searchForm.type} onChange={handleChange} name="type">
          <option value="all" className="bg-black">
            all
          </option>
          {typeList.map((type) => (
            <option value={type}>{type}</option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default SearchCapsule;
