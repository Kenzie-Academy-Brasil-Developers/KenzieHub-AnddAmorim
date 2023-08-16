import { forwardRef } from "react"
import styles from "./style.module.scss"

export const Select = forwardRef(({ label, ...rest }, ref) => {
    return (
        <>
            <label htmlFor="category">{label}</label>
            <select className={styles.select} ref={ref} {...rest}>
                <option value="Primeiro módulo (Introdução ao Frontend)"> Primeiro Módulo</option>
                <option value="Segundo módulo (Frontend Avançado)"> Segundo Módulo</option>
                <option value="Terceiro módulo (Introdução ao Backend)"> Terceiro Módulo</option>
                <option value="Quarto módulo (Backend Avançado)"> Quarto Módulo</option>
            </select>
        </>
    )
})