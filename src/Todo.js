import React from 'react';
import './Todo.css';

const Todo = ({
	todo,
	complete,
	id,
	handleDelete,
	handleStatusChange,
	handleComplete,
}) => {
	return (
		<div className={`Todo ${complete ? 'complete' : ''}`}>
			<span className="Todo-body" onClick={() => handleComplete(id)}>
				{todo}
			</span>{' '}
			<span className="Todo-icons">
				<i
					className="fa-solid fa-pencil"
					onClick={() => handleStatusChange(id)}
				/>
				<i className="fa-solid fa-trash" onClick={() => handleDelete(id)} />
			</span>
		</div>
	);
};

export default Todo;
