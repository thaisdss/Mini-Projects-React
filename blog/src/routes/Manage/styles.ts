import styled from "styled-components";

export const Container = styled.div`
    h1{
        text-transform: uppercase;
        text-align: center;
        margin: 1.5rem;
        margin-bottom: 3rem;
    }
`;

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #777;

    h2::first-letter{
        text-transform: uppercase;
    }

    div{
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
    }
`;

export const Button = styled.button< {color: string} >`
    background-color: ${props => props.color === "blue" ? "#48D1CC" : "	#FF0000"};
    border: 1px solid #fff;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    cursor: pointer;
    max-width: 100px;
    text-align: center;
    font-size: 1rem;
    color: #fff;
    transition: 0.3s;

    &:hover{
        background-color: #0e1217;
    }
`;