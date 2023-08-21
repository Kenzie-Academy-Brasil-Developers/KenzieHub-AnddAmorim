import { RoutesMain } from '../../routes'
import { LoginPage } from './../../pages/LoginPage/index'
import { RegisterPage } from './../../pages/RegisterPage/index'
import { DashboardPage } from './../../pages/DashboardPage/index'


export const Homepage = () => {
    // const [user, setUser] = useState([]) //! comentar*/ 
 

    return (
        <>
            <RoutesMain>
                <LoginPage />
                <RegisterPage />
                <DashboardPage />
            </RoutesMain>
        </>
    )
}