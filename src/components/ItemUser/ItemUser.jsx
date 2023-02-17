import { useState } from 'react'
import s from './style.module.css'

const ItemUser = (props) => {
    
    const [isHovered, setIsHover] = useState(false);

    const activate = () => {
      setIsHover(true);
    }
  
    const deactivate = () => {
      setIsHover(false);
    }
  
    const getBackgroundColor = () =>{
      if(isHovered)
      {
        return "#a5e9ff";
      }
      else{
        if(props.isSelected){
          return "#26baea";
        }
        else{
          return "#eff0ef";
        }
      }
    }
  
    const onItemClick = () =>{
      props.onClick(props.nombreUsuario);
    }
    
    return (
      <table>
        <tr>
          {props.nombreUsuario}
        </tr>
      </table>

    )
}

export default ItemUser
