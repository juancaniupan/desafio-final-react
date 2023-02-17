import s from './style.module.css'

const DisplayUsers = (props) => {
  
  return (
    <div className={s.container}>
      {
        props.UserName ? `${props.UserName}` : 'No existen usuarios'
      }
    </div>
  )
}

export default DisplayUsers
