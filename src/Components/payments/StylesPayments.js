import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 5% 2% 0%;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        margin-left: -80%;
    }
    #titleServices{
        margin-left: -70%;
    }

    @media (max-width: 1024px) {
        width: 125%;
        h1 {
            margin-left: -70%;
        }
        #titleServices {
            margin-left: -60%;
        }
    }

    @media (max-width: 768px) {
        width: 185%;
        h1 {
            margin-left: -68%;
        }
        #titleServices {
            margin-left: -55%;
        }
    }

    @media (max-width: 426px) {
        width: 300%;
        h1 {
            margin-left: -72%;
        }
        #titleServices {
            margin-left: -62%;
        }
    }
`;

export const StyledPayments = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow:0 10px 20px -10px rgba(0, 0, 0, 0.2);
    border: 1px solid rgb(238, 238, 238);
    padding: 40px;
    width:96%;
    align-items: center;

    h2 {
        margin-bottom: 1rem;
        font-weight: lighter;
    }

    ul {
        display: flex;
        gap: 2rem;
    }

    @media (max-width: 1024px) {
        padding: 30px;
        width:90%;
        h2 {
            margin-bottom: 0.7rem;
        }
        ul {
            gap: 1.3rem;
        }
    }

    @media (max-width: 768px) {
        padding: 20px;
        h2 {
            margin-bottom: 0.5rem;
        }
        ul {
            gap: 1rem;
        }
    }

    @media (max-width: 426px) {
        padding: 15px;
    }
`;
