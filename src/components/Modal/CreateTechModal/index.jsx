import { useForm } from "react-hook-form"
import { Input } from "../../Input"
import { SelectModal } from "../SelectModal"
import style from "./style.module.scss"
import { useContext } from "react"
import { TechsContext } from "../../../providers/techsProvider"

export const CreateTechModal = ({ closeModal }) => {
    const { addTechs } = useContext(TechsContext)

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const submit = async (formData) => {
        await addTechs(formData)
        closeModal()
    }

    return (
        <div className={style.divModalContainer} role="dialog">
            <div className={style.divModalTitle}>
                <h2 className="title3">Cadastrar Tecnologias</h2>
                <button onClick={closeModal}>X</button>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <div className={style.divModalInputs}>
                    <Input label="Nome"
                        type="text"
                        placeholder="Insira aqui sua tecnologia"
                        {...register("title")}
                        error={errors} />

                    <SelectModal label="Selecionar Categoria"
                        {...register("status")}
                        error={errors} />

                    <div className={style.divRegisterButton}>
                        <button type="submit" className="paragraph">Cadastrar Tecnologia</button>
                    </div>

                </div>
            </form>
        </div>
    )
}