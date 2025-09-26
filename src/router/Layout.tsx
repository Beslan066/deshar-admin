
import { Outlet } from 'react-router-dom'
import { DashboardMenu } from '../components/DashboardMenu'
import './Layout.styles.scss';

const Layout = () => {
    return (
        <div className="Layout">
            <div className="Layout__container">
                <DashboardMenu />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout