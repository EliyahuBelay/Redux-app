import {Todo_type} from '../Type'
export const AddNewToDo = (text)=>{
    return (dispatch)=>{
        const todo ={title:text,isComplated:false}
        dispatch({type:Todo_type.ADD_TODO,payloud:todo})
    }
}