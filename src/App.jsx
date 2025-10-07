
import React from 'react';
import './App.css'
import "./store.jsx"
import ToDo from './components/ToDo.jsx';


const App = () => {
  return (
    <div className='font-bold'>
      hello redux
      <ToDo></ToDo>
    </div>
  );
};

export default App;