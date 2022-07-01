import React from 'react';

const CardContent = () => {
  return (
    <div className="bg-white rounded-md dark:bg-very-dark-blue w-327 px-6 tablet:px-12 py-10 tablet:w-689 desktop:w-730 desktop:mt-0">
      <div className="tablet:flex tablet:justify-between tablet:items-center">
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

        <div className="mt-54 tablet:mt-0 tablet:w-141">
          <button className="w-full h-48 bg-violet rounded-md grid place-items-center font-bold text-white text-body transition-colors duration-200 cursor-pointer hover:bg-light-violet ">
            Apply now
          </button>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-body2 text-6E8098 dark:text-9DAEC2">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas,
          ante et vulputate volutpat, eros pede semper est, vitae luctus metus
          libero eu augue. Morbi purus libero, faucibus adipiscing, commodo
          quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
          tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a
          ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien
          ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus
          sed, urna.
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-19202D dark:text-white font-bold text-heading-3">
          Requirements
        </h3>
        <p className="mt-7 text-body2 text-6E8098 dark:text-9DAEC2">
          Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a
          ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
          libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
          varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
          pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida
          vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu,
          vulputate vel, nisl.
        </p>
      </div>

      <div className="mt-8">
        <div>
          <ul className="text-6E8098 unreqlist  items-center justify-center dark:text-9DAEC2 text-body2 font-normal">
            <li className="flex gap-4 items-center">
              Morbi interdum mollis sapien. Sed
            </li>
            <li className="flex gap-4 items-center">
              Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
              pulvinar risus
            </li>
            <li className="flex gap-4 items-center">
              Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
              tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
            </li>
            <li className="flex gap-4 items-center">
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
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas,
          ante et vulputate volutpat, eros pede semper est, vitae luctus metus
          libero eu augue. Morbi purus libero, faucibus adipiscing, commodo
          quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
          tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a
          ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien
          ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus
          sed, urna.
        </p>
      </div>

      <div className="mt-8">
        <div>
          <ol className="text-6E8098 dark:text-9DAEC2 text-body2 flex flex-col gap-2 font-normal req-list">
            <li className="flex gap-4 items-center">
              Morbi interdum mollis sapien. Sed
            </li>
            <li className="flex gap-4 items-center">
              Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
              pulvinar risus
            </li>
            <li className="flex gap-4 items-center">
              Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
              tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
            </li>
            <li className="flex gap-4 items-center">
              Morbi interdum mollis sapien. Sed
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
