import { Link } from "react-router-dom";
import './styles.scss';
export const DashboardMenuItem = ({
    title = "test",
    href = "#"
}: { title: string, href: string; }) => {
    return (
        <li className="DashboardMenuItem">
            <Link to={href} className="DashboardMenuItem__link">
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="5" height="5" rx="2" stroke-width="2" />
                    <rect x="3" y="12" width="5" height="5" rx="2" stroke-width="2" />
                    <rect x="12" y="3" width="5" height="5" rx="2" stroke-width="2" />
                    <rect x="12" y="12" width="5" height="5" rx="2" stroke-width="2" />
                </svg>
                <span>{title}</span>
            </Link>
        </li>
    )

}