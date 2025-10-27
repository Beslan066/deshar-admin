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
    title?: string
    tabs?: Tab[]
    filters?: FilterType[]
    resetFilters: () => void
    valueFirst?: string;
    valueSecond?: string;
    children: ReactNode;
    isParallel?: boolean;
    activeTab: number;
    setActiveTab: React.Dispatch<React.SetStateAction<number>>;
    onClickBackButton?: () => void;
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
    title = 'Название класса',
    resetFilters,
    filters = [],
    tabs = [],
    valueFirst,
    valueSecond,
    children,
    onClickBackButton,
    activeTab,
    setActiveTab,
    isParallel
}: CardProps) => {
    const [showFilters, setShowFilters] = useState(false)
    const { hasRole } = useRole()
    const hasFilters = filters.length > 0
    const shouldShowFilters = showFilters && hasFilters
    console.log("isParallel:", isParallel);
    return (
        <div className="Card">
            <div className="Card__inner">
                <div className="Card__header">
                    <div className="Card__header-top">
                        <div className="Card__header-top_title-wrapper">
                            {onClickBackButton && <button className="btn-reset Card__back" onClick={onClickBackButton}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.9497 12.9492C19.502 12.9492 19.9497 12.5015 19.9497 11.9492C19.9497 11.3969 19.502 10.9492 18.9497 10.9492L18.9497 12.9492ZM4.2426 11.2421C3.85208 11.6326 3.85208 12.2658 4.2426 12.6563L10.6066 19.0203C10.9971 19.4108 11.6302 19.4108 12.0208 19.0203C12.4113 18.6298 12.4113 17.9966 12.0208 17.6061L6.36392 11.9492L12.0208 6.29236C12.4113 5.90184 12.4113 5.26867 12.0208 4.87815C11.6303 4.48763 10.9971 4.48763 10.6066 4.87815L4.2426 11.2421ZM18.9497 10.9492L4.94971 10.9492L4.94971 12.9492L18.9497 12.9492L18.9497 10.9492Z" fill="#303030" />
                                </svg>
                            </button>}
                            <h2 className="Card__title">{title}</h2>
                        </div>
                        {hasRole(["vicePrincipal", "department", "ministry", "admin"]) || isParallel && (
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