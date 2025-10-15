import { Avatar } from '../../shared/ui/Avatar';
import { Logo } from '../../shared/ui/Logo';
import { NavLink } from "react-router-dom";
import { MenuAccordion } from '../MenuAccordion';
import { DashboardMenuItem } from '../MenuItem';
import './styles.scss';
import useRole from '../../shared/hooks/useRole';
export const DashboardMenu = () => {
    const { role } = useRole();
    return (<aside className="DashboardMenu">
        <div className="DashboardMenu__inner">
            <div className="DashboardMenu__top">
                <div className="DashboardMenu__logo_wrapper">
                    <Logo className="DashboardMenu__logo" />
                </div>
                <div className="DashboardMenu__content">
                    <ul className="list-reset">
                        <DashboardMenuItem title="Статистика" href="/" />
                    </ul>
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
                    <MenuAccordion title='Параллели' icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="16" r="2" fill="#7D7979" />
                        <circle cx="10" cy="16" r="2" fill="#7D7979" />
                        <circle cx="5" cy="16" r="2" fill="#7D7979" />
                        <rect x="2.75" y="2.75" width="14.5" height="8.5" rx="3.25" stroke="#7D7979" stroke-width="1.5" />
                    </svg>}>
                        <div>
                            test
                        </div>
                    </MenuAccordion>
                    {/* <Selector /> */}
                </div>
            </div>
            <div className="DashboardMenu__avatar_wrapper">
                <Avatar className='DashboardMenu__avatar' role={role} />
            </div>
        </div>
    </aside>)
}