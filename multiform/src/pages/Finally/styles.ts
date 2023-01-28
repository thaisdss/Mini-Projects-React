import styled from "styled-components";

export const Container = styled.div`
    p{
        font-size: 13px;
        color: #b8b8d4;
    }

    h1{
        margin: 0;
        padding: 0;
        font-size: 26px;
    }

    hr{
        height: 1px;
        border: none;
        background-color: #16195c;
        margin: 30px 0;
    }

    .backButton{
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #b8b8d4;
    }
`;

export const Info_Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 50px;
    margin-bottom: 80px;

    & > div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
`;

export const Icon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #25cd89;
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`;

export const Info = styled.div`
    margin-left: 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    p{
        margin: 0;
        margin-top: 5px;
    }
`;

export const Info_Title = styled.h3`
    margin: 0;
    padding: 0;
    color: #25cd89;
`;