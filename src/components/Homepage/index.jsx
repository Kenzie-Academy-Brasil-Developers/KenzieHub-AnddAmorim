import { LoginPage } from './../LoginPage/index'
import { RegisterPage } from './../RegisterPage/index'
import { DashboardPage } from './../DashboardPage/index'
import { RoutesMain } from '../../routes'
import { useState } from 'react'

export const Homepage = () => {
    const [user, setUser] = useState([])

    return (
        <>
            <RoutesMain>
                <LoginPage
                    user={user}
                    setUser={setUser} />

                <RegisterPage />

                <DashboardPage />

            </RoutesMain>

        </>
    )
}