import styled from "styled-components";

const TodoTemplate = styled.div`
    width: 500px;
    margin: 6rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;
    overflow: scroll;
`
const AppTitle = styled.div`
    background-color: #E6EAEB;
    color: #6F7478;
    height: 3rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    padding-left: 20px;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #E6EAEB;
`

const ToDoContainer = ({children}) => {
    return (
        <TodoTemplate>
            <AppTitle>To Do List</AppTitle>
            <Content>{children}</Content>
        </TodoTemplate>
    );
};

export default ToDoContainer;