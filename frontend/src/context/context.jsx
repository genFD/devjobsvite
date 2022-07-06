import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
const AppContext = React.createContext();

const API_URL = '/v1/devjobs/jobs/';

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const getallJobs = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${API_URL}`);
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
    if (query) {
      search();
    }
    getallJobs();
  }, [query]);
  return (
    <AppContext.Provider
      value={{ loading, setLoading, search, results, query, setQuery }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
