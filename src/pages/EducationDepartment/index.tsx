import { useState } from "react"
import { Card } from "../../components/Card"
import { educationDepMockData } from "../../mocks/data"
import { EducationDepartmentTable } from "../../components/EducationDepartmentTable"
const TABS = [
    { id: 0, title: 'Все упр. образования' },
]
export const EducationDepartment = () => {
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

    return <main className="EducationDepartment">
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
            title='Упр. образования'
            tabs={TABS}
            key={"testCard123"}
            valueFirst='7 управлений образования'
            valueSecond='584 958 баллов'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            csv={true}
        >
            <EducationDepartmentTable data={educationDepMockData} link="/education-department/" />
        </Card>
    </main>
}