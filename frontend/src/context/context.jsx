import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
const AppContext = React.createContext();

const API_URL = '/v1/devjobs/jobs/';

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [query, setQuery] = useState('');
  const [valid, setValid] = useState(false);
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
  const showLoadmore = () => {
    setValid(true);
  };
  const hideLoadmore = () => {
    setValid(false);
  };
  const showModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const handleLoadMore = () => {
    getJobs();
    // hideLoadmore();
  };
  const clearInput = () => {
    if (query) {
      setQuery('');
    } else {
      setLocation('');
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (query) {
      getJobs();
      setQuery('');
    } else {
      getJobsByLocation();
      setLocation('');
    }
    hideLoadmore();
  };
  const handleSubmitByLocation = (event) => {
    event.preventDefault();
    getJobsByLocation();
    hideLoadmore();
  };

  useEffect(() => {
    getJobs();
    handleLoadMore();
    // if (location) {
    //   getJobsByLocation();
    // }
    if (checked) {
      getJobsByContract();
    }
  }, [checked]);

  // useEffect(() => {
  //   getJobs();
  //   handleLoadMore();
  //   if (location) {
  //     getJobsByLocation();
  //   }
  //   if (checked) {
  //     getJobsByContract();
  //   }
  // }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        modal,
        showModal,
        closeModal,
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
        handleSubmit,
        handleSubmitByLocation,
        handleLoadMore,
        clearInput,
        valid,
        showLoadmore,
        hideLoadmore,
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
