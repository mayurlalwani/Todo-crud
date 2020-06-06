import React, { useState, useEffect } from 'react'
import {Input, Button} from '../Style';
import {UpdateButton} from './EditStyle'; 

const EditTaskForm = props => {
  
  const [ tasks, setTasks ] = useState(props.currentTask)

  useEffect(
    () => {
      setTasks(props.currentTask)
    },
    [ props ]
  )
  

  const handleInputChange = event => {
    const { name, value } = event.target
    
    setTasks({ ...tasks, [name]: value })
  
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateTask(tasks.id, tasks)
        
      }}
    >
      {/* {console.log(tasks)} */}
     
      
      <Input type="text" name="name" value={tasks.name} onChange={handleInputChange} />
      <UpdateButton>Update Task</UpdateButton>
      <Button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </Button>
    </form>
  )
}

export default EditTaskForm