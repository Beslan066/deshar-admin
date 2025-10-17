import { Avatar } from '../../shared/ui/Avatar';
import { Logo } from '../../shared/ui/Logo';
import { NavLink } from "react-router-dom";
import { MenuAccordion } from '../MenuAccordion';
import { DashboardMenuItem } from '../MenuItem';
import './styles.scss';
import useRole from '../../shared/hooks/useRole';
export const DashboardMenu = () => {
    const { role, hasRole } = useRole();
    return (<aside className="DashboardMenu">
        <div className="DashboardMenu__inner">
            <div className="DashboardMenu__top">
                <div className="DashboardMenu__logo_wrapper">
                    <Logo className="DashboardMenu__logo" href='/' />
                </div>
                <div className="DashboardMenu__content">

                    <DashboardMenuItem title="Статистика" href="/" />
                    {hasRole(["vicePrincipal", "department", "ministry"]) &&
                        <DashboardMenuItem
                            title="Аттестации"
                            href="/attestations"
                            icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fill: "transparent" }}>
                                <path d="M10.5 17H8C5.23858 17 3 14.7614 3 12V8C3 5.23858 5.23858 3 8 3H12C14.7614 3 17 5.23858 17 8V9.5" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M7 8L13 8" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M7 12H10" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M13 14.5L14.5 16L17.5 13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>}
                            count={25} />}

                    <MenuAccordion title='Мои классы' icon={
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="16" r="2" fill="#7D7979" />
                            <circle cx="10" cy="16" r="2" fill="#7D7979" />
                            <circle cx="5" cy="16" r="2" fill="#7D7979" />
                            <rect x="2.75" y="2.75" width="14.5" height="8.5" rx="3.25" stroke="#7D7979" stroke-width="1.5" />
                            <path d="M7.5 7.5L9 9L13 5" stroke="#7D7979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    }>
                        <ul className="list-reset MenuAccordion__list">
                            <li className="MenuAccordion__item">
                                <NavLink to="/class/1" className={({ isActive, isPending }) => `MenuAccordion__link ${isPending ? "pending" : isActive ? "active" : ""}`}>1</NavLink>
                            </li>
                            <li className="MenuAccordion__item">
                                <NavLink to="/class/2" className={({ isActive, isPending }) => `MenuAccordion__link ${isPending ? "pending" : isActive ? "active" : ""}`}>2</NavLink>
                            </li>
                            <li className="MenuAccordion__item">
                                <NavLink to="/class/3" className={({ isActive, isPending }) => `MenuAccordion__link ${isPending ? "pending" : isActive ? "active" : ""}`}>3</NavLink>
                            </li>
                            <li className="MenuAccordion__item">
                                <NavLink to="/class/4" className={({ isActive, isPending }) => `MenuAccordion__link ${isPending ? "pending" : isActive ? "active" : ""}`}>4</NavLink>
                            </li>
                        </ul>
                    </MenuAccordion>
                    {hasRole("teacher") && <MenuAccordion title='Параллели' icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="16" r="2" fill="#7D7979" />
                        <circle cx="10" cy="16" r="2" fill="#7D7979" />
                        <circle cx="5" cy="16" r="2" fill="#7D7979" />
                        <rect x="2.75" y="2.75" width="14.5" height="8.5" rx="3.25" stroke="#7D7979" stroke-width="1.5" />
                    </svg>}>
                        <div>
                            test
                        </div>
                    </MenuAccordion>}
                    {/* <Selector /> */}
                </div>
            </div>
            <div className="DashboardMenu__avatar_wrapper">
                <Avatar className='DashboardMenu__avatar' role={role} />
            </div>
        </div>
    </aside>)
}