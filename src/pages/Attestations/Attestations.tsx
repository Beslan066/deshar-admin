// import { AttestationsCard } from "../../components/AttestationsCard"
import { useState } from "react"
import { AttestationsTable } from "../../components/AttestationTable"
import { Card } from "../../components/Card"
import { mockAttestationData } from "../../mocks/data"
const TABS = [
    { id: 0, title: 'Успеваемость класса' },
    { id: 1, title: 'Успеваемость потока' },
]
export const Attestations = () => {
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
            classTitle='Класс 5 “А”'
            tabs={TABS}
            key={"testCard123"}
            valueFirst='28 чуваков'
            valueSecond='1 384 баллов'>
            <AttestationsTable data={mockAttestationData} />
        </Card>
    </main>
}