import React from 'react';
class Task extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editOn: false,
			newTaskName: '',
		};
		this.handleEdit = this.handleEdit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleEdit() {
		this.setState((prevState) => {
			return { editOn: !prevState.editOn };
		});
	}

	handleSave(e) {
		e.preventDefault();
		this.handleEdit();
		this.props.editTask(this.props.taskObj.key, this.state.newTaskName);
	}

	render() {
		const { taskObj, num, delTask } = this.props;

		if (this.state.editOn) {
			return (
				<div className='taskCard'>
					<form action=''>
						<input
							type='text'
							placeholder='Enter new task name'
							value={this.state.newTaskName}
							onChange={this.handleChange}
							name='newTaskName'
						/>
						<button type='button' onClick={this.handleEdit}>
							Cancel
						</button>
						<button type='submit' onClick={this.handleSave}>
							Submit
						</button>
					</form>
				</div>
			);
		}
		return (
			<div className='taskCard'>
				<h3>
					{num}: {taskObj.task}
				</h3>
				<button onClick={() => delTask(taskObj.key)}>Delete Task</button>
				<button onClick={this.handleEdit}>Edit Task</button>
			</div>
		);
	}
}

export default Task;
