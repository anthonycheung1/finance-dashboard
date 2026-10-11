import type { ETF } from '../types/finance';
import {
  properties,
  cashAccounts,
  superAccounts,
  netWorthHistory
} from '../data/financialData';
import {
  getETFTotalValue,
  getNetWorth,
  getTotalPropertyEquity,
  getTotalPropertyMortgage,
  getTotalCash,
  getTotalSuperannuationBalance,
  getTotalPropertyCashFlow
} from '../utils/calculations';
import { formatCurrency } from '../utils/formatters';
import StatCard from '../components/UI/StatCard';
import NetWorthChart from '../components/Charts/NetWorthChart';
import AssetAllocationChart from '../components/Charts/AssetAllocationChart';

type DashboardProps = {
  etfs: ETF[];
};

function Dashboard(props: DashboardProps) {
  return (
    <main>
      <div className='dashboard-content'>

        <h1>Personal Finance Dashboard</h1>

        <section id='overview'>
          <h2>Overview</h2>

          <div className='top-level-metrics-grid'>

            <StatCard
              title='Total Net Worth'
              className='total-net-worth-StatCard stat-card'
              subtitle='ETFs, properties, cash accounts, superannuation'
              value={formatCurrency(
                getNetWorth(
                  props.etfs,
                  properties,
                  superAccounts,
                  cashAccounts
                )
              )}
            />

            <StatCard
              title='Cash'
              className='cash-StatCard stat-card'
              value={formatCurrency(
                getTotalCash(cashAccounts)
              )}
            />

            <StatCard
              title='ETF Portfolio'
              className='etf-portfolio-StatCard stat-card'
              value={formatCurrency(
                getETFTotalValue(props.etfs)
              )}
            />

            <StatCard
              title='Superannuation'
              className='superannuation-StatCard stat-card'
              value={formatCurrency(
                getTotalSuperannuationBalance(superAccounts)
              )}
            />

            <StatCard
              title='Property Equity'
              className='property-equity-StatCard stat-card'
              value={formatCurrency(
                getTotalPropertyEquity(properties)
              )}
            />

            <StatCard
              title='Mortgage'
              className='mortgage-StatCard stat-card'
              value={formatCurrency(
                getTotalPropertyMortgage(properties)
              )}
            />

            <StatCard
              title='Net Property Cash Flow'
              className='net-property-cash-flow-StatCard stat-card'
              value={formatCurrency(
                getTotalPropertyCashFlow(properties)
              )}
            />

          </div>
        </section>

        <section className='dashboard-charts'>

          <article
            id='net-worth'
            className='dashboard-chart-card'
          >

            <NetWorthChart
              history={netWorthHistory}
            />
          </article>

          <article
            id='asset-allocation'
            className='dashboard-chart-card'
          >

            <AssetAllocationChart
              etfs={props.etfs}
              properties={properties}
              superAccounts={superAccounts}
              cashAccounts={cashAccounts}
            />
          </article>

        </section>

      </div>
    </main>
  );
}

export default Dashboard;