import styled from "styled-components";

export const Container = styled.div<{isLoading: boolean}>`
    animation: ${props => props.isLoading ? "is-rotating 1s infinite" : "none"};
    border: 6px solid #9ba5d1;
    border-radius: 50%;
    border-top-color: #2b3566;
    margin: 0 auto;
    height: 50px;
    width: 50px;

    @keyframes is-rotating {
        to{
            transform: rotate(1turn);
        }
    }
`;