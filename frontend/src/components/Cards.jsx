import React from 'react';
import { Card } from '../components';
import { Loading, NoResults } from '../components';
import { useGlobalContext } from '../context/context.jsx';

const Cards = () => {
  const { results, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (results.length < 1) {
    return <NoResults />;
  }
  return (
    <ul className="min-w-[375px] grid grid-rows-[1fr] gap-y-[49px] place-items-center tablet:grid-cols-[1fr_1fr] tablet:gap-y-[65px] tablet:gap-x-[11px] desktop:grid-cols-[1fr_1fr_1fr] desktop:gap-y-[40px] desktop:gap-x-[30px] mt-14 tablet:mt-16 desktop:mt-18 mx-auto w-fit mb-8 border">
      {results.map((job) => {
        return <Card key={job.id} {...job.content} id={job.id} />;
      })}
    </ul>
  );
};

export default Cards;
