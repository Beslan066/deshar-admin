import { PieChart } from '@mui/x-charts/PieChart';
import { Selector } from '../../shared/ui/Selector';
import './styles.scss';
import { useDrawingArea } from '@mui/x-charts/hooks';
const LegendMarkItem = ({ color }: { color: string | undefined; }) => {
    return (
        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="15" height="8" rx="4" fill={color} />
        </svg>
    );
};

function PieCenterLabel({ label, value }: { label: string; value: string; }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <>
            <text x={left + width / 2} y={top + height / 2 - 10} className='StatisticsBlock__pie_text_value'>
                {value}
            </text>
            <text x={left + width / 2} y={top + height / 2 + 10} className='StatisticsBlock__pie_text_label'>
                {label}
            </text>
        </>
    );
}

// Кастомный компонент тултипа для PieChart
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltipContent = (props: any) => {
    const { itemData, series } = props;
    if (!itemData || !series) return null;
    console.log(itemData);
    console.log(series);
    return (
        <div className="StatisticsBlock__custom-tooltip">
            <div className="StatisticsBlock__tooltip-item">
                <span className="StatisticsBlock__tooltip-label">1</span>
                <span className="StatisticsBlock__tooltip-value">22 баллов</span>
            </div>
        </div>
    );
};

export const StatisticsBlock = () => {
    const pieData = [
        { value: 35, color: '#1baa7d', label: 'ГБОУ Центр образования г. Магас', labelMarkType: (data: any) => LegendMarkItem({ color: data.color }) },
        { value: 25, color: '#f1c515', label: 'ГБОУ Лицей – детский сад г. Магас', labelMarkType: (data: any) => LegendMarkItem({ color: data.color }) },
        { value: 20, color: '#ed6f09', label: 'ГБОУ гимназия Марем г. Магас', labelMarkType: (data: any) => LegendMarkItem({ color: data.color }) },
        { value: 15, color: '#f82754', label: 'ГБОУ СОШ №2 г. Магас', labelMarkType: (data: any) => LegendMarkItem({ color: data.color }) },
        { value: 5, color: '#ea20fd', label: 'ГБОУ СОШ – Детский сад № 1 г. Магас', labelMarkType: (data: any) => LegendMarkItem({ color: data.color }) },
        { value: 5, color: '#1b8deb', label: 'ГБОУ СОШ №5 г. Магас', labelMarkType: (data: any) => LegendMarkItem({ color: data.color }) },
        { value: 5, color: '#3fc8fa', label: 'ГБОУ СОШ №8 г. Магас', labelMarkType: (data: any) => LegendMarkItem({ color: data.color }) }
    ];

    return (
        <div className='StatisticsBlock'>
            <div className="StatisticsBlock__inner">
                <div className="StatisticsBlock__header">
                    <h3 className='StatisticsBlock__title'>Лучшая успеваемость</h3>
                    <Selector
                        className='StatisticsBlock__selector'
                        options={[{ id: "1", label: "Неделя" }, { id: "2", label: "Месяц" }, { id: "3", label: "Год" }]}
                        defaultValue='Неделя' />
                </div>
                <div className="StatisticsBlock__body">
                    <PieChart
                        width={212}
                        height={212}
                        series={[
                            {
                                data: pieData,
                                innerRadius: 55,
                                outerRadius: 100,
                                paddingAngle: 1,
                                cornerRadius: 7,
                                startAngle: 0,
                                endAngle: 360,
                                cx: 100,
                                cy: 100,
                            }
                        ]}
                    >
                        <PieCenterLabel value="123384" label='баллов' />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};