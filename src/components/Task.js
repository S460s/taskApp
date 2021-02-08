function Task(props) {
	const { taskObj, num, delTask, editTask } = props;

	return (
		<div className='taskCard'>
			<h3>
				{num}: {taskObj.task}
			</h3>
			<button onClick={() => delTask(taskObj.key)}>Delete Task</button>
			<button
				onClick={() => {
					let newValue = prompt('New task name', taskObj.task);
					editTask(taskObj.key, newValue);
				}}>
				Edit Task
			</button>
		</div>
	);
}

export default Task;
