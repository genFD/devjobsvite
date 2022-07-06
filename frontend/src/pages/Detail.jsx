import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  CardHeader,
  CardContent,
  CardFooter,
  Navbar,
  Loading,
  NoResults,
} from '../components';
import { useParams } from 'react-router-dom';

function Detail() {
  const [loading, setLoading] = useState(false);
  const [jobDetail, setJobDetail] = useState(null);

  const { id } = useParams();
  const idNum = parseInt(id);

  useEffect(() => {
    const getJobDetail = async () => {
      try {
        const { data } = await axios.get(`/v1/devjobs/jobs/${idNum}`);
        if (data) {
          setJobDetail(data);
        } else {
          setJobDetail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    getJobDetail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!jobDetail) {
    return <NoResults />;
  }

  const {
    logoBackground,
    logo,
    company,
    website,
    postedAt,
    contract,
    position,
    location,
    description,
    requirements,
    role,
  } = jobDetail[0].content;

  return (
    <>
      <Navbar />
      <div className="card-detail flex flex-col items-center mt-4 gap-6">
        <>
          <CardHeader
            logoBackground={logoBackground}
            logo={logo}
            company={company}
            website={website}
          />
          <CardContent
            postedAt={postedAt}
            contract={contract}
            position={position}
            location={location}
            description={description}
            requirements={requirements}
            role={role}
          />
          <CardFooter position={position} company={company} />
        </>
      </div>
    </>
  );
}

export default Detail;
