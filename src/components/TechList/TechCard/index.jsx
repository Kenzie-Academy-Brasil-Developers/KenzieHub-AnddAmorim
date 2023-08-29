import { ImPencil } from "react-icons/im"
import { PiTrash } from "react-icons/pi"
import styles from "./style.module.scss"
import { useContext, useState } from "react"
import { TechsContext } from "../../../providers/techsProvider"
import { EditTechModal } from "../../Modal/EditTechModal"

export const TechCard = ({ tech }) => {

    const { deleteTechs } = useContext(TechsContext)

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isEditFormVisible, setIsEditFormVisible] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleDeleteTech = async () => {
        await deleteTechs(tech.id)
    }

    return (
        <li>
            <div className={styles.divContainer}>
                <h2 className="title3">{tech?.title}</h2>
                <div className={styles.divButtons}>
                    <p className="headline">{tech?.status}</p>
                    <button onClick={() => { handleOpenModal(), setIsEditFormVisible(true) }} title="Editar techs" aria-label="edit">
                        <ImPencil size={15} />
                    </button>
                    {isModalOpen ? (
                        <EditTechModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} closeModal={handleCloseModal} isEditFormVisible={isEditFormVisible} tech={tech} />
                    ) : null}
                    <button onClick={handleDeleteTech} title="Remover techs" aria-label="remove">
                        <PiTrash size={19} />
                    </button>

                </div>
            </div>
        </li>
    )
}