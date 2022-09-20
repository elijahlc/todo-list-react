import React, { useState } from 'react';
import './EditTodoForm.css';

const EditTodoForm = ({ todo, editTodo, id }) => {
	const [newTodo, setNewTodo] = useState(todo);

	const handleChange = (e) => {
		setNewTodo(e.target.value);
	};

	const handleEdit = (e) => {
		e.preventDefault();
		editTodo(id, newTodo);
	};

	return (
		<form onSubmit={handleEdit}>
			<input type="text" value={newTodo} onChange={handleChange} />
			<button>Save</button>
		</form>
	);
};

export default EditTodoForm;
