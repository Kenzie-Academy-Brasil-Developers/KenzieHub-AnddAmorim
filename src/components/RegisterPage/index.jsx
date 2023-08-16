import { Link, useNavigate } from "react-router-dom"
import { Input } from "../Input"
import { Select } from "../Select"
import Logo from "../../assets/Logo.png"
import styles from "./style.module.scss"
import { useState } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { registerFormSchema } from "../Schemas/registerFormSchema"
import { api } from "../../services/api"
import { toast } from "react-hot-toast"


export const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [confirmShowPassword, setConfirmShowPassword] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerFormSchema)
  })

  const navigate = useNavigate()

  const userRegister = async (formData) => {
    try {
      const { data } = await api.post("/users", formData)
      localStorage.setItem("@USER", data)
      toast.success("Conta criada com sucesso", {
        duration: 2000
      })
      navigate("/")
    } catch (error) {
      console.log(error)
      toast.error("Opa, Algo deu errado", {
        duration: 2000
      })
    }
  }

  const submit = (formData) => {
    userRegister(formData)
  }

  const seePassword = () => {
    setShowPassword(!showPassword)
  }
  const confirmSeePassword = () => {
    setConfirmShowPassword(!confirmShowPassword)
  }

  return (
    <>
      <div className={`${styles.divLogo} container`}>
        <img src={Logo} alt="Kenzie Hub" />
        <div>
          <Link className="headlineBold" to="/">Voltar</Link>
        </div>
      </div>
      <div className={`${styles.divContainer} container`}>
        <div className={styles.divTitle}>
          <h1 className="title1">Crie sua conta</h1>
          <p className="headline">Rápido e grátis, vamos nessa!</p>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div className={styles.divForm}>
            <Input label="Nome"
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
              error={errors.name} />

            <Input label="E-mail"
              type="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
              error={errors.email} />

            <div className={styles.passwordInput}>
              <div className={styles.passwordField}>
                <Input label="Senha"
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite aqui sua senha"
                  {...register("password")}
                  error={errors.password} />
                <button className={styles.changePasswordButton} type="button" onClick={seePassword}>
                  {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
                </button>
              </div>

              <div className={styles.passwordField}>
                <Input label="Confirmar Senha"
                  type={confirmShowPassword ? "text" : "password"}
                  placeholder="Digite novamente sua senha"
                  {...register("confirmPassword")}
                  error={errors.confirmPassword} />
                <button className={styles.changePasswordButton} type="button" onClick={confirmSeePassword}>
                  {confirmShowPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
                </button>
              </div>
            </div>

            <Input label="Bio"
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
              error={errors.bio} />

            <Input label="Contato"
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
              error={errors.contact} />

            <Select label="Selecionar Módulo"
              {...register("course_module")}
              error={errors.course_module} />

            <div className={styles.divButton}>
              <button className="title2">Cadastrar</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}