import { useParams } from 'react-router-dom';
import './styles.scss';
import { Card } from '../../components/Card';
import { useState } from 'react';

import { SchoolClassesList } from '../../components/SchoolClassesList';
import { SchoolStatMockData } from '../../mocks/data';
const TABS = [
    { id: 0, title: 'Все классы' },
    { id: 1, title: '5-ые' },
    { id: 2, title: '6-ые' },
    { id: 3, title: '7-ые' },
    { id: 4, title: '8-ые' },
    { id: 5, title: '9-ые' },
]
export const SchoolStat = () => {
    const { schoolID } = useParams();
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

    return <main className="SchoolStat">

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
            <SchoolClassesList data={SchoolStatMockData} link="/class/" />
        </Card>
    </main>
}