import React from "react";
import { StylesFooter } from "../../Components/Footer/StyleFooter";

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
          <img src={""} alt="logo del sitio web" />
        </figure>
        </div> 
        <div className="contenedor_2">
        <nav className="Social_networks">
          <button>
            <img src={""} alt="logo de Facebook" />
          </button>
          <button>
            <img src={""} alt="logo de Twiter" />
          </button>
          <button>
            <img src={""} alt="logo de Pinterest" />
          </button>
          <button>
            <img src={""} alt="logo de Instagram" />
          </button>
        </nav>
        <div className="copyright">
        <p>©️ 2021| Volaris. All rights reserved.</p>
        </div>
        </div>
        
      </StylesFooter>
    </>
  );
};
export default Footer;
