import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../App";

const Todos = ({ todos }) => {
	const { toggleCompleted, deleteTodo } = useContext(TodoContext);
	return (
		<div style={styles.container}>
			{todos.map((todo) => {
				return (
					<TodoItem
						key={todo.id}
						todo={todo}
						toggleCompleted={toggleCompleted}
						deleteTodo={deleteTodo}
					/>
				);
			})}
		</div>
	);
};

const styles = {
	container: {
		width: "40%",
		margin: "0 auto",
	},
};

export default Todos;
