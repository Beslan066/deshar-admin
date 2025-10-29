// import { AttestationsCard } from "../../components/AttestationsCard"
import { useState } from "react"
import { AttestationsTable } from "../../components/AttestationTable"
import { Card } from "../../components/Card"
import { mockAttestationData } from "../../mocks/data"
const TABS = [
    { id: 0, title: 'На проверку' },
    { id: 1, title: 'Принятые' },
    { id: 2, title: 'Отклоненные' },
    { id: 3, title: 'Отклоненные' },
    { id: 4, title: 'Отклоненные' },
    { id: 5, title: 'Отклоненные' },
    { id: 6, title: 'Отклоненные' },
    { id: 7, title: 'Отклоненные' },
    { id: 8, title: 'Отклоненные' },
    { id: 9, title: 'Отклоненные' },
    { id: 10, title: 'Отклоненные' },
    { id: 11, title: 'Отклоненные' },
    { id: 12, title: 'Отклоненные' },
    { id: 13, title: 'Отклоненные' },
]
export const Attestations = () => {
    const [timeFrom, setTimeFrom] = useState<string>('')
    const [timeTo, setTimeTo] = useState<string>('')
    const [activeTab, setActiveTab] = useState(0);

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
    const data = activeTab === 0 ? mockAttestationData.checking : activeTab === 1 ? mockAttestationData.accepted : mockAttestationData.rejected;
    return <main className="AttestationPage">

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
            title='Аттестации учеников'
            tabs={TABS}
            key={"testCard123"}
            valueFirst='147 аттестаций'
            activeTab={activeTab}
            setActiveTab={setActiveTab}

        >

            <AttestationsTable data={data} />
        </Card>
    </main>
}