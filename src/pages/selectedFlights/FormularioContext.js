import React, { createContext, useState } from "react";

const MyFormularioContext = createContext();

const FormularioProvider = ({ children }) => {
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [salida, setSalida] = useState(null);
  const [regreso, setRegreso] = useState(null);
  const [niños, setNiños] = useState(0);
  const [adultos, setAdultos] = useState(0);
  const [bebes, setBebes] = useState(0);

  const actualizarValores = (valores) => {
    setOrigen(valores.origen);
    setDestino(valores.destino);
    setSalida(valores.salida);
    setRegreso(valores.regreso);
    setNiños(valores.niños);
    setAdultos(valores.adultos);
    setBebes(valores.bebes);
  };

  const contextValue = {
    origen,
    destino,
    salida,
    regreso,
    niños,
    adultos,
    bebes,
    actualizarValores,
  };

  return (
    <MyFormularioContext.Provider value={contextValue}>
      {children}
    </MyFormularioContext.Provider>
  );
};

export { MyFormularioContext, FormularioProvider };
