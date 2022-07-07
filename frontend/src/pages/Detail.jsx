import React, { useEffect } from 'react';
import { JobInfo, Navbar, Loading, NoResults } from '../components';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/context.jsx';

function Detail() {
  const { jobDetail, getJobDetail, loading } = useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    getJobDetail(id);
    // eslint-disable-next-line
  }, [id]);

  return (
    <div>
      <Navbar id={id} />
      {loading ? <Loading /> : !jobDetail ? <NoResults /> : <JobInfo />}
    </div>
  );
}

export default Detail;
