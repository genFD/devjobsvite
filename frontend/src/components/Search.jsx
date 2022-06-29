const Search = () => {
  return (
    <div className="container search-container mx-auto px-6 w-327">
      <div className=" bg-white w-327 dark:bg-19202D h-20 rounded shadow relative z-10 -mt-8 mb-8 ">
        <div className="w-327 h-20 flex justify-between px-6">
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
      </div>
    </div>
    // <div className="parent bg-light-violet tablet:w-689">
    //   <div className="child absolute top-18 laptop:top-20 desktop:top-32 w-327 flex items-center justify-center search-container border">
    //     <div className="relative h-20 flex pl-6 pr-4 gap-4 items-center  bg-white">
    //       <input
    //         type="text"
    //         id="search"
    //         placeholder="Filter by title..."
    //         className=" h-10 input-search rounded-md p-2"
    //       />
    //       <div className="flex items-center gap-4 container-search-icon">
    //         <img
    //           src="/assets/mobile/icon-filter.svg"
    //           alt=""
    //           className="h-5 w-5"
    //         />
    //         <button className="bg-violet h-12 w-12 flex items-center justify-center rounded-md">
    //           <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
    //             <path
    //               d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
    //               fill="#FFF"
    //               fillRule="nonzero"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Search;
