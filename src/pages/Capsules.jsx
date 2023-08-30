import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCapsules } from '../redux/capsules/capsulesSlice';
import Capsule from '../components/Capsule';
import SearchCapsule from '../components/SearchCapsule';
import Pagination from '../components/Pagination';

const Capsules = () => {
  const { paginationList, isLoading, error } = useSelector(
    (state) => state.capsules
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCapsules());
  }, []);
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-[url('src/assets/space.jpg')] bg-center">
        <h1 className="font-bold text-4xl md:text-8xl">CAPSULES</h1>
      </div>
      <SearchCapsule />
      <ul className="container mx-auto px-4 py-4 grid md:grid-cols-2 gap-4">
        {paginationList.map((capsule) => (
          <Capsule key={capsule.capsule_serial} capsule={capsule} />
        ))}
      </ul>
      <Pagination />
    </>
  );
};

export default Capsules;
