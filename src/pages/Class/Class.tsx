
import './styles.scss';
import { Card } from '../../components/Card';
import { useState } from 'react';
import { ClassTable } from '../../components/ClassTable';
import { TEST_CLASSMATES, TEST_FLOW } from '../../mocks/data';
import { useParams } from 'react-router-dom';

const TABS = [
    { id: 0, title: 'Успеваемость класса' },
    { id: 1, title: 'Успеваемость потока' },
]
const myClassesIDs = [1, 2, 3, 4, 5];
export const Class = () => {
    const params = useParams<{ classId: string }>();
    console.log(params);
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
    const isParallel = params.classId ? !myClassesIDs.includes(+params.classId) : true;
    return (
        <main className="ClassPage">
            {/* <ClassCardClass /> */}
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
                title='Класс 5 “А”'
                tabs={TABS}
                key={"testCard123"}
                valueFirst='28 чуваков'
                valueSecond='1 384 баллов'
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                isParallel={isParallel}
                type="class"
            >
                {activeTab === 0 ? <ClassTable data={TEST_CLASSMATES} type='classmates' /> : <ClassTable data={TEST_FLOW} type='parallel' />}
            </Card>
        </main>
    )
}