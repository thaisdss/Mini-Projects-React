import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    max-width: 500px;
    background-color: #8435de;
    border-radius: 1rem;
    padding: 2rem;

    h2{
        margin-bottom: 2rem;
    }

    p{
        margin-bottom: 1rem;
    }

    button{
        border: 2px solid #fff;
    }
`;

export const Options_Container = styled.div`
    .correct{
        background-color: #0bfc03;
    }

    .wrong{
        background-color: #3c0e70;
        opacity: 0.4;
    }
`;