import { useState } from "react"
import { Tabs } from "../../shared/ui/Tabs"
import './styles.scss';
import { StudentTable } from "../StudentTable";
import { TEST_CLASSMATES } from "../../mocks/data";
import { Filter } from "../Filter";

const TABS = [
    { id: 0, name: 'Успеваемость класса' },
    { id: 1, name: 'Успеваемость потока' },
]
export const ClassTable = () => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <div className="ClassTable">
            <div className="ClassTable__inner">
                <div className="ClassTable__header">
                    <h2 className="ClassTable__title">Класс 5 “А”</h2>
                    <div className="ClassTable__controls">
                        <Tabs activeTab={activeTab} handleTab={setActiveTab} tabs={TABS} />
                        <button className="btn-reset">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 7L20 7" stroke="#303030" stroke-width="2" stroke-linecap="round" />
                                <path d="M14 17H4" stroke="#303030" stroke-width="2" stroke-linecap="round" />
                                <circle cx="7" cy="7" r="3" stroke="#303030" stroke-width="2" />
                                <circle cx="17" cy="17" r="3" transform="rotate(180 17 17)" stroke="#303030" stroke-width="2" />
                            </svg>
                        </button>
                    </div>
                    <div className="ClassTableFilters">
                        <div className="ClassTableFilters__inner">
                            <div className="ClassTableFilters__filters">
                                <Filter type="time" />
                                <Filter type="modules" />
                                <Filter type="points" />
                            </div>
                            <button className="btn-reset ClassTableFilters__reset">
                                Сбросить
                            </button>
                        </div>
                    </div>
                </div>
                <div className="ClassTable__content">
                    <StudentTable data={TEST_CLASSMATES} type='classmates' />
                </div>
                <div className="ClassTable__footer">
                    <div className="ClassTable__footer_inner">
                        <span className="ClassTable__students_count">28 учеников</span>
                        <span className="ClassTable__points_count">1 384 баллов</span>
                    </div>
                </div>
            </div>
        </div>
    )
}