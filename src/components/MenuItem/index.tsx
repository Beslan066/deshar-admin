// import { Link } from "react-router-dom";
import './styles.scss';
import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
const DefaultIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="5" height="5" rx="2" stroke-width="2" />
        <rect x="3" y="12" width="5" height="5" rx="2" stroke-width="2" />
        <rect x="12" y="3" width="5" height="5" rx="2" stroke-width="2" />
        <rect x="12" y="12" width="5" height="5" rx="2" stroke-width="2" />
    </svg>
)
export const DashboardMenuItem = ({
    title = "test",
    href = "#",
    icon
}: { title: string, href: string; icon?: ReactNode }) => {
    return (

        <NavLink to={href} className={({ isActive, isPending }) => `DashboardMenuItem ${isPending ? "pending" : isActive ? "active" : ""}`}>
            {icon || <DefaultIcon />}
            <span>{title}</span>
        </NavLink>

    )

}
