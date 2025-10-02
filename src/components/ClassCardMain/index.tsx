import { Link } from 'react-router-dom';
import './styles.scss';

import { ClassTable } from '../ClassTable';
import { TEST_CLASSMATES } from '../../mocks/data';
export const ClassCardMain = () => {
    return (
        <div className='ClassCardMain'>
            <div className="ClassCardMain__inner">
                <div className="ClassCardMain__head">
                    <h3 className="ClassCardMain__title">Лучшие ученики класса</h3>
                    <Link to="/" className="ClassCardMain__fullList">Полный список</Link>
                </div>
                <div className="ClassCardMain__content">
                    <ClassTable data={TEST_CLASSMATES} type='classmates' />
                </div>
            </div>
        </div>
    )
}