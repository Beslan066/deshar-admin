import { Link } from 'react-router-dom';
import './styles.scss';

import { StudentTable } from '../StudentTable';
import { TEST_CLASSMATES } from '../../mocks/data';
export const ClassCard = () => {
    return (
        <div className='ClassCard'>
            <div className="ClassCard__inner">
                <div className="ClassCard__head">
                    <h3 className="ClassCard__title">Лучшие ученики класса</h3>
                    <Link to="/" className="ClassCard__fullList">Полный список</Link>
                </div>
                <div className="ClassCard__content">
                    <StudentTable data={TEST_CLASSMATES} type='classmates' />
                </div>
            </div>
        </div>
    )
}