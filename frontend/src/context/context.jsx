import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
const AppContext = React.createContext();

const API_URL = '/v1/devjobs/jobs/';

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const getallJobs = async () => {
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
  const search = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${API_URL}/search?&position=${query}`);
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

  useEffect(() => {
    getallJobs();
  }, [query]);
  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        search,
        results,
        query,
        setQuery,
        getallJobs,
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
