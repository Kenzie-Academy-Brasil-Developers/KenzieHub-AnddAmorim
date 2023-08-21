import { createContext, useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api"

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN")
    const getUser = async () => {
      try {
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setUser(data)
      } catch (error) {
        console.log(error)
      }
    }
    if (token) {
      getUser()
    }
  }, [])


  const navigate = useNavigate()

  const userRegister = async (formData) => {
    try {
      await api.post("/users", formData)
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


  const submit = async (formData) => {

    try {
      const response = await api.post("/sessions", formData)

      if (response.status === 200) {
        const data = response.data
        localStorage.setItem("@TOKEN", data.token)
        setUser(data.user)
        toast.success(`Olá, ${data.user.name} seja bem-vindo`)
        navigate("/dashboard")
      }
    } catch (error) {
      console.log(error)
      toast.error("Ops, algo está errado")

    }
  }



  const logout = () => {
    localStorage.removeItem("@TOKEN")
    setUser(null)
    navigate("/")
  }


  return (
    <UserContext.Provider value={{ user, setUser, userRegister, submit, logout }}>
      {children}
    </UserContext.Provider>
  )
}