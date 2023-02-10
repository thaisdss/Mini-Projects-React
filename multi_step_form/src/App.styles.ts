import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
`;

export const Header = styled.header`
    text-align: center;
    margin-bottom: 2rem;

    h2{
        font-size: 2rem;
        margin-bottom: 1rem;
    }
`;

export const FormContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    padding: 1.5rem;
    box-shadow:  0px 7px 29px 0px rgba(100, 100, 111, 0.2);

    form{
        max-width: 400px;
        margin: 0 auto;
    }
`;

export const InputsContainer = styled.div`
    min-height: 280px;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    button{
        font-size: 0.9rem;
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-radius: 3px;
        background-color: #dfdfdf;
        cursor: pointer;
        border: none;
        transition: 0.3s;

        &:hover{
            background-color: #cfcfcf;
        }
    }
`;