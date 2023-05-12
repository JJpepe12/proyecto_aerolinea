import React from "react";
import Logo from "../../assets/icons/logo.svg";
import { StylesFooter } from "../../Components/Footer/StyleFooter";
import Facebook from "../../assets/icons/icon-facebook.svg";
import Twitter from "../../assets/icons/icon-twitter.svg";
import Pinterest from "../../assets/icons/icon-pinterest.svg";
import Instagram from "../../assets/icons/icon-instagram.svg";
const Footer = () => {
  const Links = [
    {
      name: "About",
      router: "",
    },
    {
      name: "Careers",
      router: "",
    },
    {
      name: "Events",
      router: "",
    },
    {
      name: "Products",
      router: "",
    },
    {
      name: "Support",
      router: "",
    },
  ];

  return (
    <>
      <StylesFooter className="StylesFooter">
       <div className="contenedor_1">
        <figure className="Logo">
          <img src={Logo} alt="logo del sitio web" />
        </figure>
        <div className="Link">
          {Links.map((item, index) => (
            <a key={`${item.name}-${index}`}>{item.name}</a>
          ))}
        </div>
        </div> 
        <div className="contenedor_2">
        <nav className="Social_networks">
          <button>
            <img src={Facebook} alt="logo de Facebook" />
          </button>
          <button>
            <img src={Twitter} alt="logo de Twiter" />
          </button>
          <button>
            <img src={Pinterest} alt="logo de Pinterest" />
          </button>
          <button>
            <img src={Instagram} alt="logo de Instagram" />
          </button>
        </nav>
        <div className="copyright">
        <p>©️ 2021| LoopsStudios. All rights reserved.</p>
        </div>
        </div>
        
      </StylesFooter>
    </>
  );
};
export default Footer;
