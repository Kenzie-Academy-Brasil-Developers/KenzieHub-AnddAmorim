import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { DashboardPage } from "../pages/DashboardPage"
import { PrivateRoutes } from "./PrivateRoutes"

export const RoutesMain = () => {
    const [user, setUser] = useState(null)
    return (
        <Routes>
            <Route path="/" element={<LoginPage setUser={setUser} />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<DashboardPage user={user} setUser={setUser} />} />
            </Route>
        </Routes>
    )
}