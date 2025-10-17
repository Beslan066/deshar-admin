import { useState } from "react"
import { Tabs } from "../../shared/ui/Tabs"
import './styles.scss';
import { mockAttestationData } from "../../mocks/data";
import { Filter } from "../Filters/Filter";
import useRole from "../../shared/hooks/useRole";
import { TeacherItem } from "../../shared/ui/TeacherItem";
import { AttestationsTable } from "../AttestationTable";

const TABS = [
    { id: 0, name: 'На проверку' },
    { id: 1, name: 'Принятые' },
    { id: 2, name: 'Отклоненные' },
]
export const AttestationsCard = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [showFilters, setShowFilters] = useState(false);

    const [timeFrom, setTimeFrom] = useState<string>('')
    const [timeTo, setTimeTo] = useState<string>('')

    const [modulesFrom, setModulesFrom] = useState<string>('')
    const [modulesTo, setModulesTo] = useState<string>('')
    const [pointsFrom, setPointsFrom] = useState<string>('')
    const [pointsTo, setPointsTo] = useState<string>('');
    const { hasRole } = useRole();
    const resetFilters = () => {
        setTimeFrom('');
        setTimeTo('');
        setModulesFrom('');
        setModulesTo('');
        setPointsFrom('');
        setPointsTo('');
    }
    return (
        <div className="AttestationsCard">
            <div className="AttestationsCard__inner">
                <div className="AttestationsCard__header">
                    <div className="AttestationsCard__header_top">
                        <h2 className="AttestationsCard__title">Аттестации учеников</h2>
                    </div>
                    <div className="AttestationsCard__controls">
                        <Tabs activeTab={activeTab} handleTab={setActiveTab} tabs={TABS} />
                        <button className="btn-reset AttestationsCard__filters_btn" onClick={() => setShowFilters(prev => !prev)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 7L20 7" stroke="#303030" stroke-width="2" stroke-linecap="round" />
                                <path d="M14 17H4" stroke="#303030" stroke-width="2" stroke-linecap="round" />
                                <circle cx="7" cy="7" r="3" stroke="#303030" stroke-width="2" />
                                <circle cx="17" cy="17" r="3" transform="rotate(180 17 17)" stroke="#303030" stroke-width="2" />
                            </svg>
                        </button>
                    </div>
                    {showFilters && <div className="AttestationsCardFilters">
                        <div className="AttestationsCardFilters__inner">
                            <div className="AttestationsCardFilters__filters">
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
                            <button className="btn-reset AttestationsCardFilters__reset" onClick={resetFilters}>
                                Сбросить
                            </button>
                        </div>
                    </div>}
                </div>
                <div className="AttestationsCard__content">
                    <AttestationsTable data={mockAttestationData} />
                </div>
                <div className="AttestationsCard__footer">
                    <div className="AttestationsCard__footer_inner">
                        <span className="AttestationsCard__students_count">147 аттестаций</span>
                    </div>
                </div>
            </div>
        </div>
    )
}