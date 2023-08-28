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
    <ul>
      {capsules.map((capsule) => (
        <Capsule key={capsule.capsule_serial} capsule={capsule} />
      ))}
    </ul>
  );
};

export default Capsules;
