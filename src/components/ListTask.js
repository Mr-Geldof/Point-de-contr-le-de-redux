import React from 'react'
import AddTask from './AddTask'
import Task from './Task'
import { useSelector } from 'react-redux'

const ListTask = () => {
    const tasks = useSelector(state => state)
    return (
        <>
            <div>Liste</div>
            <AddTask/>
            {
                tasks.map((task,index )=> {
                    return <Task key={index} task = {task} />
                })
            }
        </>
        
    )
}

export default ListTask