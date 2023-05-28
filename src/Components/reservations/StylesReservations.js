import styled from "styled-components";

export const Container = styled.aside`
    position: fixed;
    top: 50px;
    right: 80px;
    width: 25%;
    h1 {
        font-size: 1.2rem;
        margin-bottom: 10px;
    }

    @media (max-width: 1200px) {
    position: relative;
    top: -1171px;
    left: -1px;
    width: 29%;
    }

    @media (max-width: 768px) {
        position: relative;
        top: -1364px;
        left: -1px;
        width: 100%;
    }

    @media (max-width: 375px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        top: -3176px;
    }
`;

export const Subcontainer = styled.article`
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding: 5px;
    p {
    color: var(--Gray);
    margin-left: 10px;
    }

    .top__text{
    display: flex;
    justify-content: space-between;
    margin: 10px;
    }

    .middle__text{
    display: grid;
    grid-template-columns: repeat(3, 0.2fr);
    grid-column-gap: 1px;
    margin: 10px;
    h1 {
        font-size: 2rem;
    }
    img {
    height: 1px;
    width: 30px;
    position: relative;
    bottom: -30px;
    left: 12px;
    }
    }
`;

export const TimeDetails = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 0.2fr);
    margin: 10px;
    p {
        font-size: 13px;
        position: relative;
        top: -10px;
        left: -10px;
    }
`;
