import React, { useState } from 'react'
import { MdDone } from 'react-icons/md';
import { MdDeleteOutline } from 'react-icons/md';
import './scss/TodoItem.scss';
import cn from 'classnames';


const TodoItem = ({ item }) => {

  const {id, title, done} = item;

  return (
    <li className='todo-list-item'>
      <div className={cn('check-circle', {active: done})}>
          {done && <MdDone />}  
      </div>
      <span className={cn('text', {finish: done})}>{title}</span>
      <div className='remove'>
          <MdDeleteOutline />
      </div>
    </li>
  )
}

export default TodoItem