import { Avatar } from '../../shared/ui/Avatar';
import { Logo } from '../../shared/ui/Logo';
// import { Selector } from '../../shared/ui/Selector';
import { MenuAccordion } from '../MenuAccordion';
import { DashboardMenuItem } from '../MenuItem';
import './styles.scss';
export const DashboardMenu = () => {
    return (<aside className="DashboardMenu">
        <div className="DashboardMenu__inner">
            <div className="DashboardMenu__top">
                <div className="DashboardMenu__logo_wrapper">
                    <Logo className="DashboardMenu__logo" />
                </div>
                <div className="DashboardMenu__content">
                    <ul className="list-reset">
                        <DashboardMenuItem title="Статистика" href="/item-1" />
                    </ul>
                    <MenuAccordion title='Мои классы'>
                        <ul className="list-reset MenuAccordion__list">
                            <li className="MenuAccordion__item">
                                <a href="#" className="MenuAccordion__link">1</a>
                            </li>
                            <li className="MenuAccordion__item">
                                <a href="#" className="MenuAccordion__link">2</a>
                            </li>
                            <li className="MenuAccordion__item">
                                <a href="#" className="MenuAccordion__link">3</a>
                            </li>
                            <li className="MenuAccordion__item">
                                <a href="#" className="MenuAccordion__link">4</a>
                            </li>
                        </ul>
                    </MenuAccordion>
                    <MenuAccordion title='Параллели'>
                        <div>
                            test
                        </div>
                    </MenuAccordion>
                    {/* <Selector /> */}
                </div>
            </div>
            <div className="DashboardMenu__avatar_wrapper">
                <Avatar className='DashboardMenu__avatar' />
            </div>
        </div>
    </aside>)
}