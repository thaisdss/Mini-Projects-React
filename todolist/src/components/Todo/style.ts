import styled from "styled-components";

export const Container = styled.div<{isCompleted: boolean}>`
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    text-decoration: ${(props) => props.isCompleted ? "line-through" : "none"};

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Content = styled.div``;

export const Category = styled.p``;