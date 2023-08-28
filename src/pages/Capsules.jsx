import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCapsules } from '../redux/capsules/capsulesSlice';

const Capsules = () => {
  const { capsules, isLoading, error } = useSelector((state) => state.capsules);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCapsules()).then(() => {
      console.log(capsules);
    });
  }, []);
  return (
    <ul>
      {capsules.map((capsule) => (
        <li>{capsule.capsule_serial}</li>
      ))}
    </ul>
  );
};

export default Capsules;
