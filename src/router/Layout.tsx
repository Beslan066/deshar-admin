
import { Outlet } from 'react-router-dom'
import './Layout.styles.scss';
import { DashboardMenu } from '../widgets/DashboardMenu';

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