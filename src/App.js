import React, { useState, Fragment } from 'react'
import AddTaskForm from './forms/AddTaskForm'
import EditTaskForm from './forms/EditTaskForm'
import TaskTable from './Tables/TaskTable'
import { Container, ViewTasks, Header } from './Style'

const App = () => {
	const tasksData = [
		{ id: 1, name: 'Learn JavaScript' },
		{ id: 2, name: 'Coffee'},
		{ id: 3, name: 'Go for a walk'},
	]

	const initialFormState = { id: null, name: ''}

	// Setting state
	const [ tasks, setTasks ] = useState(tasksData)
	const [ currentTask, setCurrentTask ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addTask = task => {
		task.id = tasks.length + 1
		setTasks([ ...tasks, task ])
	}

	const deleteTask = id => {
		setEditing(false)

		setTasks(tasks.filter(task => task.id !== id))
	}

	const updateTask = (id, updatedTask) => {
		setEditing(false)

		setTasks(tasks.map(task => (task.id === id ? updatedTask : task)))
	}

	const editRow = task => {
		setEditing(true)

		setCurrentTask({ id: task.id, name: task.name})
	}

	return (
		<Container>
			<Header>ToDo App </Header>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Task</h2>
							<EditTaskForm
								editing={editing}
								setEditing={setEditing}
								currentTask={currentTask}
								updateTask={updateTask}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Task</h2>
							<AddTaskForm addTask={addTask} />
						</Fragment>
					)}
				</div>
				<ViewTasks>
					<h2>View Tasks</h2>
					<TaskTable tasks={tasks} editRow={editRow} deleteTask={deleteTask} />
				</ViewTasks>
			</div>
		</Container>
	)
}

export default App