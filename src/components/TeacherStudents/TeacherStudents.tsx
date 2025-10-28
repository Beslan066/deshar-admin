import './styles.scss';
import { Card } from '../Card';
import { useState } from 'react';

import { mockTeacherStudentsList } from '../../mocks/data';
import { TeacherStudentsList } from '../TeacherStudentsList';
const TABS = [
    { id: 0, title: 'Все классы' },
    { id: 1, title: '5 “А”' },
    { id: 2, title: '5 ”Б”' },
    { id: 3, title: '6 “Б”' },
    { id: 4, title: '6 “В”' },
]
export const TeacherStudents = () => {
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

    return <main className="TeacherStudents">

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
            title='Татриева Зина'
            tabs={TABS}
            key={"testCard123"}
            valueFirst='85 учителей'
            valueSecond='12 585 баллов'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onClickBackButton={() => console.log('back')}
            csv={true}
        >
            <TeacherStudentsList data={mockTeacherStudentsList} />
        </Card>
    </main>
}