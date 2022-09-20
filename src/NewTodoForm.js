import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewTodoForm = ({ addTodo }) => {
	const [todo, setTodo] = useState('');

	const handleChange = (e) => {
		setTodo(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo({ todo, complete: false, id: uuidv4() });
		setTodo('');
	};

	return (
		<div className="NewTodoForm">
			<form onSubmit={handleSubmit}>
				<input type="text" id="todo" value={todo} onChange={handleChange} />
				<button>Add</button>
			</form>
		</div>
	);
};

export default NewTodoForm;
