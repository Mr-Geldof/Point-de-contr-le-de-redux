import { ADD_TASK, DELETE_TASK, UPDATE_TASK, DONE_TASK } from "./Action"
import { tasks } from "./State";

export let Reducer = (state = tasks, action) => {
    let newTasks = [...state]
    switch (action.type) {
        case ADD_TASK:
            newTasks = [...state, action.payload]
            return newTasks
            break;
        case DELETE_TASK:

            newTasks = newTasks.filter(task => task.id != action.payload)

            return newTasks
            break;

        case UPDATE_TASK:

            newTasks = newTasks.map(
                task => task.id === action.payload.id ?
                    {
                        ...task,
                        id: action.payload.id,
                        text: action.payload.text,
                        isDone: action.payload.isDone
                    } : task
            )

            return newTasks

            break;

        case DONE_TASK:

            newTasks = newTasks.map(
                task => task.id === action.payload.id ?
                    {
                        ...task,
                        isDone: action.payload.isDone
                    } : task
            )
            
          


            return newTasks

            break;

        default:
            return state;
    }
}