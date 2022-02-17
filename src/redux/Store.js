import {createStore,compose,applyMiddleware} from "redux";
import GlobalReducer from './reducers/index' ;
import thunk from 'redux-thunk';

const  Middleware = [thunk] 
const Store = createStore(GlobalReducer,{
    todos:[
        {
            title:"somthing somthing",
            isComplated:false
        },
        {
            title:"somthing somthing",
            isComplated:false
        }]
},
compose(applyMiddleware(...Middleware)));

export default Store;