const Search = () => {
  return (
    <div className="container search-container mx-auto px-6 tablet:px-0 w-327 tablet:w-689 desktop:w-1110">
      {/* mobile */}
      <div className=" bg-white w-327 h-20 tablet:w-689 desktop:w-1110  dark:bg-19202D  rounded shadow relative z-10 -mt-8 mb-8 ">
        <div className="w-327 h-20 tablet:hidden flex justify-between px-6">
          <div className="flex order-2 basis-1/4">
            <div className="flex items-center pr-3 h-full cursor-pointer">
              <button>
                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
                    fill="#6E8098"
                    fillRule="nonzero"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center">
              <button className="px-3 py-3 bg-5964E0 focus:outline-none hover:bg-opacity-80 ml-2 rounded">
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
            id="search"
            className="text-19202D dark:bg-19202D dark:text-white focus:outline-none font-normal h-full basis-3/4 pr-4 flex items-center  text-body order-1"
            placeholder="Filter by title…"
          />
        </div>

        {/* tablet/desktop */}
        <div className="bg-white hidden h-full dark:bg-19202D tablet:flex tablet:justify-center">
          <div className="flex justify-center h-full w-full px-4">
            <div className="basis-1/3 relative">
              <div className="absolute text-gray-600 dark:text-gray-400 flex items-center h-full cursor-pointer">
                <svg width={23} height={23} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                    fill="#5964E0"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              <input
                id="email1"
                className="focus:outline-none caret-violet  text-19202D dark:text-white dark:bg-19202D font-normal w-full h-full flex items-center pl-12 pr-4 text-body cursor-pointer"
                placeholder="Filter by title"
              />
            </div>

            <div className="basis-1/3 relative border-l border-r dark:border-gray-700">
              <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-4  h-full cursor-pointer">
                <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
                    fill="#5964E0"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              <input
                id="email2"
                className="focus:outline-none caret-violet text-19202D dark:text-white dark:bg-19202D font-normal w-full h-full flex items-center pl-12 pr-4 text-body cursor-pointer"
                placeholder="Placeholder"
              />
            </div>

            <div className="basis-1/3 relative">
              <div className="pl-3 desktop:pl-8 h-full flex items-center gap-3">
                <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                  <input
                    type="checkbox"
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
                  <button className="w-20 h-12 bg-5964E0 text-white rounded-md flex items-center justify-center text-body2 transition-colors duration-200 cursor-pointer hover:bg-light-violet">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
