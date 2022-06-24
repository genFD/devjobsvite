import React, { useState } from 'react';
import Data from '../mockdata.json';
const LogRocket = () => {
  const [query, setQuery] = useState('');
  return (
    <div className="bg-very-dark-blue text-white ">
      {/* <Search /> */}
      <div>
        <input
          type="text"
          id="search"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        ;
      </div>
      {Data.filter((item) => {
        if (query === '') {
          return item;
        } else if (
          item.first_name.toLowerCase().includes(query.toLowerCase())
        ) {
          return item;
        }
      }).map((item) => (
        <div key={item.id} className=" border border-white rounded-sm m-1 w-80">
          <p>{item.first_name}</p>
          <p>{item.last_name}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default LogRocket;
