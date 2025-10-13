import { useState } from "react";
import { Tabs } from "../../shared/ui/Tabs";
import './styles.scss';
import { StudentTable } from "../StudentTable";
import { Filters, type FilterConfig } from "../Filters";
const TABS = [
    { id: 0, name: 'Ингушский язык' },
    { id: 1, name: 'Математика' },
    { id: 2, name: 'Литература' },
]
export const StudentCard = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [showFilters, setShowFilters] = useState(false);

    const [timeFrom, setTimeFrom] = useState<string>('')
    const [timeTo, setTimeTo] = useState<string>('')

    const [modulesFrom, setModulesFrom] = useState<string>('')
    const [modulesTo, setModulesTo] = useState<string>('')
    const [pointsFrom, setPointsFrom] = useState<string>('')
    const [pointsTo, setPointsTo] = useState<string>('')
    const resetFilters = () => {
        setTimeFrom('');
        setTimeTo('');
        setModulesFrom('');
        setModulesTo('');
        setPointsFrom('');
        setPointsTo('');
    }
    const filterConfigs: FilterConfig[] = [
        {
            type: 'time',
            fromValue: timeFrom,
            onFromChange: setTimeFrom,
            toValue: timeTo,
            onToChange: setTimeTo,
            component: "input"
        },
        {
            type: 'modules',
            fromValue: modulesFrom,
            onFromChange: setModulesFrom,
            toValue: modulesTo,
            onToChange: setModulesTo,
            component: "input"
        },
        {
            type: 'points',
            fromValue: pointsFrom,
            onFromChange: setPointsFrom,
            toValue: pointsTo,
            onToChange: setPointsTo,
            component: 'input'
        },
        // {
        //     type: 'points',
        //     fromValue: pointsFrom,
        //     onFromChange: setPointsFrom,
        //     toValue: pointsTo,
        //     onToChange: setPointsTo,
        //     component: 'select'
        // },
    ];
    return (
        <div className="StudentCard">
            <div className="StudentCard__inner">
                <div className="StudentCard__header">
                    <div className="StudentCard__header_top">
                        <button className="btn-reset StudentCard__back">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.9497 12.9492C19.502 12.9492 19.9497 12.5015 19.9497 11.9492C19.9497 11.3969 19.502 10.9492 18.9497 10.9492L18.9497 12.9492ZM4.2426 11.2421C3.85208 11.6326 3.85208 12.2658 4.2426 12.6563L10.6066 19.0203C10.9971 19.4108 11.6302 19.4108 12.0208 19.0203C12.4113 18.6298 12.4113 17.9966 12.0208 17.6061L6.36392 11.9492L12.0208 6.29236C12.4113 5.90184 12.4113 5.26867 12.0208 4.87815C11.6303 4.48763 10.9971 4.48763 10.6066 4.87815L4.2426 11.2421ZM18.9497 10.9492L4.94971 10.9492L4.94971 12.9492L18.9497 12.9492L18.9497 10.9492Z" fill="#303030" />
                            </svg>
                        </button>
                        <h6 className="StudentCard__studentName">
                            Аспиев Лорс
                        </h6>
                    </div>
                    <div className="ClassCardClass__controls">
                        <Tabs activeTab={activeTab} handleTab={setActiveTab} tabs={TABS} />
                        <button className="btn-reset ClassCardClass__filters_btn" onClick={() => setShowFilters(prev => !prev)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 7L20 7" stroke="#303030" stroke-width="2" stroke-linecap="round" />
                                <path d="M14 17H4" stroke="#303030" stroke-width="2" stroke-linecap="round" />
                                <circle cx="7" cy="7" r="3" stroke="#303030" stroke-width="2" />
                                <circle cx="17" cy="17" r="3" transform="rotate(180 17 17)" stroke="#303030" stroke-width="2" />
                            </svg>
                        </button>
                    </div>
                    {showFilters && <Filters filters={filterConfigs} handleReset={resetFilters} />}
                </div>
                <div className="StudentCard__content">
                    <StudentTable />
                </div>
            </div>
        </div>
    )
}