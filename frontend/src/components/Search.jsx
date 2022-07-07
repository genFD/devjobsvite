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
    <div className="container min-w-[375px] w-fit mx-auto flex justify-center">
      <div className="w-327 h-20  tablet:w-689 desktop:w-1110 bg-white dark:bg-19202D rounded shadow-md z-10 relative -mt-8 mb-8 ">
        <MobileForm />
        <Form />
      </div>
    </div>
  );
};

export default Search;
