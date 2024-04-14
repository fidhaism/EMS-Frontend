
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import View from './Components/View'
import Admin from './Components/Admin'
import Add from './Components/Add'
import Edit from './Components/Edit'
import PageNotFound from './Components/PageNotFound'

function App() {
 

  return (
    <>
     <Header/>
      <Routes>
        <Route path='' element={<Admin/>}/>
        <Route path='add' element={<Add/>}/>
        <Route path='edit/:empid' element={<Edit/>}/>
        <Route path='view/:id' element={<View/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
     <Footer/>
    </>
  )
}

export default App
