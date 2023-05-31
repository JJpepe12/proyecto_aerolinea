import React, { createContext, useState } from "react";

// Crea el contexto
const FormularioContext = createContext();

// Crea el proveedor del contexto
const FormularioProvider = ({ children }) => {
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [salida, setSalida] = useState(null);
  const [regreso, setRegreso] = useState(null);
  const [niños, setNiños] = useState(0);
  const [adultos, setAdultos] = useState(0);
  const [bebes, setBebes] = useState(0);

  // Función para actualizar los valores del formulario
  const actualizarValores = (valores) => {
    setOrigen(valores.origen);
    setDestino(valores.destino);
    setSalida(valores.salida);
    setRegreso(valores.regreso);
    setNiños(valores.niños);
    setAdultos(valores.adultos);
    setBebes(valores.bebes);
  };

  // Valor del contexto que se compartirá con los componentes descendientes
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
    <FormularioContext.Provider value={contextValue}>
      {children}
    </FormularioContext.Provider>
  );
};

export { FormularioContext, FormularioProvider };
