/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import { Card } from "../../components/Card"
import { SchoolsMockDataDEP } from "../../mocks/data"

import { Table } from "../../components/Table"
// import { getEducationDepartmentColumns } from "../../components/EducationDepartmentTable/columns"
import { useNavigate } from "react-router-dom"
// import { getColumnsSchool } from "../../components/SchoolsTable/columns"
import type { SchoolDepItem } from "../../types/types"
import { getColumnsSchool } from "../../components/SchoolsTable/columns"
import useRole from "../../shared/hooks/useRole"

const TABS = [
    { id: 0, title: 'Все районы' },
    { id: 1, title: 'Магас' },
    { id: 2, title: 'Назрань' },
    { id: 3, title: 'Малгобек' },
    { id: 4, title: 'Насыр-Корт' },

]
export const DepartmentSchools = () => {
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
    const redirectOnSchoolClick = (item: SchoolDepItem) => {
        console.log(item.id);
        navigate(`/schools/${item.id}`)
    }
    return <main className="DepartmentSchools">
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
            title='УО по г. Магас и г. Назрань'
            tabs={TABS}
            key={"testCard123"}
            valueFirst='489 школ'
            valueSecond='584 958 баллов'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            csv={true}
            onClickBackButton={() => navigate(-1)}
        >
            {/* <EducationDepartmentTable data={educationDepMockData} link="/education-department/" /> */}
            <Table<SchoolDepItem, any> data={SchoolsMockDataDEP} getColumns={() => getColumnsSchool({ role })} handleRowClick={redirectOnSchoolClick} />
            {/* <Table<IEducationDepartment, any> data={educationDepMockData} getColumns={() => getEducationDepartmentColumns()} handleRowClick={redirectOnStudentItemClick} /> */}
        </Card>
    </main>
}