import React,{useEffect} from 'react';
import logo from './logo.svg';
import { ToDo } from './features/todo/todo';
import { useAppSelector, useAppDispatch } from './app/hooks';
import {
  fetchToDoAsync,
  selectToDo
} from './features/todo/todoSlice';
import './App.css';

function App() {
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchToDoAsync())
  },[]);
  return (
    <div className="App">
      <ToDo/>
    </div>
  );
}

export default App;
