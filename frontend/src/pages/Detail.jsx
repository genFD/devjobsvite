import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardHeader, CardContent, CardFooter, Navbar } from '../components';
import { useParams } from 'react-router-dom';

function Detail() {
  const [jobDetail, setJobDetail] = useState({});
  const { id } = useParams();

  const getJobDetail = async () => {
    try {
      const { data } = await axios.get('/data.json');
      console.log(data);
      const info = data.find((jobinfo) => jobinfo.id === +id);
      setJobDetail(info);
      console.log(jobDetail);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getJobDetail();
  }, []);

  return (
    <>
      <Navbar />
      <div className="card-detail flex flex-col items-center mt-4 gap-6">
        {Object.keys(jobDetail).length === 0 ? (
          <p>loading...</p>
        ) : (
          jobDetail && (
            <>
              <CardHeader {...jobDetail} />
              <CardContent {...jobDetail} />
              <CardFooter {...jobDetail} />
            </>
          )
        )}
      </div>
    </>
  );
}

export default Detail;
