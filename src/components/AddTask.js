import React, {useState} from 'react'
import './AddTask.scss'
import List from './List'

function AddTask() {
const [name, setName] = useState('')
const [listItems, setListItems] = useState([])
const [isEdit, setIsEdit] = useState(false)
const [editId, setEditId] = useState(null)
const [alert, setAlert] = useState({show: false, msg: '', type: ''})

const handleSubmit = (e) => {
  e.preventDefault()
  if (!name) {
    // Handle error
  }
  else if (isEdit && listItems.length > 0) {

  } 
  else {
    const item = {id: new Date().getTime().toString(), name: name}
    setListItems([...listItems, item])
    setName('')
  }
}
console.log(listItems)
  return (
    <div className='task'>
    <h1>Grocery List</h1>
      <form className='task__form' onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="task__addTask"/>
        <input type="submit" className="task__submit"/>
      </form>
      {listItems && <List list={listItems} />}
      
     
    </div>
  )
}

export default AddTask
