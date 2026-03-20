// import { useState } from 'react'
// import './App.css'
import { Routes,Route } from "react-router-dom";
import HomePage from "./Compoment/HomePage";
import DetailView from "./Compoment/DetailView";


function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/details" element={<DetailView />} />
     </Routes>
    </>
  );
};

export default App;
