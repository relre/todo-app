import {useState} from 'react'

function Input({addTodo, todoapp}) {
    const initialTodoValues = {todotext: "", checked: false};
    const [todo, setTodo] = useState({todotext: "", checked: false});

    const onChangeInput = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if(todo.todotext === "" || todo.todotext === " "){
            return false;
        }

        addTodo([...todoapp, todo]);
        setTodo(initialTodoValues);
    };

    return (
        
        <div>
            <header className="header">
		    <h1>todos</h1>
		    <form onSubmit={onSubmit}>
			    <input
                name="todotext"
                className="new-todo" 
                placeholder="What needs to be done?" 
                value={todo.todotext}
                onChange={onChangeInput}/>
                
		    </form>
	        </header>   
        </div>
    )
}

export default Input
