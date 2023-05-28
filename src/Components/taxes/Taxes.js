import React from "react";
import { Container, Subcontainer, Column } from "./StylesTaxes";

const Taxes = () => {
    return (
        <>
        <Container>
            <h1>Costos de vuelo</h1>
            <Subcontainer>
            <div>
                <p>Tarifa base</p>
                <p>Descuento Promocional</p>
                <p>Tarifa base con descuento</p>
                <p>IVA Tarifa</p>
                <h3>Total</h3>
            </div>
            <Column>
                <p>$1,505 MXN</p>
                <p>$1,034 MXN</p>
                <p>$471 MXN</p>
                <p>$75 MXN</p>
                <h2>$548 MXN</h2>
            </Column>
            </Subcontainer>
        </Container>
        </>
    );
};

export default Taxes;
