import ItemUser from '../ItemUser/ItemUser.jsx'
import { USUARIOS } from './constant.js'
import s from './style.module.css'

const ListUsers = (props) => {
  return (
    <div className={s.container}>
      {
        USUARIOS.map((UserName, idx) => (
          <ItemUser key = {idx}
          nombreUsuario = {UserName} />
          ))
      }
    </div>
  )
}

export default ListUsers
