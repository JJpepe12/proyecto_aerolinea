import React from 'react';
import logo from '../../assets/icons/logo.svg';
import {StylesNav, IconHamburger} from './StyleNavbar';
import HamburgerNav from '../../assets/icons/icon-hamburger.svg';
import HamburgerCancel from '../../assets/icons/icon-close.svg';
import MenuOptions from './MenuOptions';

const Navbar = () => {
    const [viewOption, setViewOption] = React.useState(false);
    const navList = [
        {
            name: "About",
            url: ""
        },
        {
            name: "Careers",
            url: ""
        },
        {
            name: "Events",
            url: ""
        },
        {
            name: "Products",
            url: ""
        },
        {
            name: "Support",
            url: ""
        }
    ]
const handleClick = () =>{
    setViewOption(!viewOption);
};

return (
    <StylesNav viewOption={viewOption}>
        <div>
            <img className='logo' src={logo} alt="logo"  />
        </div>
        <IconHamburger onClick={handleClick}>
            <img className='hamburguesa'src= {viewOption ? HamburgerCancel : HamburgerNav} alt="" />
        </IconHamburger>
        <MenuOptions navList={navList} viewOption={viewOption} />
    </StylesNav>
    );
}
export default Navbar;