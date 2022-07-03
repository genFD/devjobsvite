import { Link } from 'react-router-dom';

const Card = ({
  id,
  postedAt,
  contract,
  location,
  position,
  company,
  logo,
  logoBackground,
}) => {
  return (
    <li className="container relative bg-white dark:bg-very-dark-blue w-327 h-228 desktop:w-350 tablet:w-339 rounded-md flex justify-center items-center">
      <div
        className={`w-50 h-50 p-1  rounded-2xl left-6 -top-6 absolute z-10 flex justify-center items-center`}
        style={{ background: logoBackground }}
      >
        <img src={logo} alt="" />
      </div>
      <div className="w-286 h-147 text-dark-grey ">
        <header className="flex items-center gap-3 mb-3 text-body">
          <span>{postedAt}</span>
          <span className="w-1 h-1 rounded-full bg-dark-grey"></span>
          <span>{contract}</span>
        </header>
        <Link to={`/detail/${id}`}>
          <h2 className="mb-4 text-very-dark-blue hover:text-6E8098 dark:hover:text-6E8098 transition-colors duration-200 cursor-pointer dark:text-white text-heading-3 font-bold">
            {position}
          </h2>
        </Link>

        <span className="text-body2">{company}</span>
        <footer className="mt-6 text-violet text-heading-4 font-bold">
          {location}
        </footer>
      </div>
    </li>
  );
};

export default Card;
