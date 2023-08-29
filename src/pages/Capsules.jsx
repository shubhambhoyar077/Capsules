import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCapsules } from '../redux/capsules/capsulesSlice';
import Capsule from '../components/Capsule';

const Capsules = () => {
  const { capsules, isLoading, error } = useSelector((state) => state.capsules);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCapsules());
  }, []);
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-[url('src/assets/space.jpg')] bg-center">
        <h1 className="font-bold text-4xl md:text-8xl">CAPSULES</h1>
      </div>
      <ul className="container mx-auto px-4 py-4 grid md:grid-cols-2 gap-4">
        {capsules.map((capsule) => (
          <Capsule key={capsule.capsule_serial} capsule={capsule} />
        ))}
      </ul>
    </>
  );
};

export default Capsules;
