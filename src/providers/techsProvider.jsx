import { createContext, useContext, useState } from "react"
import { api } from "../services/api"
import { UserContext } from "./userProvider"
import { toast } from "react-hot-toast"

export const TechsContext = createContext({})

export const TechsProvider = ({ children }) => {
  const [techId, setTechId] = useState("")

  const { techs, setTechs } = useContext(UserContext)

  const addTechs = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN")
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setTechs([...techs, data])
      toast.success("Tecnologia criada com sucesso", {
        duration: 2000
      })
    } catch (error) {
      console.log(error)
      toast.error("Opa, erro ao criar tecnologia")
    }
  }

  const editTechs = async (techId, formData) => {
    try {
      const token = localStorage.getItem("@TOKEN")
      await api.put(`/users/techs/${techId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const getEditTechs = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const updatedTech = getEditTechs.data.techs
      setTechs(updatedTech)
      toast.success("Eba... Tecnologia editada com sucesso")
    } catch (error) {
      console.log(error)
      toast.error("Ops, algo está errado!")
    }
  }

  const deleteTechs = async (techId) => {
    try {
      const token = localStorage.getItem("@TOKEN")
      await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const updatedList = techs.filter((tech) => tech.id !== techId)
      toast.success("Tecnologia excluida com sucesso!")
      setTechs(updatedList)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TechsContext.Provider value={{ addTechs, editTechs, deleteTechs, techId, setTechId }}>
      {children}
    </TechsContext.Provider>
  )
}