import styled from "styled-components";

export const Container = styled.div`
    padding-bottom: 1.5rem;

    h1{
        text-transform: uppercase;
        text-align: center;
        margin: 1.5rem;
    }

    .post-body{
        margin-bottom: 3rem;
        text-align: justify;
        font-size: 1.2rem;

        &::first-letter{
            text-transform: uppercase;
        }
    }
`;

export const ContainerComments = styled.div`
    background-color: #777;
    padding: 1.5rem;
    border-radius: 5px;

    h2{
        margin-bottom: 1rem;
    }
`;

export const Comments = styled.div`
    display: flex;
    flex-direction: column;

    &:not(:last-of-type) {
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #0e1217;
    }

    p{
        color: #0e1217;
    }

    div{
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    div svg{
        font-size: 1.5rem;
    }

    .name::first-letter, 
    .email::first-letter, 
    .comment-body::first-letter{
        text-transform: uppercase;
    }

    .name{
        font-size: 1.1rem;
    }

    .email{
        font-size: 0.9rem;
        opacity: 0.7;
        color: #0e1217;
        margin-left: 1.9rem;
    }

    .comment-body{
        margin-top: 1rem;
        color: #0e1217;
    }
`;