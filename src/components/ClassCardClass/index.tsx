import { useState } from "react"
import { Tabs } from "../../shared/ui/Tabs"
import './styles.scss';
import { ClassTable } from "../ClassTable";
import { TEST_CLASSMATES } from "../../mocks/data";
import { Filter } from "../Filters/Filter";

const TABS = [
    { id: 0, name: 'Успеваемость класса' },
    { id: 1, name: 'Успеваемость потока' },
]
export const ClassCardClass = () => {
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
    return (
        <div className="ClassCardClass">
            <div className="ClassCardClass__inner">
                <div className="ClassCardClass__header">
                    <h2 className="ClassCardClass__title">Класс 5 “А”</h2>
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
                    {showFilters && <div className="ClassCardClassFilters">
                        <div className="ClassCardClassFilters__inner">
                            <div className="ClassCardClassFilters__filters">
                                <Filter
                                    type="time"
                                    fromValue={timeFrom}
                                    onFromChange={setTimeFrom}
                                    toValue={timeTo}
                                    onToChange={setTimeTo} />
                                <Filter
                                    type="modules"
                                    fromValue={modulesFrom}
                                    onFromChange={setModulesFrom}
                                    toValue={modulesTo}
                                    onToChange={setModulesTo} />
                                <Filter
                                    type="points"
                                    fromValue={pointsFrom}
                                    onFromChange={setPointsFrom}
                                    toValue={pointsTo}
                                    onToChange={setPointsTo} />
                            </div>
                            <button className="btn-reset ClassCardClassFilters__reset" onClick={resetFilters}>
                                Сбросить
                            </button>
                        </div>
                    </div>}
                </div>
                <div className="ClassCardClass__content">
                    <ClassTable data={TEST_CLASSMATES} type='classmates' />
                </div>
                <div className="ClassCardClass__footer">
                    <div className="ClassCardClass__footer_inner">
                        <span className="ClassCardClass__students_count">28 учеников</span>
                        <span className="ClassCardClass__points_count">1 384 баллов</span>
                    </div>
                </div>
            </div>
        </div>
    )
}