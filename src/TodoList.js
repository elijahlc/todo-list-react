import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import './TodoList.css';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
	const [todos, setTodos] = useState([
		{ todo: 'Study React', complete: true, id: uuidv4(), editing: false },
		{ todo: 'Walk the dog', complete: false, id: uuidv4(), editing: false },
		{ todo: 'Get some sleep', complete: false, id: uuidv4(), editing: false },
	]);

	const addTodo = (newTodo) => {
		setTodos([...todos, newTodo]);
	};

	const handleEdit = (id, newTodo) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.todo = newTodo;
					todo.editing = false;
				}

				return todo;
			})
		);
	};

	const handleDelete = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleStatusChange = (id) => {
		setTodos(
			todos.map((t) => {
				if (t.id === id) {
					t.editing = !t.editing;
				}
				return t;
			})
		);
	};

	const handleComplete = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.complete = !todo.complete;
				}
				return todo;
			})
		);
	};

	return (
		<div className="TodoList">
			<header>
				<p className="TodoList-title">To Do List!</p>
				<p className="TodoList-subtitle">
					made by <a href="https://github.com/elijahlc">elijahlc</a> \\
					september 2022
				</p>
			</header>
			<div className="TodoList-list">
				{todos.map((todo) => (
					<div className="TodoList-todo" key={todo.id}>
						{todo.editing ? (
							<EditTodoForm
								todo={todo.todo}
								editTodo={handleEdit}
								id={todo.id}
							/>
						) : (
							<Todo
								todo={todo.todo}
								complete={todo.complete}
								id={todo.id}
								handleStatusChange={handleStatusChange}
								handleDelete={handleDelete}
								handleComplete={handleComplete}
							/>
						)}
					</div>
				))}
			</div>
			<div className="TodoList-newtodo">
				<h2>New to do:</h2>
				<NewTodoForm addTodo={addTodo} />
			</div>
		</div>
	);
};

export default TodoList;
