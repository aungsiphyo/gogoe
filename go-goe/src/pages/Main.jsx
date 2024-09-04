import React, { useState } from 'react';
import NavbarAlt from '../components/NavbarAlt';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <NavbarAlt />
            <Outlet />
        </div>
    );
  };
  
  export default Main;