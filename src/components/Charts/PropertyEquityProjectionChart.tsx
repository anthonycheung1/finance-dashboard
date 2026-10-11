import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import type { PropertyEquityProjection } from '../../types/finance';

type PropertyEquityProjectionChartProps = {
  projections: PropertyEquityProjection[];
};

function PropertyEquityProjectionChart(
  {
    projections
  }: PropertyEquityProjectionChartProps
) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={projections}>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="var(--border-color)"
        />

        <XAxis
          dataKey="year"
          stroke="var(--secondary-text-color)"
          label={{
            value: 'Year',
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
            `$${Number(value).toLocaleString('en-AU')}`
          }
        />

        <Line
          type="monotone"
          dataKey="propertyValue"
          name="Property Value"
          stroke="#1f4e79"
          strokeWidth={2}
        />

        <Line
          type="monotone"
          dataKey="projectedMortgageBalance"
          name="Mortgage Balance"
          stroke="#a5a5a5"
          strokeWidth={2}
        />

        <Line
          type="monotone"
          dataKey="equity"
          name="Equity"
          stroke="#70ad47"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default PropertyEquityProjectionChart;