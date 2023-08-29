import { AiOutlinePlus } from "react-icons/ai"
import { useContext, useState } from "react"
import { TechCard } from "./TechCard/index"
import styles from "./style.module.scss"
import { UserContext } from "../../providers/userProvider"
import { CreateTechModal } from "../Modal/CreateTechModal"

export const Techlist = () => {
    const { techs } = useContext(UserContext)

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="container">
            <div className={styles.divTechs}>
                <h2 className="title1">Tecnologias</h2>
                <div className={styles.divButton}>
                    <button onClick={handleOpenModal}><AiOutlinePlus size={14} /></button>
                </div>
            </div>
            {isModalOpen && (
                <CreateTechModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} closeModal={handleCloseModal} />
            )}
            {techs.length > 0 ? (
                <div className={styles.divUlCards}>
                    <ul>
                        {techs.map(tech => (
                            <TechCard key={tech.title} tech={tech} />
                        ))}
                    </ul>
                </div>
            ) : (
                <div className={styles.divNoTechs}>
                    <p className="title1">Não há tecnologias cadastradas.</p>
                </div>
            )}
        </div>
    )
}
