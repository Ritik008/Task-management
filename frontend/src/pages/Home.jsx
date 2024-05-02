import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constant'
import { Link } from 'react-router-dom'

const Home = () => {
  const [tasks, setTasks] = useState([])

  const getTasks = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/tasks`)
      setTasks(response.data)
    }catch(error) {
      console.error(error)
    }
  }
  const deleteTask = async (e, taskId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/api/tasks/${taskId}`)
      if(response.status === 200){
        getTasks()
      }
    }catch(error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getTasks()
  }, [])
  return (
    <div className="bg-gray-100 min-h-screen py-8">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Task List</h1>
      <ul className="space-y-4">
        {tasks.length > 0 ? tasks.map(task => (
          <li key={task._id} className="bg-white rounded-lg shadow-md p-4 sm:flex sm:justify-between sm:items-center">
            <div className="sm:w-3/4">
              <h2 className="text-lg font-semibold">{task.title}</h2>
              <p className="text-gray-700">{task.description}</p>
            </div>
            <div className="mt-4 sm:mt-0 sm:w-1/4 sm:flex sm:items-center justify-end">
              <span className={`inline-block py-1 px-2 rounded-full text-xs font-semibold ${task.status ? "text-green-600" : "text-red-600"}`}>
                {task.status ? 'Done' : 'In Progress'}
              </span>
              <Link to={`/update/${task._id}`} className="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">
                Update
              </Link>
              <button onClick={(e) => deleteTask(e, task._id)} className="text-sm bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">
                Delete
              </button>
            </div>
          </li>
        )) : <h2 className='text-2xl text-center'>No Tasks</h2>}
      </ul>
    </div>
  </div>

  )
}

export default Home