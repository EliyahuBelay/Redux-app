import { Provider } from 'react-redux';
import Store from './redux/Store';
import Todo from './components/todos/Todos.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Provider store={Store}>
         <Todo/>
       </Provider>
      </header>
    </div>
  );
}

export default App;
