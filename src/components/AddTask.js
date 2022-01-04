import React from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/Action'
import { useState } from 'react'
 const AddTask = () => {
     const dispatch = useDispatch();
     const [text , setText] =  useState();
     const randomNumber = (min, max)  => {
        return Math.random() * (max - min) + min;
      }
    return (
        <>
            <input type='text' className="form-control-sm"
            value = {text}
            onChange = { (e)=> setText(e.target.value)  }
              />
            <button className='btn btn-primary'
            onClick = { ()=>{ text && dispatch(addTask({
                id : randomNumber(4, 100),
                text : text,
                isDone : false
            }

            ))
            
            setText('')}}
            >Add</button>
        </>
    )
}

export default AddTask