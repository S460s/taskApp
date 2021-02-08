import React from 'react';
import Task from './components/Task';
import uniqid from 'uniqid';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			taskName: '',
			taskList: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
		this.editTask = this.editTask.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState((prevState) => {
			return {
				taskList: [
					...prevState.taskList,
					{ task: prevState.taskName, key: uniqid() },
				],
				taskName: '',
			};
		});
	}

	deleteTask(key) {
		this.setState((prevState) => {
			let newList = prevState.taskList.filter((item) => item.key !== key);
			return {
				taskList: newList,
			};
		});
	}

	editTask(key, value) {
		this.setState((prevState) => {
			let newList = prevState.taskList.map((item) => {
				if (item.key === key) {
					return {
						...item,
						task: value,
					};
				}
				return item;
			});

			return { taskList: newList };
		});
	}

	render() {
		let taskComponents = this.state.taskList.map((item) => {
			return (
				<Task
					taskObj={item}
					key={item.key}
					num={this.state.taskList.indexOf(item) + 1}
					delTask={this.deleteTask}
					editTask={this.editTask}
				/>
			);
		});

		return (
			<main>
				<h1 className='title'>Task App</h1>
				<form action='' onSubmit={this.handleSubmit}>
					<input
						type='text'
						placeholder='Taske name'
						onChange={this.handleChange}
						name='taskName'
						value={this.state.taskName}
					/>
					<button>Create Task</button>
				</form>
				<div className='taskList'>{taskComponents}</div>
			</main>
		);
	}
}

export default App;
