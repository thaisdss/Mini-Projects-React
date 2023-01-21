import styled from "styled-components";

export const Container = styled.div`
    background-color: #3d3f43;
    border-radius: 10px;
    padding: 10px;

    img{
        max-width: 100%;
        max-height: 263.500px;
        display: block;
        margin: auto;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    button {
        display: block;
        background-color: #756DF4;
        border: 0;
        color: #FFF;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 10px auto 0 auto;
        cursor: pointer;
        
        &:hover {
            opacity: .9;
        }
    }
`;