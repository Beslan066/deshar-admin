/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card } from '../../components/Card';
import { useMemo, useState } from 'react';
import { TEST_CLASSMATES, TEST_FLOW } from '../../mocks/data';
import { useNavigate, useParams } from 'react-router-dom';
import { Table } from '../../components/Table';
import { getColumns } from '../../components/ClassTable/columns';
import type { Student } from '../../types/types';

const TABS = [
    { id: 0, title: 'Успеваемость класса' },
    { id: 1, title: 'Успеваемость потока' },
]
const myClassesIDs = [1, 2, 3, 4, 5];

export const Class = () => {
    const params = useParams<{ classId: string }>();
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

    // Функция преобразования времени из формата "часы:минуты" в секунды
    const strTimeToSeconds = (value: string): number => {
        if (!value || value.trim() === '') return 0;

        const parts = value.split(":");
        if (parts.length !== 2) return 0;

        const hours = parseInt(parts[0], 10) || 0;
        const minutes = parseInt(parts[1], 10) || 0;

        return (hours * 3600) + (minutes * 60);
    }

    const isParallel = params.classId ? !myClassesIDs.includes(+params.classId) : true;

    const redirectOnStudentItemClick = (item: Student) => {
        navigate(`student/${item.id}`, { relative: "route" })
    }

    // Функция фильтрации данных
    const filterData = (data: Student[]) => {
        return data.filter(item => {
            const time = item.time; // предполагаем, что это число в секундах
            const modules = item.doneModules;
            const points = item.points;

            // Преобразуем значения фильтров
            const convertedTimeFrom = timeFrom ? strTimeToSeconds(timeFrom) : null;
            const convertedTimeTo = timeTo ? strTimeToSeconds(timeTo) : null;
            const modulesFromNum = modulesFrom ? parseInt(modulesFrom, 10) : null;
            const modulesToNum = modulesTo ? parseInt(modulesTo, 10) : null;
            const pointsFromNum = pointsFrom ? parseInt(pointsFrom, 10) : null;
            const pointsToNum = pointsTo ? parseInt(pointsTo, 10) : null;

            // Проверка фильтра по времени
            if (convertedTimeFrom !== null && time < convertedTimeFrom) return false;
            if (convertedTimeTo !== null && time > convertedTimeTo) return false;

            // Проверка фильтра по модулям
            if (modulesFromNum !== null && modules < modulesFromNum) return false;
            if (modulesToNum !== null && modules > modulesToNum) return false;

            // Проверка фильтра по баллам
            if (pointsFromNum !== null && points < pointsFromNum) return false;
            if (pointsToNum !== null && points > pointsToNum) return false;

            return true;
        });
    }

    const filteredClassmates = useMemo(() => filterData(TEST_CLASSMATES), [
        timeFrom,
        timeTo,
        modulesFrom,
        modulesTo,
        pointsFrom,
        pointsTo,
        TEST_CLASSMATES
    ]);

    const filteredFlow = useMemo(() => filterData(TEST_FLOW), [
        timeFrom,
        timeTo,
        modulesFrom,
        modulesTo,
        pointsFrom,
        pointsTo,
        TEST_FLOW
    ]);

    return (
        <main className="ClassPage">
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
                title='Класс 5 "А"'
                tabs={TABS}
                key={"testCard123"}
                valueFirst='28 чуваков'
                valueSecond='1 384 баллов'
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                isParallel={isParallel}
                type="class"
            >
                {activeTab === 0 ?
                    <Table<Student, any> data={filteredClassmates} getColumns={() => getColumns("classmates")} handleRowClick={redirectOnStudentItemClick} /> :
                    <Table<Student, any> data={filteredFlow} getColumns={() => getColumns("parallel")} handleRowClick={redirectOnStudentItemClick} />}
            </Card>
        </main>
    )
}