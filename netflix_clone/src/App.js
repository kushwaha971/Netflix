import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/landing-page/Landing";
import SignIn from "./components/landing-page/user/SignIn";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Landing />} />
      <Route path="/login" element={<SignIn/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
