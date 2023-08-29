import { useSelector, useDispatch } from 'react-redux';
import { searchStatus } from '../redux/capsules/capsulesSlice';
import { useState } from 'react';

const SearchCapsule = () => {
  const { searchList } = useSelector((state) => state.capsules);
  const dispatch = useDispatch();
  const [searchForm, setSearchForm] = useState({
    status: 'all',
    launch_date: new Date(),
    type: 'all',
  });

  const statusList = ['all', 'active', 'retired', 'unknown', 'destroyed'];
  const typeList = ['all', 'Dragon 1.0', 'Dragon 1.1', 'Dragon 2.0'];

  const handleChange = (e) => {
    console.log(e.target.name);
    setSearchForm({ ...searchForm, [e.target.name]: e.target.value });
    dispatch(searchStatus(searchForm));
  };

  return (
    <form>
      <div>
        <select value={searchForm.status} onChange={handleChange} name="status">
          <option value="" className="bg-black">
            Select a status
          </option>
          {statusList.map((status) => (
            <option value={status}>{status}</option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default SearchCapsule;
