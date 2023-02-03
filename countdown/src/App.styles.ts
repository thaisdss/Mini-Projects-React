import styled from "styled-components";

export const Container = styled.div`
    background: #000 url("assets/background.jpg") no-repeat center;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerCountdown = styled.div`
    min-width: 50%;
    min-height: 300px;
    background-color: rgba(255,255,255, 0.8);
    padding: 2rem;
    border-radius: 1rem;
`;

export const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    gap: 2rem;
`;