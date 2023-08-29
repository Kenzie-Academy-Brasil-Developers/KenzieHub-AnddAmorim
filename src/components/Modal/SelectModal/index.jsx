import { forwardRef } from "react"
import style from "./style.module.scss"
export const SelectModal = forwardRef(({ label, ...rest }, ref) => {
    return (
        <>
            <label htmlFor="category">{label}</label>
            <select className={style.select} ref={ref} {...rest}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
        </>
    )
})