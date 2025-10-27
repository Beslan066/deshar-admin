import { useState } from "react"
import { Card } from "../../components/Card"
import { SchoolsTable } from "../../components/SchoolsTable"
import { SchoolsMockData } from "../../mocks/data"
const TABS = [
    { id: 0, title: 'Все районы' },
    { id: 1, title: 'Магас' },
    { id: 2, title: 'Назрань' },
    { id: 3, title: 'Насыр-Корт' },
]
export const Schools = () => {
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
            classTitle='Школы'
            tabs={TABS}
            key={"testCard123"}
            valueFirst='45 школ'
            valueSecond='487 585 баллов'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        >
            <SchoolsTable data={SchoolsMockData} link="/schools/" />
        </Card>
    </main>
}