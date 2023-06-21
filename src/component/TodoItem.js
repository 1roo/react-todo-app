import React, { useState } from 'react'
import { MdDone } from 'react-icons/md';
import { MdDeleteOutline } from 'react-icons/md';
import './scss/TodoItem.scss';
import cn from 'classnames';


const TodoItem = ({ item, remove, check }) => {

  const {id, title, done} = item;

  return (
    <li className='todo-list-item'>
      <div 
        className={cn('check-circle', {active: done})}
        onClick={()=> check(id, done)}
      >
          {done && <MdDone />}  
      </div>
      <span className={cn('text', {finish: done})}>{title}</span>
      <div className='remove' onClick={() => remove(id)}>
          <MdDeleteOutline />
      </div>
    </li>
  )
}

export default TodoItem