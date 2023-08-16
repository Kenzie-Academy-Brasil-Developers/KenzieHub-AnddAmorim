import { Link, useNavigate } from "react-router-dom"
import { Input } from "../Input"
import styles from "./style.module.scss"
import Logo from "../../assets/Logo.png"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginFormSchema } from "../Schemas/loginFormSchema"
import { api } from './../../services/api'
import { toast } from "react-hot-toast"

export const LoginPage = ({ setUser }) => {
    const [showPassword, setShowPassword] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormSchema)
    })

    const navigate = useNavigate()

    const submit = async (formData) => {

        try {
            const response = await api.post("/sessions", formData)

            if (response.status === 200) {
                const user = response.data.user
                setUser(user)
                localStorage.setItem("@USER", JSON.stringify(user))
                toast.success(`"Olá, ${user.name} seja bem-vindo"`)
                navigate("/dashboard")
            }

        } catch (error) {
            console.log(error)
            toast.error("Ops, algo está errado")

        }
    }

    const seePassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <div className={`${styles.divLogo} container`}>
                <img src={Logo} alt="Kenzie Hub" />
            </div>
            <div className={`${styles.divContainer} container`}>
                <div className={styles.divTitle}>
                    <h1 className="title1">Login</h1>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <div className={styles.divForm}>
                        <Input label="Email"
                            type="email"
                            placeholder="Digite seu email"
                            {...register("email")}
                            error={errors.email} />

                        <div className={styles.passwordInput}>
                            <div className={styles.passwordField}>
                                <Input label="Senha"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Digite sua senha"
                                    {...register("password")}
                                    error={errors.password} />
                                <button className={styles.changePasswordButton} type="button" onClick={seePassword} >
                                    {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divAcessButton}>
                        <button className="title2">Entrar</button>
                    </div>
                    <p className="headlineBold">Ainda não possui uma conta?</p>
                    <div className={styles.divRegisterButton}>
                        <Link className="title2" to="/register"> Cadastre-se</Link>
                    </div>
                </form>
            </div>
        </>
    )
}