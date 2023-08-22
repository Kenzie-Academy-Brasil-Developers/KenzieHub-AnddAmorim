import { createContext, useContext } from "react"
import { api } from "../services/api"
import { UserContext } from "./userProvider"

export const TechsContext = createContext({})

export const TechsProvider = ({ children }) => {
    const { user, setTechnoList  } = useContext(UserContext)
    // const { } = useContext(UserContext)

    // useEffect(()=>{
    //     const getTechs = async () => {
    //         try {
    //             const { data } = await api.post("/users/techs")
    //             setTechnoList(data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getTechs()
    // },[])

    const creatTechs = async () => {
        // const token = localStorage.getItem("@TOKEN")
        const newTech = {
            title: user.title,
            status: user.status,
        }
        try {
            const { data } = await api.post("/users/techs", newTech)
           setTechnoList(data)
        } catch (error) {
            console.log(error)
        }
        creatTechs()
    }

    return (
        <TechsContext.Provider value={{}}>
            {children}
        </TechsContext.Provider>
    )
}