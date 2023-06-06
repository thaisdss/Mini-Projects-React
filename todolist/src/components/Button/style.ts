import styled from "styled-components";

export const Button = styled.button<{color: string}>`
    background-color: ${(props) => props.color};
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    opacity: 0.8;
    transition: 0.3s;
    margin-right: 10px;

    &:hover{
        opacity: 1;
    }
`;