import styled from "styled-components";
import {IoIosAdd} from 'react-icons/io'
import { useState } from "react";

const TodoInsert = styled.form`
    display: flex;
    background-color: #e6eaeb;
    border-radius: 15px;
    box-shadow: 0.5px 2.5px 1.5px #b5b8b8 ;
    width: 450px;
    justify-content: center;
    align-items: center;
    input{
        border: inherit;
        background: none;
        outline: none;
        padding: 0.5rem;
        margin-left: 0.5rem;
        font-size: 1.2rem;
        color: #6C7B83;
        &::placeholder{
            color: inherit;
        }
        flex: 1;
    }
    button {
        box-shadow: none;
        background: none;
        border: none;
        outline: none;
        background-color: inherit;
        color: #6A7A87;
        margin-right: 1rem;
        font-size: 2rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        &:hover{
            font-size: 2.2rem;
        }
    }
`



const Insert = () => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = () => {
        console.log(value)
        fetch('http://localhost:4000/Todos',{
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
          text: value,
          checked : false
        })
      })
      .catch((error)=>{
        console.error('Error',error)
      })
    }


    return (
        <TodoInsert onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요" value={value} onChange={onChange}/>
            <button type="submit"><IoIosAdd/></button>
        </TodoInsert>
    );
};

export default Insert;