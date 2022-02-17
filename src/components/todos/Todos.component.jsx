import { connect } from 'react-redux';
import { useState } from 'react';
import { AddNewToDo } from '../../redux/actions/Todo.action';

const Todos = (props) => {
    const [text, setText] = useState("");

    return (
        <div>To do {props.todos.length}
            <ul>
                {props.todos.map((item, i) => <li key={i}>{item.title}</li>)}

            </ul>
            <input type={"text"} onChange={(event) => { setText(event.target.value) }} />

            <button onClick={() => { props.AddNewToDo(text) }}>Add</button>

        
        </div>
    )
}

export default connect((state) => ({ todos: state.todos }),
    { AddNewToDo })
    (Todos);

//connect function actually connect the component to the global state
//that i provide.