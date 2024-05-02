import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form'
import PageNotFound from './pages/PageNotFound'
import UpdateForm from './pages/UpdateForm'
const App = () => {
  return (
   <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Form />} />
      <Route path="/update/:taskId" element={<UpdateForm />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
   </div>
  )
}

export default App