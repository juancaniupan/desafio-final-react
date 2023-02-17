import { useState } from 'react'
import s from'./style.module.css'
import DisplayUsers from './components/DisplayUsers/DisplayUsers'
import ListUsers from './components/ListUsers/ListUsers'

function App() {
  const [currentUser, setCurrentUser] = useState("");

  const onMenuListItemClick = (UserName) => {
    setCurrentUser(UserName);
  }

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Listado de Usuarios</h1>
      <div className={s.workspace}>
        <ListUsers UserName = {currentUser} />
      </div>
      
    </div>
  )
}

export default App
