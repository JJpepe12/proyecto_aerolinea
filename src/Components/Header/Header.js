import React from 'react';
import Navbar from '../Navbar/Navbar';
import {StylesHeader} from './StylesHeader';
import HeaderText from '../HeaderImmersive/HeaderImmersive';


const Header = () => {
  return (
    <StylesHeader>
        <Navbar/>
        <HeaderText/>
    </StylesHeader>
  )
}

export default Header;