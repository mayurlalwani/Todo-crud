import React, { useState } from 'react'
import {Input, Button, Form} from '../Style'

const AddTaskForm = props => {
	const initialFormState = { id: null, name: ''}
	const [ task, setTask ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setTask({ ...task, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!task.name) return

				props.addTask(task)
				setTask(initialFormState)
			}}
		>
			
			<Input type="text" placeholder="Enter Task" name="name" value={task.name} onChange={handleInputChange} />
		
			<Button>Add Task</Button>
		</form>
	)
}

export default AddTaskForm