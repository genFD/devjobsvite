import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <li className="container relative bg-white dark:bg-very-dark-blue w-327 h-228 desktop:w-350 tablet:w-339 rounded-md flex justify-center items-center">
      <div className="w-50 h-50 p-1 bg-E99210 rounded-2xl left-6 -top-6 absolute z-10 flex justify-center items-center">
        <img src="/assets/logos/scoot.svg" alt="" />
      </div>
      <div className="w-286 h-147 text-dark-grey ">
        <header className="flex items-center gap-3 mb-3 text-body">
          <span>5h ago</span>
          <span className="w-1 h-1 rounded-full bg-dark-grey"></span>
          <span>Full Time</span>
        </header>
        <Link to="/detail/1">
          <h2 className="mb-4 text-very-dark-blue hover:text-6E8098 dark:hover:text-6E8098 transition-colors duration-200 cursor-pointer dark:text-white text-heading-3 font-bold">
            Senior Software Engineer
          </h2>
        </Link>

        <span className="text-body2">Scoot</span>
        <footer className="mt-6 text-violet text-heading-4 font-bold">
          United Kingdom
        </footer>
      </div>
    </li>
  );
};

export default Card;
