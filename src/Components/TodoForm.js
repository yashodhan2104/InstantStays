import React, { useState } from "react";
import styled from "styled-components";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <Input>
            <input
              type="text"
              placeholder="Enter your comment..."
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
          </Input>
          <Btn>
            <button type="submit">Comment</button>
          </Btn>
        </form>
      </Container>
    </>
  );
};

export default TodoForm;
const Container = styled.div``;
const Input = styled.div`
  input {
    padding: 4px 10px;
    outline: none;
    background-color: #fff;
    border-radius: 10px;
    width: 40%;
    height: 50px;
  }
`;
const Btn = styled.div`
  button {
    background: #000;
    outline: none;
    border: 2px solid #fff;
    border-radius: 10px;
    transition: all 0.25s linear;
    cursor: pointer;
    color: #fff;
    width: 150px;
    padding: 10px 5px;
    margin-top: 1rem;
    font-weight: bold;
    &:hover {
      background: #fff;
      border: 2px solid transparent;
      color: #000;
      box-shadow: 0 0 10px 0 #fff;
    }
  }
`;
