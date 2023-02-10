import styled from "styled-components";

export const Container = styled.div``;

export const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-bottom: 2rem;

    textarea{
        padding: 0.6rem;
        border: none;
        border-radius: 3px;
        box-shadow: 0px 2px 8px 0px rgba(99, 99, 99, 0.2);
        height: 120px;
    }
`;

export const FormControlRadio = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin-bottom: 2rem;

    svg{
        font-size: 1.6rem;
        cursor: pointer;
        transition: 0.3s;

        &:hover{
            fill: #7076f4;
        }
    }

    input:checked ~ svg{
        fill: #7076f4;
    }
`;

export const RadioContainer = styled.label`
    text-align: center;
    position: relative;

    input{
        opacity: 0;
        position: absolute;
        top: 15px;
        left: 30px;
    }

    p{
        font-style: italic;
        font-weight: 300;
        font-size: 0.7rem;
        margin-top: 0.4rem;
    }
`;