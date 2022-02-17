import {Todo_type} from '../Type'
const TodosReducer = (state = [],action)=>{
    const {type,payloud} = action //i did a destruction

    switch (type) {
        case Todo_type.ADD_TODO:
            return [...state,payloud];

        default:
            return state;
    }
}
export  default TodosReducer;