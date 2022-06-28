import React from 'react';

const CardDetail = () => {
  return (
    <>
      <div className="card-detail flex flex-col items-center mt-4 mb-4 gap-6">
        <div className="container relative bg-white dark:bg-very-dark-blue w-327 h-228 rounded-md mt-10 flex flex-col justify-center items-center">
          <div className="w-50 h-50 bg-dark-grey left-auto -top-6 absolute z-10"></div>
          <div className="mx-auto mt-6 flex flex-col items-center gap-3">
            <div>
              <span className="text-very-dark-blue dark:text-white text-heading-3 font-bold">
                Scoot
              </span>
            </div>
            <span className="text-dark-grey text-body">Scoot.com</span>
          </div>
          <div className="flex items-center mt-6">
            <button className="w-147 h-48 bg-body-bg rounded-md grid place-items-center font-bold text-violet text-body transition-colors duration-200 cursor-pointer hover:bg-light-violet">
              Company site
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-very-dark-blue w-327 px-6 py-10 mt-6">
          <header className="flex flex-col">
            <div className="flex items-center gap-3 text-dark-grey text-body">
              <span>5h ago</span>
              <span className="w-1 h-1 rounded-full bg-dark-grey"></span>
              <span>Full Time</span>
            </div>
            <h2 className="text-very-dark-blue dark:text-white text-heading-3 font-bold mt-2">
              Senior Software Engineer
            </h2>
            <h3 className="text-violet text-heading-4 font-bold mt-3">
              United Kingdom
            </h3>
          </header>

          <div className="mt-54">
            <button className="w-full h-48 bg-violet rounded-md grid place-items-center font-bold text-white text-body transition-colors duration-200 cursor-pointer hover:bg-light-violet ">
              Apply now
            </button>
          </div>
          <div className="mt-8">
            <p className="text-body2 text-6E8098 dark:text-9DAEC2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros
              pede semper est, vitae luctus metus libero eu augue. Morbi purus
              libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
              lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
              euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
              arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-19202D dark:text-white font-bold text-heading-3">
              Requirements
            </h3>
            <p className="mt-7 text-body2 text-6E8098 dark:text-9DAEC2">
              Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
              magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
              facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis,
              adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse
              ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante,
              mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede,
              ornare a, lacinia eu, vulputate vel, nisl.
            </p>
          </div>

          <div className="mt-8">
            <div>
              <ul className="text-6E8098 text-body2 flex flex-col gap-2 font-normal">
                <li className="flex gap-4 items-center">
                  <span className="w-1 h-1 rounded-full bg-violet"></span>
                  Morbi interdum mollis sapien. Sed
                </li>
                <li className="flex gap-4 items-center">
                  <span className="w-1 h-1 rounded-full bg-violet"></span>
                  Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
                  pulvinar risus
                </li>
                <li className="flex gap-4 items-center">
                  <span className="w-1 h-1 rounded-full bg-violet"></span>
                  Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
                  vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut
                  lectus.
                </li>
                <li className="flex gap-4 items-center">
                  <span className="w-1 h-1 rounded-full bg-violet"></span>
                  Morbi interdum mollis sapien. Sed
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-19202D dark:text-white font-bold text-heading-3 ">
              What You Will Do
            </h3>
            <p className="mt-7 text-body2 text-6E8098 dark:text-9DAEC2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros
              pede semper est, vitae luctus metus libero eu augue. Morbi purus
              libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
              lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
              euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
              arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </p>
          </div>

          <div className="mt-8">
            <div>
              <ul className="text-6E8098 text-body2 flex flex-col gap-2 font-normal">
                <li className="flex gap-4 items-center">
                  <span className="text-violet font-bold">1</span>
                  Morbi interdum mollis sapien. Sed
                </li>
                <li className="flex gap-4 items-center">
                  <span className="text-violet font-bold">2</span>
                  Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
                  pulvinar risus
                </li>
                <li className="flex gap-4 items-center">
                  <span className="text-violet font-bold">3</span>
                  Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
                  vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut
                  lectus.
                </li>
                <li className="flex gap-4 items-center">
                  <span className="text-violet font-bold">4</span>
                  Morbi interdum mollis sapien. Sed
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-375 h-24 bg-white dark:bg-very-dark-blue flex items-center justify-center">
          <button className="w-327 h-48 bg-violet rounded-md grid place-items-center font-bold text-white text-body transition-colors duration-200 cursor-pointer hover:bg-light-violet ">
            Apply now
          </button>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
