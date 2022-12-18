import React from 'react'
import { Quizzes } from './pages'
import { Navigate, Route, Routes } from 'react-router'



const App = () => {
  return (

    <main>
      <Routes>
        <Route path='/*' element={<Navigate to='/quizzes' />} />
        <Route path='/quizzes' element={<Quizzes />} />
      </Routes>
    </main>

  )
}

export default App
