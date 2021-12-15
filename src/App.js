
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import ListTask from './Components/ListTask/ListTask';


function App() {
  return (
    <div className="App">
      <div className='toDoContainer'>
        <h1>My Todo List</h1>
        <AddTask />
        <ListTask />
      </div>
      
    </div>
  );
}

export default App;
