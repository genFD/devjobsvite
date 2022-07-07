import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
const AppContext = React.createContext();

const API_URL = '/v1/devjobs/jobs/';

const AppProvider = ({ children }) => {
  /* ------------------- */
  /* APP STATES VALUES */
  /* ------------------- */
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [contract, setContract] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [jobDetail, setJobDetail] = useState(null);
  const [placeholder, setplaceholder] = useState(
    JSON.parse(localStorage.getItem('placeholder'))
  );

  /* ------------------- */
  /* CORE FILTER FUNCTIONNALITIES */
  /* ------------------- */
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
  const getJobDetail = async (id) => {
    try {
      const { data } = await axios.get(`/v1/devjobs/jobs/${id}`);
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
  const handleCheckbox = () => {
    setChecked(!checked);
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
  };
  const handleLoadMore = () => {
    getJobs();
  };
  // on first render display all jobs
  useEffect(() => {
    getJobs();
    getJobsByContract();
    // eslint-disable-next-line
  }, [checked]);

  /* ------------------- */
  /* MANAGING LOCATION MODAL ON MOBILE */
  /* ------------------- */

  // utility functions to show and hide modal
  const showModal = () => setModal(true);
  const closeModal = () => setModal(false);

  // hide modal on large screenss
  const modalFixer = () => {
    if (window.innerWidth >= 768) {
      closeModal();
    }
  };

  /* ------------------- */
  /* MANAGING QUERY INPUT PLACEHOLDER */
  /* ------------------- */

  // storing  local storage placeholder state value in local storage so that value stays consistent
  localStorage.setItem('placeholder', placeholder);

  // Swap placeholder on large screen
  const swapPlaceholder = () => {
    if (window.innerWidth >= 1440) {
      setplaceholder(true);
    } else if (window.innerWidth < 1440) {
      setplaceholder(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        modal,
        modalFixer,
        swapPlaceholder,
        placeholder,
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
        handleLoadMore,
        clearInput,
        getJobDetail,
        jobDetail,
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
