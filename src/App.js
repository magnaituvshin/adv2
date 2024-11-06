import React from 'react';
import { useGetAdviceQuery } from './services/adviceApi';
import dice from './images/dice.svg';
import divider from './images/divider.svg';
import './App.css';

const App = () => {
  const { data, error, isLoading, refetch } = useGetAdviceQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <p className="adviceNumber">ADVICE #{data?.slip.id}</p>
      <p className="advice">"{data?.slip.advice}"</p>
      <img className="divider" src={divider} alt="Divider" />
      <button onClick={refetch}>
        <img src={dice} alt="Dice" />
      </button>
    </div>
  );
};

export default App;