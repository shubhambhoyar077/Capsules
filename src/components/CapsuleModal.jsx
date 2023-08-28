import Modal from 'react-modal';

Modal.setAppElement('#root');
const CapsuleModal = ({ capsule, modalIsOpen, closeModal }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>{capsule.capsule_serial}</h2>
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
    </Modal>
  );
};

export default CapsuleModal;
