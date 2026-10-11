import type { PropertyEquityProjection } from '../../types/finance';
import { formatCurrency } from '../../utils/formatters';

type PropertyEquityProjectionProps = {
  propertyEquityProjections: PropertyEquityProjection[];
}

function PropertyEquityProjectionTable(props: PropertyEquityProjectionProps) {
  return (
    <section>
      <details>
        <summary>Property Equity Projection</summary>
        <table>
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Property Value</th>
              <th scope="col">Mortgage Balance</th>
              <th scope="col">Equity</th>
            </tr>
          </thead>
          <tbody>
            {props.propertyEquityProjections.map(propertyEquityProjection => (
              <tr key={propertyEquityProjection.year}>
                <td>{propertyEquityProjection.year}</td>
                <td>{formatCurrency(propertyEquityProjection.propertyValue)}</td>
                <td>{formatCurrency(propertyEquityProjection.projectedMortgageBalance)}</td>
                <td>{formatCurrency(propertyEquityProjection.equity)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </section>
  );
}

export default PropertyEquityProjectionTable;