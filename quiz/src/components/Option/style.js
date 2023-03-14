import styled from "styled-components";

export const Container = styled.div`
    background-color: #3c0e80;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    opacity: 0.8;
    transition: 0.4s;

    &:hover{
        opacity: 1;
    }

    p{
        margin-bottom: 0;
    }
`;