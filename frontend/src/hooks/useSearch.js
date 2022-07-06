import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = '/v1/devjobs/jobs/';

function useSearch() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // const lastQuery = localStorage.getItem('lastQuery');
    getallJobs();
  }, []);

  const getallJobs = async () => {
    const { data } = await axios.get(`${API_URL}`);
    setResults(data);
  };
  const search = async (q) => {
    const { data } = await axios.get(
      `${API_URL}/search?company=${q}&position=${q}`
    );
    setResults(data);

    // localStorage.setItem('lastQuery', q);
  };

  return { search, results, setQuery, query, getallJobs };
}

export default useSearch;
