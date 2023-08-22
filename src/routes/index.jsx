import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { DashboardPage } from "../pages/DashboardPage"
import { PrivateRoutes } from "./PrivateRoutes"
import { TechsProvider } from "../providers/techsProvider"

export const RoutesMain = () => {
    const [user, setUser] = useState([])
    return (
        <Routes>
            <Route path="/" element={<LoginPage setUser={setUser} />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<TechsProvider ><DashboardPage user={user} setUser={setUser} /> </TechsProvider>} />
            </Route>
        </Routes>
    )
}