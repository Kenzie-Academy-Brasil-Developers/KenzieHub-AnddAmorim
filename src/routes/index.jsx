import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../components/LoginPage"
import { RegisterPage } from "../components/RegisterPage"
import { DashboardPage } from "../components/DashboardPage"
import { useState } from "react"

export const RoutesMain = () => {
    const [user, setUser] = useState(null)
    return (
        <Routes>
            <Route path="/" element={<LoginPage setUser={setUser} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage user={user} setUser={setUser} />} />
        </Routes>
    )
}