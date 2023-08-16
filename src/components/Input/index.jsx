import styles from "./style.module.scss"
import { forwardRef } from "react"
export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <>
      <label className={`${styles.label} headline}`}>
        {label}
        <input ref={ref} {...rest} />
        {error ? <span className="headlineBold">{error.message}</span> : null}
      </label>
    </>
  )

})