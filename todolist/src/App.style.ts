import styled from "styled-components";

export const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    background-color: #efefef;
    padding: 20px 30px;
    border-radius: 10px;
    margin-bottom: 300px;

    h1{
        text-align: center;
        margin-bottom: 30px;
    }

    h2{
        margin-bottom: 10px;
    }

    p{
        margin: 10px 0;
    }

    input, select{
        padding: 5px;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 3px;
        width: 100%;
    }
`;

export const TodoList = styled.div`
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #333;
`;