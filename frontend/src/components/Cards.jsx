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
    <ul className="cards-container mt-14 tablet:mt-16 desktop:mt-18 mx-auto w-fit mb-8">
      {results.map((job) => {
        return <Card key={job.id} {...job.content} id={job.id} />;
      })}
    </ul>
  );
};

export default Cards;
