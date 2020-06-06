import React from 'react'
import { EditButton, DeleteButton} from './TableStyle'

const TaskTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      
      {props.tasks.length > 0 ? (
        props.tasks.map(task => (
          <tr key={task.id}>
            <td>{task.name}</td>
            
            <td>
              <EditButton
                onClick={() => {
                  props.editRow(task)
                }}
                className="button muted-button"
              >
                Edit
              </EditButton>
              <DeleteButton
                onClick={() => props.deleteTask(task.id)}
                className="button muted-button"
              >
                Delete
              </DeleteButton>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Tasks</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default TaskTable