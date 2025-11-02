/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card';
import { useState } from 'react';

import { type SchoolItem } from '../../components/SchoolClassesList';
import { SchoolStatMockData } from '../../mocks/data';
import { Table } from '../../components/Table';
import { getColumns } from '../../components/SchoolClassesList/columns';
const TABS = [
    { id: 0, title: 'Все классы' },
    { id: 1, title: '5-ые' },
    { id: 2, title: '6-ые' },
    { id: 3, title: '7-ые' },
    { id: 4, title: '8-ые' },
    { id: 5, title: '9-ые' },
]
export const SchoolStat = () => {
    const [timeFrom, setTimeFrom] = useState<string>('')
    const [timeTo, setTimeTo] = useState<string>('')

    const [modulesFrom, setModulesFrom] = useState<string>('')
    const [modulesTo, setModulesTo] = useState<string>('')
    const [pointsFrom, setPointsFrom] = useState<string>('')
    const [pointsTo, setPointsTo] = useState<string>('');
    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate();
    const resetFilters = () => {
        setTimeFrom('');
        setTimeTo('');
        setModulesFrom('');
        setModulesTo('');
        setPointsFrom('');
        setPointsTo('');
    }
    const redirectOnStudentItemClick = (item: SchoolItem) => {
        console.log(item.id);
        navigate(`/class/${item.id}`)
    }
    const onClickBackButton = () => {

        navigate(-1);
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
            title='ГБОУ СОШ Детский сад № 1 г. Магас'
            tabs={TABS}
            key={"testCard123"}
            valueFirst='38 классов'
            valueSecond='64 585 баллов'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onClickBackButton={onClickBackButton}
        >
            {/* <SchoolClassesList data={SchoolStatMockData} link="/class/" /> */}
            <Table<SchoolItem, any> data={SchoolStatMockData} getColumns={() => getColumns()} handleRowClick={redirectOnStudentItemClick} />
        </Card>
    </main>
}