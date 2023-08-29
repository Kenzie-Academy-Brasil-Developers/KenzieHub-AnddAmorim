import { useForm } from "react-hook-form"
import { Input } from "../../Input"
import { SelectModal } from "../SelectModal"
import style from "./style.module.scss"
import { useContext, useEffect, useState } from "react"
import { TechsContext } from "../../../providers/techsProvider"

export const EditTechModal = ({ closeModal, tech }) => {

    const { editTechs, isEditFormVisible } = useContext(TechsContext)

    const [editedTechTitle, setEditedTechTitle] = useState("")
    const [isInputDisabled, setIsInputDisabled] = useState(true)

    useEffect(() => {
        if (isEditFormVisible && tech) {
            setEditedTechTitle(tech.title)
            setIsInputDisabled(false)
            setEditedTechTitle("")
            setIsInputDisabled(true)
        }
    }, [isEditFormVisible, tech])


    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const submit = async (formData) => {
        await editTechs(tech.id, formData)
        closeModal()
    }

    return (
        <div className={style.divModalContainer} role="dialog">
            <div className={style.divModalTitle}>
                <h2 className="title3">Tecnologias Detalhes</h2>
                <button onClick={closeModal}>X</button>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <div className={style.divModalInputs}>
                    <Input label="Nome"
                        type="text"
                        placeholder={tech.title}
                        value={editedTechTitle}
                        onChange={(e) => setEditedTechTitle(e.target.value)}
                        disabled={isInputDisabled}
                        {...register("title")}
                        error={errors} />

                    <SelectModal label="Status"
                        {...register("status")}
                        error={errors} />

                    <div className={style.divEditButton}>
                        <button className="paragraph">Salvar Alterações</button>
                    </div>
                </div>
            </form>
        </div>
    )
}