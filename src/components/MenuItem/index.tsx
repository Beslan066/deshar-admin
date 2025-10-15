// import { Link } from "react-router-dom";
import './styles.scss';
import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Badge } from '../../shared/ui/Badge';
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
    icon,
    count
}: { title: string, href: string; icon?: ReactNode; count?: number }) => {
    return (

        <NavLink to={href} className={({ isActive, isPending }) => `DashboardMenuItem ${isPending ? "pending" : isActive ? "active" : ""}`}>
            <div className="DashboardMenuItem__left">
                {icon || <DefaultIcon />}
                <span>{title}</span>
            </div>
            {count && <Badge>
                {count}
            </Badge>}
        </NavLink>

    )

}
