import styled from "styled-components";
import {BsTrash} from "react-icons/bs";
import {BsPencilFill} from "react-icons/bs";
import {BsCheckLg} from "react-icons/bs"
import { useState } from "react";

const ListItem = styled.div`
    width: 450px;
    padding: 0.5rem;
    &:first-child{
        padding-top: 0.8rem;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Item = styled.div`
    background-color: #AEB8BD;
    border-radius: 15px;
    box-shadow: 0.3px -2.5px 1.5px #858d91 ;
    width: 370px;
    padding: 0.5rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    overflow: scroll;
    color: #E6E9EE;
    .delete{
        padding-right: 10px;
        padding-left: 0.5rem;
        font-size: 0.8rem;
        &:hover{
            color: #ED4C67;
            cursor: pointer;
        }
    }
    .edit{
        margin-left: auto;
        padding-right: 0.5rem;
        font-size: 0.8rem;
        &:hover{
            color: #4b6584;
            cursor: pointer;
        }
    }
`



const CheckButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #AEB8BD;
    border-radius: 15px;
    box-shadow: 0.3px -2.5px 1.5px #858d91 ;
    width: 45px;
    height: 40.33px;
    padding: 0.5rem;
    font-size: 1.2rem;
    border: none;
    color: #E6E9EE;
    &:hover{
        background-color: #858d91;
        cursor: pointer;
    }
`


const TodoListItem = ({todo}) => {
    const {id, text, checked} = todo;
    const [edit,setEdit] = useState(false);
    const [value, setValue] = useState(text)

    const del = ()=>{
        if(window.confirm('삭제하시겠습니까?'))
        fetch(`http://localhost:4000/Todos/${id}`,{
            method: "DELETE",
        })
        .then(()=>{
            window.location.href = 'http://localhost:3000/Todos';
        })
        .catch((error) => {
            console.log('Error', error)
        })
    }
    const isChecked = () => {
        fetch(`http://localhost:4000/Todos/${id}`,{
            method: "PATCH",
            headers: {"Content-Type" : "Application/json"},
            body: JSON.stringify({
                checked : !checked
            })
        })
        .then(()=>{
            window.location.href = 'http://localhost:3000/Todos';
        })
        .catch((error)=>{
            console.error('Error', error)
        })
    }

    const editHandle = () => {
        setEdit(!edit)
    }

    const editInput = (e) => {
        setValue(e.target.value)
    }
    const enter = (e) => {
        if(e.key === 'Enter'){
            fetch(`http://localhost:4000/Todos/${id}`,{
                method: "PATCH",
                headers: {"Content-Type" : "Application/json"},
                body: JSON.stringify({
                    text : value
                })
            })
            .then(()=>{
                window.location.href = 'http://localhost:3000/Todos';
            })
            .catch((error)=>{
                console.error('Error', error)
            })
        }
    }

    return (
        <ListItem>
            {
                edit 
                ?            
            <Item as = 'input' value={value} onChange={editInput} onKeyDown={enter}/>
                :
            <Item>
                <BsTrash className="delete" onClick={()=>del(id)}/>
                {text}
                <BsPencilFill className="edit" onClick={editHandle} />
            </Item>
            }
            <CheckButton onClick={isChecked}>{checked ? <BsCheckLg/>: null}</CheckButton>
        </ListItem>
    );
};

export default TodoListItem;