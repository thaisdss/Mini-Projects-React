import styled from "styled-components";

export const Container = styled.div`
    h2{
        font-size: 1.2rem;
        text-align: center;
    }

    .back{
        position: absolute;
        left: 2%;
        top: 3%;

        text-align: center;
        background-color: #2b3566;
        padding: 0.5rem 1.2rem;
        border-radius: 5px;
        opacity: 0.8;
        transition: 0.3s;

        &:hover{
            opacity: 1;
        }
    }
`;

export const Repos_Container = styled.div`
    background-color: #2b3566;
    padding: 2rem;
    border-radius: 1rem;
    margin: 2rem auto;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`;