
import { Outlet } from 'react-router-dom'
import { DashboardMenu } from '../components/DashboardMenu'
import './Layout.styles.scss';

const Layout = () => {
    return (
        <div className="Layout">
            <div className="Layout__container">
                <div className="DashboardWrapper">
                    <DashboardMenu />
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout