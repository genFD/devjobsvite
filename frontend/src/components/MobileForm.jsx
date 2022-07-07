import React from 'react';
import Modal from 'react-modal';
import { LocationModal } from '../components';
import { useGlobalContext } from '../context/context.jsx';

Modal.setAppElement('#root');

const MobileForm = () => {
  const {
    setQuery,
    query,
    handleSubmit,
    clearInput,
    closeModal,
    showModal,
    modal,
  } = useGlobalContext();
  return (
    <form onSubmit={handleSubmit} className="w-327 h-20 tablet:hidden flex">
      <div className="flex order-2 basis-1/4 pr-3">
        <div className="flex items-center h-full cursor-pointer">
          <div className="flex gap-1 ">
            {query && (
              <div>
                <svg
                  onClick={clearInput}
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Close"
                  className="icon icon-tabler icon-tabler-x"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="#6E8098"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
            )}
            <svg
              onClick={showModal}
              className="location-icon"
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="fill-6E8098 dark:fill-5964E0" fillRule="evenodd">
                <path
                  d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
                  fillRule="nonzero"
                />
              </g>
            </svg>
          </div>
          {
            <Modal
              isOpen={modal}
              onRequestClose={closeModal}
              style={customStyles}
              className=" flex flex-col w-fit rounded-default"
              contentLabel="Filter by location"
            >
              <LocationModal closeModal={closeModal} />
            </Modal>
          }
        </div>
        <div className="flex items-center">
          <button
            type="submit"
            className="px-3 py-3 bg-5964E0 focus:outline-none hover:bg-opacity-80 ml-2 rounded"
          >
            <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                fill="white"
                fillRule="nonzero"
              />
            </svg>
          </button>
        </div>
      </div>

      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        id="search"
        className="text-19202D caret-violet  dark:bg-19202D dark:text-white focus:outline-none font-normal h-full basis-3/4 px-3 flex items-center text-body order-1"
        placeholder="Filter by title…"
      />
    </form>
  );
};

export default MobileForm;

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 50,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
  },
};
