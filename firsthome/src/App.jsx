import {NavLink, Route, Routes } from 'react-router-dom';
import UserList from './Components/UserList';
import UserDetail from './Components/UserDetail';




function App() {
  return (
    <div className='App'>
  <nav>
    <NavLink to='/'>UserList</NavLink>
  </nav>
    <Routes>
      <Route path="/" element ={<UserList/>} />
      <Route path="/user/:id" element ={<UserDetail/>} />
    </Routes>
  </div>
  )
}

export default App;