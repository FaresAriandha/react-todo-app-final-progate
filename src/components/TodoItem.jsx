import React from "react";

const TodoItem = ({ todo }) => {
	return (
		<>
			<div style={styles.todoItem}>
				<p>{todo.title}</p>
			</div>
		</>
	);
};

const styles = {
	todoItem: {
		border: "2px solid #f4f4f4",
		fontSize: "24px",
		padding: "0",
	},
};

export default TodoItem;
