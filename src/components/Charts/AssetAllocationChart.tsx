import type {
  ETF,
  Property,
  CashAccount,
  SuperAccount
} from '../../types/finance';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

import {
  getETFTotalValue,
  getTotalPropertyEquity,
  getTotalSuperannuationBalance,
  getTotalCash
} from '../../utils/calculations';

import { formatCurrency } from '../../utils/formatters';


type AssetAllocationChartProps = {
  etfs: ETF[];
  properties: Property[];
  superAccounts: SuperAccount[];
  cashAccounts: CashAccount[];
};


function AssetAllocationChart(
  props: AssetAllocationChartProps
) {

  const chartData = [
    {
      name: 'ETFs',
      value: getETFTotalValue(props.etfs)
    },
    {
      name: 'Property Equity',
      value: getTotalPropertyEquity(props.properties)
    },
    {
      name: 'Superannuation',
      value: getTotalSuperannuationBalance(props.superAccounts)
    },
    {
      name: 'Cash',
      value: getTotalCash(props.cashAccounts)
    }
  ];


  const COLORS = [
    '#1f4e79',
    '#4f81bd',
    '#70ad47',
    '#a5a5a5'
  ];


  return (

    <section>

      <h2>Asset Allocation</h2>

      <ResponsiveContainer width="100%" height={400}>

        <PieChart>

          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={140}
            label
          >

            {chartData.map((_, index) => (

              <Cell
                key={`cell-${index}`}
                fill={COLORS[index]}
              />

            ))}

          </Pie>


          <Tooltip
            formatter={value =>
              formatCurrency(Number(value))
            }
            contentStyle={{
              backgroundColor: 'var(--surface-color)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-color)'
            }}
            itemStyle={{
              color: 'var(--text-color)'
            }}
          />


          <Legend
            wrapperStyle={{
              color: 'var(--text-color)'
            }}
          />

        </PieChart>

      </ResponsiveContainer>

    </section>

  );

}

export default AssetAllocationChart;