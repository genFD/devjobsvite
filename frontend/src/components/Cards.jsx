import React, { useEffect, useState } from 'react';
import { Card } from '../components';
import axios from 'axios';

const Cards = () => {
  const [jobs, setJobs] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get('/v1/devjobs/jobs');
      setJobs(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ul className="cards-container mt-14 tablet:mt-16 desktop:mt-18 mx-auto w-fit mb-8">
      {!jobs ? (
        <p>Loading jobs...</p>
      ) : (
        jobs &&
        jobs.length > 0 &&
        jobs.map((job) => {
          return <Card key={job.id} {...job.content} id={job.id} />;
        })
      )}
    </ul>
  );
};

export default Cards;
