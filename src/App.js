import React from 'react';

import './App.css';

import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import ColdCoffeeMenu from './Components/ColdCoffeeMenu';

function App() {
  const food = [
    ["Cold Coffee", 340, 10],
    ["Hot Coffee", 20, 40],
    ["Soda Shikanji", 60, 90],
    ["Fruit Juice", 80, 120],
    ["Fruit Shake", 100, 140],
    ["Ice Cream Shake", 205, 245],
    ["Lassi", 260, 290],
    ["Chai", 290, 320],
    ["Softy", 200, 250],
    ["Ice-Tea", 100, 50],
    ["Mocktail", 120, 100],
    ["Ice Cream Soda", 100, 130],
  ];

  return (
    <Routes>
      <Route path='/' element={<Home food={food}/>} />
      {
        food.map(([foodName, hueA, hueB]) => {
          return (
            <Route path={`/${foodName}`} element={<ColdCoffeeMenu heading={foodName} />} />
          )
        })
      }
    </Routes>
  );
};

export default App;
