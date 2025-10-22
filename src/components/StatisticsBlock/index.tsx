import { Selector } from '../../shared/ui/Selector';
import './styles.scss';
export const StatisticsBlock = () => {
    return (
        <div className='StatisticsBlock'>
            <div className="StatisticsBlock__inner">
                <div className="StatisticsBlock__header">
                    <h3 className='StatisticsBlock__title'>Лучшая успеваемость</h3>
                    <Selector
                        className='StatisticsBlock__selector'
                        options={[{ id: "1", label: "Неделя" }, { id: "2", label: "Месяц" }, { id: "3", label: "Год" }]}
                        defaultValue='Неделя' />


                </div>
                <div className="StatisticsBlock__body">

                </div>
            </div>
        </div>
    )
}