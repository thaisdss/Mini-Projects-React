import styled from "styled-components";

export const Container = styled.div`
    background-color: #2b3566;
    padding: 2rem;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;

    p{
        color: #9da5d1;
    }
`;

export const Search_Container = styled.div`
    display: flex;
    gap: 0.5rem;

    input, button{
        padding: 0.6rem;
        border-radius: 3px;
        border: none;
        color: #2b3566;
    }

    button{
        background-color: #0e1129;
        cursor: pointer;
    }
`;