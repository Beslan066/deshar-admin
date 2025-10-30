import { PieChart } from '@mui/x-charts/PieChart'
import { Selector } from '../../shared/ui/Selector'
import { useDrawingArea } from '@mui/x-charts/hooks'
import type { JSX } from 'react'
import './styles.scss'
import { Tooltip } from '../../shared/ui/Tooltip'
export interface PieDataItem {
    value: number
    color: string
    label: string
    labelMarkType: (data: PieDataItem) => JSX.Element
}

interface StatisticsBlockProps {
    data: PieDataItem[];
    centerLabel?: string;
}
// Simple SVG mark component
export const LegendMarkItem = ({ color }: { color: string }) => {
    return (
        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="15" height="8" rx="4" fill={color} />
        </svg>
    )
}

// Center label component
function PieCenterLabel({ label, value }: { label: string; value: string }) {
    const { width, height, left, top } = useDrawingArea()

    return (
        <>
            <text
                x={left + width / 2}
                y={top + height / 2 - 10}
                className="StatisticsBlock__pie_text_value"
                textAnchor="middle"
                dominantBaseline="middle">
                {value}
            </text>
            <text
                x={left + width / 2}
                y={top + height / 2 + 10}
                className="StatisticsBlock__pie_text_label"
                textAnchor="middle"
                dominantBaseline="middle">
                {label}
            </text>
        </>
    )
}
const Test = ({ label, value }: { label: string; value: string; }) => (
    <div>d{label}{value}</div>
)
// Selector options
const selectorOptions = [
    { id: '1', label: 'Неделя' },
    { id: '2', label: 'Месяц' },
    { id: '3', label: 'Год' },
]

export const StatisticsBlock = ({
    data,
    centerLabel = 'баллов',
}: StatisticsBlockProps) => {
    const centerValue = data.reduce((acc, current) => acc + current.value, 0);
    return (
        <div className="StatisticsBlock">
            <div className="StatisticsBlock__inner">
                <div className="StatisticsBlock__header">
                    <h3 className="StatisticsBlock__title">Лучшая успеваемость</h3>
                    <Selector
                        className="StatisticsBlock__selector"
                        options={selectorOptions}
                        defaultValue="Неделя"
                        mini={true}
                    />
                </div>
                <div className="StatisticsBlock__body">
                    <PieChart
                        width={212}
                        height={212}
                        series={[
                            {
                                data: data,
                                innerRadius: 55,
                                outerRadius: 100,
                                paddingAngle: 1,
                                cornerRadius: 12,
                                startAngle: 0,
                                endAngle: 360,
                                cx: 100,
                                cy: 100,
                                valueFormatter: (v) => `${v.value} баллов`
                            },
                        ]}
                        slots={{
                            tooltip: Tooltip
                        }}
                        slotProps={{
                            legend: { hidden: true }, // Hide default legend if using custom one
                            tooltip: Tooltip
                        }}
                    >
                        <PieCenterLabel value={String(centerValue)} label={centerLabel} />
                    </PieChart>
                </div>
            </div>
        </div >
    )
}
