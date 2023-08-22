import {ImPencil} from "react-icons/im"
import{PiTrash} from "react-icons/pi"
export const TechCard = ({techs}) => {
    return(
        <li>
            <div>
               <h2>{techs.title}</h2>
            <p>{techs.status}</p> 
            </div>
            <div>
                 <button title="Editar techs" aria-aria-label="edit">
                    <ImPencil/>
                 </button>
                 <button title="Remover techs" aria-label="remove">
                    <PiTrash/>
                 </button>
                
            </div>
        </li>
    )
}