import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import type { NetWorthHistory } from '../../types/finance';

import { formatCurrency } from '../../utils/formatters';


type NetWorthChartProps = {
  history: NetWorthHistory[];
};


function NetWorthChart(props: NetWorthChartProps) {

  return (

    <ResponsiveContainer width="100%" height={400}>

      <LineChart data={props.history}>

        <CartesianGrid
          strokeDasharray="3 3"
          stroke="var(--border-color)"
        />

        <XAxis
          dataKey="date"
          stroke="var(--secondary-text-color)"
          tickFormatter={(value) =>
            new Date(value).toLocaleDateString(
              'en-AU',
              {
                month: 'short',
                year: 'numeric'
              }
            )
          }
          label={{
            value: 'Date',
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
          labelFormatter={(value: string | number) =>
            new Date(value).toLocaleDateString(
              'en-AU',
              { 
                month: 'long',
                year: 'numeric'
              }
            )
          }
          formatter={(value: number | string | undefined) =>
            formatCurrency(Number(value))
          }
        />

        <Line
          type="monotone"
          dataKey="netWorth"
          stroke="#1f4e79"
          strokeWidth={3}
          dot
          name="Net Worth"
        />

      </LineChart>

    </ResponsiveContainer>

  );

}


export default NetWorthChart;