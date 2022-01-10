import logo from './logo.svg';
import './App.css';
import Footer from "./components/footer.js";
import Input from "./components/input.js";
import List from "./components/list.js";
import {useState, useEffect} from "react";

function App() {

  const [todoapp, setTodoapp] = useState([]);
  const [status, setStatus] = useState("All");

  useEffect(() => {
    console.log(todoapp)
  },[todoapp]);

  return (
    <div>
      <section class="todoapp">
      <Input addTodo={setTodoapp} todoapp={todoapp}/>
      <List todoapp={todoapp} setTodoapp={setTodoapp} status={status}/>
      </section>
      <Footer setStatus={setStatus} status={status}/>
    </div>
    
  );
}

export default App;
