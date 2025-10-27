import { useState } from 'react';
import { Card } from '../../components/Card';
// import { StudentCard } from '../../components/StudentCard';
import { studentTableMockData } from '../../mocks/data';
import './styles.scss';
import { StudentTable } from '../../components/StudentTable';
const TABS = [
    { id: 0, title: 'Ингушский язык' },
    { id: 1, title: 'Математика' },
    { id: 2, title: 'Литература' }
]
export const StudentPage = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [timeFrom, setTimeFrom] = useState<string>('')
    const [timeTo, setTimeTo] = useState<string>('')

    const [modulesFrom, setModulesFrom] = useState<string>('')
    const [modulesTo, setModulesTo] = useState<string>('')
    const [pointsFrom, setPointsFrom] = useState<string>('')
    const [pointsTo, setPointsTo] = useState<string>('');
    const resetFilters = () => {
        setTimeFrom('');
        setTimeTo('');
        setModulesFrom('');
        setModulesTo('');
        setPointsFrom('');
        setPointsTo('');
    }
    return (
        <main className="StudentPage">
            {/* <StudentCard /> */}
            <Card filters={[{
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
                title='Аспиев Лорс'
                tabs={TABS}
                key={"testCard123"}
                valueFirst='17 модулей'
                valueSecond='964 баллов'
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onClickBackButton={() => console.log('backBtn')}
            >
                <StudentTable data={studentTableMockData} />
            </Card>
        </main>
    )
}