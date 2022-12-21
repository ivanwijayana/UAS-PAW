import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";
import LoginUser from "./LoginUser";
import SATambahCabang from "./SATambahCabang"; 
import SAFormCabang from "./SAFormCabang";
import SAEditCabang from "./SAEditCabang";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login-user' element={<LoginUser />} />
        <Route path='/cabang' element={<SATambahCabang />} />
        <Route path='/cabang/delete/:id' element={<SATambahCabang />} />
        <Route path='/cabang/edit/:id' element={<SAEditCabang />} />
        <Route path='/cabang/form' element={<SAFormCabang />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
