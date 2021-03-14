import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

const Dummydata = () => {
  const InsideData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then(res => {
      console.log(res);
    });
  };
  useEffect(() =>
  {
    InsideData();
  }, []);
  return <h1>Hello </h1>
};

function App() {
  return (
    <div className="App">
      <Dummydata />
    </div>
  );
}

export default App;
