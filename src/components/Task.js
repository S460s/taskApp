import React from 'react';
class Task extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editOn: false,
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
		this.handleEdit();
		this.props.editTask();
	}

	render() {
		const { taskObj, num, delTask } = this.props;

		if (this.state.editOn) {
			return (
				<div className='taskCard'>
					<input
						type='text'
						placeholder='New task name'
						value={this.props.taskObj.task}
					/>
					<button onClick={this.handleEdit}>Cancel</button>
					<button onClick={this.handleClick}>Submit</button>
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
