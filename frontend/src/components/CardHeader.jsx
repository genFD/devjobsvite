import React from 'react';

const CardHeader = () => {
  return (
    <div className="container z-10 -mt-8 tablet:-mt-14  relative bg-white dark:bg-very-dark-blue w-327 h-228 rounded-md flex flex-col justify-center items-center tablet:flex-row tablet:rounded-tl-2xl tablet:rounded-bl-2xl tablet:w-689 tablet:h-140 tablet:justify-start desktop:w-730">
      <div className="w-50 h-50 bg-E99210 left-auto -top-6 absolute z-10 tablet:static tablet:w-140 tablet:h-full flex items-center justify-center rounded-2xl tablet:rounded-none">
        <div className="p-1 tablet:p-0 tablet:w-81 tablet:h-23">
          <img
            src="/assets/logos/scoot.svg"
            alt="company_logo"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="mx-auto mt-6 flex flex-col items-center gap-3 tablet:mt-0 tablet:mx-0 tablet:ml-8 desktop:ml-10">
        <div>
          <span className="text-very-dark-blue dark:text-white text-heading-3 font-bold">
            Scoot
          </span>
        </div>
        <span className="text-dark-grey text-body">Scoot.com</span>
      </div>
      <div className="flex items-center mt-6 tablet:mt-0 tablet:ml-244 desktop:ml-282">
        <button className="w-147 h-48 bg-body-bg dark:bg-violet rounded-md grid place-items-center font-bold text-violet dark:text-white dark:hover:bg-6E8098 text-body transition-colors duration-200 cursor-pointer hover:bg-light-violet">
          Company site
        </button>
      </div>
    </div>
  );
};

export default CardHeader;
