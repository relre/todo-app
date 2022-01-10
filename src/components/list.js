import React from 'react'

function List({todoapp, setTodoapp, status}) {

    const completedCount = (status == "All" || status == "active") && todoapp.filter((wodo) => {
				return !wodo.checked
			}).map((wodo, keyi) => 
            (
                <li key={keyi} className={wodo.checked ? "completed" : "view"}>
                    <div className="view">
					<input className="toggle" type="checkbox" onChange={() => {checkHandler(wodo.todotext)}} checked={wodo.checked}/>
					<label>{wodo.todotext}</label>
					<button  onClick={() => deleteTodo(keyi)} className="destroy"></button>
				    </div>
                </li>
            )
            ).length;
    
    const deleteTodo = (key) => {
        let tempArr = [...todoapp]
        tempArr.splice(key, 1)
        setTodoapp(tempArr)
      }
    const checkHandler = (text) => {
        let tempArr = [...todoapp];
        const finder = tempArr.find( (item) => { return item.todotext == text});
		finder.checked = !finder.checked;
        setTodoapp(tempArr);
      }
    return (
        <div>
            
        <section className="main">
		<input className="toggle-all" type="checkbox" />
		<label for="toggle-all">
			Mark all as complete
		</label>
		
		
		<ul className="todo-list">
            {(status == "All" || status == "active") && todoapp.filter((wodo) => {
				return !wodo.checked
			}).map((wodo, keyi) => 
            (
                <li key={keyi} className={wodo.checked ? "completed" : "view"}>
                    <div className="view">
					<input className="toggle" type="checkbox" onChange={() => {checkHandler(wodo.todotext)}} checked={wodo.checked}/>
					<label>{wodo.todotext}</label>
					<button  onClick={() => deleteTodo(keyi)} className="destroy"></button>
				    </div>
                </li>
            )
            ).reverse()}
		</ul>
		<ul className="todo-list">
            {(status == "All" || status == "completed") && todoapp.filter((wodo) => {
				return wodo.checked
			}).map((wodo, keyi) => 
            (
                <li key={keyi} className={wodo.checked ? "completed" : "view"}>
                    <div className="view">
					<input className="toggle" type="checkbox" onChange={() => {checkHandler(wodo.todotext)}} checked={wodo.checked}/>
					<label>{wodo.todotext}</label>
					<button  onClick={() => deleteTodo(keyi)} className="destroy"></button>
				    </div>
                </li>
            )
            ).reverse()}
		</ul>
	    </section>
        </div>
    )
}

export default List
