import Modal from 'react-modal';

Modal.setAppElement('#root');
const CapsuleModal = ({ capsule, modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className="relative w-full h-screen bg-transparent flex justify-center items-center"
    >
      <div className="relative bg-black rounded-lg shadow text-white w-4/5 max-w-xl">
        <div className="flex items-center justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-medium">{capsule.capsule_serial}</h3>
          <br />
          <button
            type="button"
            className=" bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            onClick={closeModal}
          >
            X
          </button>
        </div>

        <div className="p-6 space-y-6">
          <h3 className="text-xl font-medium ">{capsule.details}</h3>
          <h3 className="text-xl font-medium ">Status: {capsule.status}</h3>
          <h3 className="text-xl font-medium ">Landings: {capsule.landings}</h3>
          <h3 className="text-xl font-medium ">Missions</h3>
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-xs uppercase bg-gray-700 text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Flight
                </th>
              </tr>
            </thead>
            <tbody>
              {capsule.missions.map((mission) => (
                <tr
                  key={mission.name}
                  className="bg-white border-b bg-gray-800 border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap bg-gray-600 text-white"
                  >
                    {mission.name}
                  </th>
                  <td className="px-6 py-4 bg-gray-600 text-white">
                    {mission.flight}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Modal>
  );
};

export default CapsuleModal;
