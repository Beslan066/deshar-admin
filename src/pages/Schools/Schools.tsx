/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import { Card } from "../../components/Card"
import { SchoolsMockData } from "../../mocks/data"
import { Table } from "../../components/Table"
import { getColumnsSchool } from "../../components/SchoolsTable/columns"
import { useNavigate } from "react-router-dom"
import type { SchoolDepItem, SchoolItem } from "../../types/types"
import useRole from "../../shared/hooks/useRole"
const TABS = [
    { id: 0, title: 'Все районы' },
    { id: 1, title: 'Магас' },
    { id: 2, title: 'Назрань' },
    { id: 3, title: 'Насыр-Корт' },
]
export const Schools = () => {
    const navigate = useNavigate();
    const { role } = useRole();
    const [timeFrom, setTimeFrom] = useState<string>('')
    const [timeTo, setTimeTo] = useState<string>('')

    const [modulesFrom, setModulesFrom] = useState<string>('')
    const [modulesTo, setModulesTo] = useState<string>('')
    const [pointsFrom, setPointsFrom] = useState<string>('')
    const [pointsTo, setPointsTo] = useState<string>('');
    const [activeTab, setActiveTab] = useState(0)
    const resetFilters = () => {
        setTimeFrom('');
        setTimeTo('');
        setModulesFrom('');
        setModulesTo('');
        setPointsFrom('');
        setPointsTo('');
    }
    const redirectOnSchoolClick = (item: SchoolItem) => {
        navigate(`${item.id}`)
    }
    return <main className="Schools">
        <Card
            filters={[{
                type: "time",
                setValueFrom: setTimeFrom,
                setValueTo: setTimeTo,
                valueFrom: timeFrom,
                valueTo: timeTo
            },
            {
                type: "modules",
                setValueFrom: setModulesFrom,
                setValueTo: setModulesTo,
                valueFrom: modulesFrom,
                valueTo: modulesTo
            },
            {
                type: "points",
                setValueFrom: setPointsFrom,
                setValueTo: setPointsTo,
                valueFrom: pointsFrom,
                valueTo: pointsTo
            }
            ]}
            resetFilters={resetFilters}
            title='Школы'
            tabs={TABS}
            key={"testCard123"}
            valueFirst='45 школ'
            valueSecond='487 585 баллов'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            csv={role === "ministry"}
        >
            {/* <SchoolsTable data={SchoolsMockData} link="/schools/" /> */}
            <Table<SchoolDepItem, any> data={SchoolsMockData} getColumns={() => getColumnsSchool({ role })} handleRowClick={redirectOnSchoolClick} />
        </Card>
    </main>
}