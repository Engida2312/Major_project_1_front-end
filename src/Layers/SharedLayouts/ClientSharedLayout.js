import {Outlet, useLocation, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../Features/Auth/authSlice";
import Navbar from '../Nav/Navbar';
import Footer from '../Footer/Footer';

const ClientSharedLayout = () => {
   const token = useSelector(selectCurrentToken)
  const location = useLocation()

  return (
    <>
        <Navbar/>
        <Outlet />
        <Footer/>
    </>
  );
};
export default ClientSharedLayout;
