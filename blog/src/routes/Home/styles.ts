import styled from "styled-components";

export const Container = styled.div`
    h1{
        text-transform: uppercase;
        text-align: center;
        margin: 1.5rem;
    }
`;

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #777;

    h2, p{
        margin-bottom: 1rem;
    }

    h2::first-letter{
        text-transform: uppercase;
    }

    .btn{
        background-color: #fff;
        color: #0e1217;
        border: 1px solid #fff;
        opacity: 1;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        max-width: 100px;
        text-align: center;
        transition: 0.3s;

        &:hover{
            color: #fff;
            background-color: #0e1217;
        }
    }
`;