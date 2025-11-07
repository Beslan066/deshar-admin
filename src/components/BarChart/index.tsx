import { BarChart as RechartsBar, Bar,XAxis, YAxis, Tooltip } from 'recharts';
import type { BarChartDataItem } from '../MainChart';
const T = () => {
	return <div>test</div>
}
const ticks = [0,50, 100, 150].map(value => Math.round(value * 10) / 10);
export const BarChart = ({ data }: { data: BarChartDataItem[] }) => {
	return <RechartsBar
		style={{ width: '100%', height: '100%', aspectRatio: 1.618 }}
		responsive
		data={data}
	>
		<XAxis dataKey="key" tickFormatter={(t) => `${t.getDate()} ${t.toLocaleString('default', { month: 'short' })}`} axisLine={false} />
		<YAxis width={70} dataKey="value" tickFormatter={(value) => `${value} бал`} axisLine={false} ticks={ticks} />
		<Tooltip shared={false}/>
		{/* <Legend /> */}
		<Bar radius={12} dataKey="value" fill="#1baa7d" />
	</RechartsBar>
}