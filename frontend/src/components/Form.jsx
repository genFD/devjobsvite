import React from 'react';
import { QueryInput, LocationInput, ContractInput } from '../components';
import { useGlobalContext } from '../context/context.jsx';

const Form = () => {
  const { handleSubmit } = useGlobalContext();
  return (
    <div className="bg-white hidden h-full dark:bg-19202D tablet:flex tablet:justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center h-full w-full px-4 desktop:pl-8"
      >
        <QueryInput />
        <LocationInput />
        <ContractInput />
      </form>
    </div>
  );
};

export default Form;
