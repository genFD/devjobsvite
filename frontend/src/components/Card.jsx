const Card = () => {
  return (
    <div className="container relative bg-white dark:bg-very-dark-blue w-327 h-228 rounded-md mt-10 flex justify-center items-center">
      <div className="w-50 h-50 bg-dark-grey left-6 -top-6 absolute z-10"></div>
      <div className="w-286 h-147 ">
        <header className="flex items-center gap-3 mb-3 text-dark-grey text-body">
          <span>5h ago</span>
          <span className="w-1 h-1 rounded-full bg-dark-grey"></span>
          <span>Full Time</span>
        </header>
        <h2 className="mb-4 text-very-dark-blue dark:text-white text-heading-3 font-bold">
          Senior Software Engineer
        </h2>
        <span className="text-dark-grey text-body">Scoot</span>
        <footer className="mt-6 text-violet text-heading-4 font-bold">
          United Kingdom
        </footer>
      </div>
    </div>
  );
};

export default Card;
