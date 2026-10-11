import { properties } from '../data/financialData';
import { getPropertyEquityProjections } from '../utils/calculations';
import PropertyEquityProjectionChart from '../components/Charts/PropertyEquityProjectionChart';

function Projections() {
  const property1Projections = getPropertyEquityProjections(
    properties[0],
    properties[0].mortgageBalance,
    properties[0].interestRate,
    30
  );

  const property2Projections = getPropertyEquityProjections(
    properties[1],
    properties[1].mortgageBalance,
    properties[1].interestRate,
    30
  );

  return (
    <main>
      <h1>Property Equity Projections</h1>

      <div className='property-equity-projections-grid'>
        <article className='property-equity-projection-card'>
          <h2>{properties[0].name}</h2>

          <PropertyEquityProjectionChart
            projections={property1Projections}
          />
        </article>

        <article className='property-equity-projection-card'>
          <h2>{properties[1].name}</h2>

          <PropertyEquityProjectionChart
            projections={property2Projections}
          />
        </article>
      </div>
    </main>
  );
}

export default Projections;