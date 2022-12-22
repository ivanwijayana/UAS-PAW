import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";
import LoginUser from "./LoginUser";
import SAFormCabang from "./superadmin/SAFormCabang";
import SAEditCabang from "./superadmin/SAEditCabang";
import SACabang from "./SACabang";
import AdminRecexp from "./AdminRecexp";
import AdminRecuser from "./AdminRecuser";
import AdminFormRecexp from "./admin/AdminFormRecexp";
import AdminFormRecuser from "./admin/AdminFormRecuser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login-user' element={<LoginUser />} />
        <Route path='/login-superadmin' element={<SACabang />} />
        <Route path='/login-admin' element={<AdminRecexp />} />
        <Route path='/cabang' element={<SACabang />} />
        <Route path='/cabang/delete/:id' element={<SACabang />} />
        <Route path='/cabang/edit/:id' element={<SAEditCabang />} />
        <Route path='/cabang/form' element={<SAFormCabang />} />
        <Route path='/admin' element={<AdminRecexp />} />
        <Route path='/recexp' element={<AdminRecexp />} />
        <Route path='/recexp/form' element={<AdminFormRecexp />} />
        <Route path='/recuser' element={<AdminRecuser />} />
        <Route path='/recuser/form' element={<AdminFormRecuser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
