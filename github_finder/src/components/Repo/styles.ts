import styled from "styled-components";

export const Container = styled.div`
    background-color: #0e1129;
    border: 1px solid #9ba5d1;
    border-radius: 1rem;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    p{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-align: start;

        svg{
            font-size: 1.2rem;
        }

        span{
            font-weight: bold;
        }
    }

    .to-code{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        background-color: #2b3566;
        padding: 0.5rem 1.2rem;
        border-radius: 5px;
        opacity: 0.8;
        transition: 0.3s;
        width: 150px;

        &:hover{
            opacity: 1;
        }
    }
`;

export const Stats = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const Stats_Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #9ba5d1;
    border-radius: 5px;

    div, span{
        height: 100%;
        padding: 0.5rem;
    }

    div{
        background-color: #4ed8c7;
    }
`;