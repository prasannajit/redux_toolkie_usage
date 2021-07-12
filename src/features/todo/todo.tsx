import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  add,
  remove,
  fetchToDoAsync,
  selectToDo
} from './todoSlice';

export function ToDo() {
  const todo = useAppSelector(selectToDo);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div>
        <button
        >
            add
        </button>
        <ul>{todo.map((item)=><li key={item.id}>{item.title}</li>)}</ul>
        <button
          onClick={() => dispatch(remove(1))}
        >
          remove
        </button>
      </div>
    </div>
  );
}
