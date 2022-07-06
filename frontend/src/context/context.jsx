import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
const AppContext = React.createContext();

const API_URL = '/v1/devjobs/jobs/';

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [contract, setContract] = useState('');
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState([]);

  const getJobs = async () => {
    setLoading(true);
    let url;
    const urlQuery = `&position=${query}&company=${query}&expertise=${query}`;
    if (query) {
      url = `${API_URL}/search?${urlQuery}`;
    } else {
      url = API_URL;
    }

    try {
      const { data } = await axios.get(`${url}`);
      if (data) {
        setResults(data);
      } else {
        setResults([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const getJobsByLocation = async () => {
    setLoading(true);
    let url;
    const urlQuery = `location=${location}`;
    if (location) {
      url = `${API_URL}/search/location?${urlQuery}`;
    } else {
      url = API_URL;
    }

    try {
      const { data } = await axios.get(`${url}`);
      if (data) {
        setResults(data);
      } else {
        setResults([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const getJobsByContract = async () => {
    setLoading(true);
    const fullTime = 'Full Time';
    let url;
    const urlQuery = `contract=${fullTime}`;
    if (checked) {
      url = `${API_URL}/search/contract?${urlQuery}`;
    } else {
      url = API_URL;
    }

    try {
      const { data } = await axios.get(`${url}`);
      if (data) {
        setResults(data);
      } else {
        setResults([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const handleCheckbox = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    getJobs();
    getJobsByLocation();
    getJobsByContract();
  }, [query, location, checked]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        results,
        query,
        setQuery,
        setLocation,
        location,
        setContract,
        checked,
        setChecked,
        handleCheckbox,
        contract,
        getJobs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
