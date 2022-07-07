import { useEffect } from 'react';
import { useGlobalContext } from '../context/context.jsx';
import { MobileForm, Form } from '../components';

const Search = () => {
  const { modalFixer, swapPlaceholder } = useGlobalContext();

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
    //eslint-disable-next-line
  }, []);

  return (
    <div className="container search-container mx-auto px-6 tablet:px-0 w-327 tablet:w-689 desktop:w-1110">
      <div className=" bg-white w-327 h-20 tablet:w-689 desktop:w-1110  dark:bg-19202D  rounded shadow relative z-10 -mt-8 mb-8 ">
        <MobileForm />
        <Form />
      </div>
    </div>
  );
};

export default Search;
