import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    max-width: 400px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 2rem;

    &::after{
        content: "";
        width: 380px;
        border-bottom: 1px solid #ccc;
        position: absolute;
        top: 20px;
    }
`;

export const Step = styled.div<{ active: boolean }>`
    text-align: center;
    background-color: #fff;
    z-index: 1;
    width: 120px;
    padding: 0.5rem;
    font-weight: ${props => props.active ? "bold" : "normal"};

    svg{
        font-size: 1.6rem;
        margin-bottom: 0.2rem;
        fill: ${props => props.active ? "#7076f4" : ""};
    }
`;