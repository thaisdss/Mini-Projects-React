import styled from "styled-components";

export const Container = styled.div`
    h2{
        text-align: center;
        margin-bottom: 1rem;
    }
`;

export const Form = styled.form`
    max-width: 500px;
    width: 100%;
    margin: 0 auto;

    .btn{
        background-color: #fff;
        border: 1px solid #fff;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        cursor: pointer;
        opacity: 1;
    }
`;

export const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    label{
        margin-bottom: 0.5rem;
    }

    input, textarea{
        padding: 0.5rem;
        border-radius: 5px;
        border: none;
    }
`;