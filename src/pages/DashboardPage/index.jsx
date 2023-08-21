import Logo from "../../assets/Logo.png"
import styles from "./style.module.scss"
import { useContext } from "react"
import { UserContext } from "../../providers"

export const DashboardPage = () => {

    const { user, logout } = useContext(UserContext)

    return (
        <>
            <header className="container">
                <div className={styles.divHeader}>
                    <img src={Logo} alt="KenzieHub" />
                    <button onClick={logout}>Sair</button>
                </div>
            </header>
            <div className={styles.divBorder}>
                <div className="container">
                    <div className={styles.divUser}>
                        <h1 className="title1">Olá, {user.name}</h1>
                        <p className="headline">{user.course_module}</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={styles.divContent}>
                    <h2 className="title1">Que pena! Estamos em desenvolvimento :( </h2>
                    <h3 className="paragraph">Nossa aplicação está em desenvolvimento, em breve teremos novidades</h3>
                </div>
            </div>
        </>
    )
}