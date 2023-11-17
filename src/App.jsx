import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './component/users/Index.jsx'
import Create from './component/users/Create.jsx'
import Det from './component/users/Det.jsx'
import Edite from './component/users/Edite.jsx'

export default function App() {
  return (
   <Routes>
    <Route  path='/' />
    <Route  path='/user/index' element = {<Index />}/>
    <Route  path='/user/create' element = {<Create/>}/>
    <Route  path='/user/:id' element = {<Det/>}/>
    <Route  path='/user/edite/:id' element = {<Edite/>}/>
   </Routes>
  )
}
