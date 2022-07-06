import { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { LocationModal } from '../components';
import useSearch from '../hooks/useSearch';
import { Cards } from '../components';
import { useGlobalContext } from '../context/context.jsx';

Modal.setAppElement('#root');

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

const Search = () => {
  const {
    setQuery,
    query,
    location,
    setLocation,
    checked,
    handleSubmit,
    handleCheckbox,
    clearInput,
    closeModal,
    showModal,
    modal,
    showLoadmore,
  } = useGlobalContext();

  const [placeholder, setplaceholder] = useState(
    JSON.parse(localStorage.getItem('placeholder'))
  );

  const modalFixer = () => {
    if (window.innerWidth >= 768) {
      closeModal();
    }
  };

  const swapPlaceholder = () => {
    if (window.innerWidth >= 1440) {
      setplaceholder(true);
    } else if (window.innerWidth < 1440) {
      setplaceholder(false);
    }
  };

  localStorage.setItem('placeholder', placeholder);

  useEffect(() => {
    window.addEventListener('resize', () => {
      modalFixer();
      swapPlaceholder();
    });
    return () =>
      window.removeEventListener('resize', () => {
        modalFixer();
        swapPlaceholder();
      });
  }, [placeholder]);

  return (
    <>
      <div className="container search-container mx-auto px-6 tablet:px-0 w-327 tablet:w-689 desktop:w-1110">
        {/* mobile */}
        <div className=" bg-white w-327 h-20 tablet:w-689 desktop:w-1110  dark:bg-19202D  rounded shadow relative z-10 -mt-8 mb-8 ">
          <form
            onSubmit={handleSubmit}
            className="w-327 h-20 tablet:hidden flex"
          >
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
                    <g
                      className="fill-6E8098 dark:fill-5964E0"
                      fillRule="evenodd"
                    >
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
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                  >
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

          {/* tablet/desktop */}
          <div className="bg-white hidden h-full dark:bg-19202D tablet:flex tablet:justify-center">
            <form
              onSubmit={handleSubmit}
              className="flex justify-center h-full w-full px-4 desktop:pl-8"
            >
              <div className="basis-1/3 relative">
                <div className="absolute text-gray-600 dark:text-gray-400 flex items-center h-full cursor-pointer">
                  <svg
                    width={23}
                    height={23}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                      fill="#5964E0"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                  className="focus:outline-none caret-violet  text-19202D dark:text-white dark:bg-19202D font-normal w-full h-full flex items-center px-12 text-body cursor-pointer"
                  placeholder={
                    placeholder === true
                      ? 'Filter by title, companies, expertise…'
                      : 'Filter by title…'
                  }
                />
                {query && (
                  <div>
                    <svg
                      onClick={clearInput}
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Close"
                      className="icon icon-tabler icon-tabler-x absolute top-7 right-4"
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
              </div>

              <div className="basis-1/3 relative border-l border-r dark:border-gray-700">
                <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-4  h-full cursor-pointer">
                  <svg
                    width="17"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
                      fill="#5964E0"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
                <input
                  id="location"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                  className="focus:outline-none caret-violet text-19202D dark:text-white dark:bg-19202D font-normal w-full h-full flex items-center px-12 text-body cursor-pointer"
                  placeholder="Filter by location…"
                />
                {location && (
                  <div>
                    <svg
                      onClick={clearInput}
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Close"
                      className="icon icon-tabler icon-tabler-x absolute top-7 right-4"
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
              </div>

              <div className="basis-1/3 relative">
                <div className="pl-3 desktop:pl-8 h-full flex items-center gap-3">
                  <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={handleCheckbox}
                      className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                    />
                    <div className="check-icon hidden bg-violet text-white rounded-sm">
                      <svg
                        className="icon icon-tabler icon-tabler-check"
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-body w-20 flex text-very-dark-blue desktop:w-2/3 dark:text-white font-bold">
                    <span>Full Time</span>
                    <span className="hidden desktop:block desktop:ml-1">
                      Only
                    </span>
                  </p>
                  <div className="w-1/3 ml-10 flex justify-end">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="w-20 h-12 desktop:w-123 desktop:h-48 bg-5964E0 text-white rounded-md flex items-center justify-center text-body2 transition-colors duration-200 cursor-pointer hover:bg-light-violet"
                    >
                      Search
                    </button>
                  </div>
                </div>

                <style>
                  {`  .checkbox:checked + .check-icon {
                            display: flex;
                        }`}
                </style>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
