import { RoutesMain } from '../../routes'
import { useState } from 'react'
import { LoginPage } from './../../pages/LoginPage/index';
import { RegisterPage } from './../../pages/RegisterPage/index';
import { DashboardPage } from './../../pages/DashboardPage/index';


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