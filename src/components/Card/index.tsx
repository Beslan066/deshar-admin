import { useState, type ReactNode } from "react"
import { Tabs } from "../../shared/ui/Tabs"
import './styles.scss'
import { Filter } from "../Filters/Filter"
import useRole from "../../shared/hooks/useRole"
import { TeacherItem } from "../../shared/ui/TeacherItem"

interface Tab {
    id: number
    title: string
}

interface FilterType {
    type: "time" | "modules" | "points"
    valueFrom: string
    valueTo: string
    setValueFrom: React.Dispatch<React.SetStateAction<string>>
    setValueTo: React.Dispatch<React.SetStateAction<string>>
}

interface CardProps {
    classTitle?: string
    tabs?: Tab[]
    filters?: FilterType[]
    resetFilters: () => void
    valueFirst: string;
    valueSecond: string;
    children: ReactNode
}

const FilterIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 7L20 7" stroke="#303030" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 17H4" stroke="#303030" strokeWidth="2" strokeLinecap="round" />
        <circle cx="7" cy="7" r="3" stroke="#303030" strokeWidth="2" />
        <circle cx="17" cy="17" r="3" transform="rotate(180 17 17)" stroke="#303030" strokeWidth="2" />
    </svg>
)

export const Card = ({
    classTitle = 'Название класса',
    resetFilters,
    filters = [],
    tabs = [],
    valueFirst = "28 учеников",
    valueSecond = "1 384 баллов",
    children,
}: CardProps) => {
    const [activeTab, setActiveTab] = useState(0)
    const [showFilters, setShowFilters] = useState(false)
    const { hasRole } = useRole()

    const hasFilters = filters.length > 0
    const shouldShowFilters = showFilters && hasFilters

    return (
        <div className="Card">
            <div className="Card__inner">
                <div className="Card__header">
                    <div className="Card__header-top">
                        <h2 className="Card__title">{classTitle}</h2>
                        {hasRole(["vicePrincipal", "department", "ministry"]) && (
                            <TeacherItem name="Татриева Зарема" />
                        )}
                    </div>

                    <div className="Card__controls">
                        {tabs.length > 0 && (
                            <Tabs
                                activeTab={activeTab}
                                handleTab={setActiveTab}
                                tabs={tabs}
                            />
                        )}

                        {hasFilters && (
                            <button
                                className={`btn-reset Card__filters-show ${showFilters ? 'Card__filters-show--active' : ''}`}
                                onClick={() => setShowFilters(prev => !prev)}
                                aria-label={showFilters ? "Скрыть фильтры" : "Показать фильтры"}
                                aria-expanded={showFilters}
                            >
                                <FilterIcon />
                            </button>
                        )}
                    </div>

                    {shouldShowFilters && (
                        <div className="Card__filters">
                            <div className="Card__filters-inner">
                                <div className="Card__filters-list">
                                    {filters.map((filter, index) => (
                                        <Filter
                                            key={`${filter.type}-${index}`}
                                            type={filter.type}
                                            fromValue={filter.valueFrom}
                                            onFromChange={filter.setValueFrom}
                                            toValue={filter.valueTo}
                                            onToChange={filter.setValueTo}
                                        />
                                    ))}
                                </div>
                                <button
                                    className="btn-reset Card__filters-reset"
                                    onClick={resetFilters}
                                >
                                    Сбросить
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="Card__content">
                    {children}
                </div>

                <div className="Card__footer">
                    <div className="Card__footer-inner">
                        <span className="Card__value-first">{valueFirst}</span>
                        <span className="Card__value-second">{valueSecond}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}