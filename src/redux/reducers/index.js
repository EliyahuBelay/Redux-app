import TodosReducer from './TodosReducer';
import {combineReducers} from 'redux';

const GlogalReducer = combineReducers({
    todos: TodosReducer
})
export default GlogalReducer;