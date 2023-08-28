import { useState } from 'react';
import CapsuleModal from './CapsuleModal';

const Capsule = ({ capsule }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const date = new Date(capsule.original_launch);

  const openModal = () => {
    setIsOpen(true);
  };

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <li>
        <img src={capsule.images[0]} className="h-80 w-80" />
        <h1>{capsule.capsule_serial}</h1>
        <h3>
          {date.toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </h3>
        <p>{capsule.details}</p>
        <button onClick={openModal}>Open Modal</button>
      </li>
      <CapsuleModal
        capsule={capsule}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default Capsule;
