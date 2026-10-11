import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

import type { AmortisationEntry } from '../../types/finance';
import { formatCurrency } from '../../utils/formatters';

type AmortisationChartProps = {
  schedule: AmortisationEntry[];
};

function AmortisationChart(
  props: AmortisationChartProps
) {
  return (
    <ResponsiveContainer
      width="100%"
      height={400}
    >
      <LineChart data={props.schedule}>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="var(--border-color)"
        />

        <XAxis
          dataKey="month"
          stroke="var(--secondary-text-color)"
          label={{
            value: 'Month',
            position: 'insideBottom',
            offset: -5,
            fill: 'var(--secondary-text-color)'
          }}
        />

        <YAxis
          stroke="var(--secondary-text-color)"
          tickFormatter={(value) =>
            `$${(value / 1000).toFixed(0)}k`
          }
        />

        <Tooltip
          formatter={(value) =>
            formatCurrency(Number(value))
          }
        />

        <Legend />

        <Line
          type="monotone"
          dataKey="balance"
          name="Mortgage Balance"
          stroke="#1f4e79"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default AmortisationChart;