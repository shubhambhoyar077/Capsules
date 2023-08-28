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
    <ul className="container mx-auto px-4 py-4 grid md:grid-cols-2 gap-4">
      {capsules.map((capsule) => (
        <Capsule key={capsule.capsule_serial} capsule={capsule} />
      ))}
    </ul>
  );
};

export default Capsules;
