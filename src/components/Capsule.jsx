import { useState } from 'react';
import CapsuleModal from './CapsuleModal';
import PropTypes from 'prop-types';

const Capsule = ({ capsule }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const date = new Date(capsule.original_launch);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <li>
        <img
          src={capsule.images[0]}
          onClick={openModal}
          className="h-auto w-full max-w-full rounded cursor-pointer"
          alt={capsule.capsule_serial}
        />
        <h3 className="font-normal text-xl leading-8">
          {date.toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </h3>
        <h1 className="font-extrabold text-2xl leading-8">
          {capsule.capsule_serial}
        </h1>
        <button
          onClick={openModal}
          className="border-2 border-white px-8 py-3 w-full md:w-40 uppercase text-sm font-medium hover:bg-white hover:text-black"
        >
          Learn More
        </button>
      </li>
      <CapsuleModal
        capsule={capsule}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
};

Capsule.propTypes = {
  capsule: PropTypes.shape({
    original_launch: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    capsule_serial: PropTypes.string.isRequired,
  }),
};

export default Capsule;
