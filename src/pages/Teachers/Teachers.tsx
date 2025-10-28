import { useState } from "react"
import { Card } from "../../components/Card"
import { TeachersTable } from "../../components/TeachersTable"
import { mockTeachers } from "../../mocks/data"
const TABS = [
    { id: 0, title: 'Все предметы' },
    { id: 1, title: 'Математика' },
    { id: 2, title: 'Русский язык' },
    { id: 3, title: 'Ингушский язык' },
    { id: 4, title: 'Литература' },
    { id: 5, title: 'География' },
]
export const Teachers = () => {
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
    return <main className="TeachersPage">
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
            title='Учителя'
            tabs={TABS}
            key={"testCard123"}
            valueFirst='247 учителей'
            valueSecond='67 585 баллов'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            type="teachers"
            csv={true}
        >
            <TeachersTable data={mockTeachers} />
        </Card>
    </main>
}