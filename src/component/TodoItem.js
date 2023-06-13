import React from 'react'
import { MdDone } from 'react-icons/md';
import { MdDeleteOutline } from 'react-icons/md';
import './scss/TodoItem.scss';

const TodoItem = () => {
  return (
    <li className='todo-list-item'>
      <div className='check-circle'>
          <MdDone />
      </div>
      <span className='text'>할일</span>
      <div className='remove'>
          <MdDeleteOutline />
      </div>
    </li>
  )
}

export default TodoItem