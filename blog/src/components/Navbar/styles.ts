import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: #17191f;

    h2 a{
        opacity: 1;
    }

    ul{
        display: flex;
        gap: 1rem;
    }

    .new-btn{
        font-weight: bold;
        border: 1px solid #fff;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        opacity: 1;
    }
`;