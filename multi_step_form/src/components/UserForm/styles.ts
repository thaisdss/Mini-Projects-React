import styled from "styled-components";

export const Container = styled.div``;

export const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-bottom: 2rem;

    label{
        font-weight: bold;
        color: #777;
        font-size: 0.9rem;
    }

    input{
        padding: 0.6rem;
        border: none;
        border-radius: 3px;
        box-shadow: 0px 2px 8px 0px rgba(99, 99, 99, 0.2);
    }
`;