import styled from "styled-components";
import TodoListItem from "./TodoListItem";


const List = styled.div`
    min-height: 320px;
    max-height: 500px;
    overflow-y: auto;
`

const TodoList = ({todos}) => {
    return (
        <List>
            {todos.map(todo => (<TodoListItem todo={todo} key={todo.id}/>))}
        </List>
    );
};

export default TodoList;