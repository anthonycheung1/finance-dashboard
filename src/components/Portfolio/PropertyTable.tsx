import type { Property } from '../../types/finance';
import {
  getPropertyEquity,
  getPropertyLVR,
  getPropertyCashFlow,
  getPropertyAnnualRentalIncome
} from '../../utils/calculations';
import { formatCurrency, formatPercentage } from '../../utils/formatters';
import { useState } from 'react';

type PropertyTableProps = {
  properties: Property[];
}

function PropertyTable(props: PropertyTableProps) {
  const [searchText, setSearchText] = useState('');

  const filteredProperties = props.properties.filter((property) => {
    return property.name.toLowerCase().includes(searchText.toLowerCase())
      || property.suburb.toLowerCase().includes(searchText.toLowerCase());
  })

  return (
    <section>
      <h2>Property Portfolio</h2>

      <div className="property-search">
        <label htmlFor="property-search">Search properties</label>

        <input
          id="property-search"
          type="text"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Property name or suburb"
        />
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th scope="col">Property</th>
              <th scope="col">Suburb</th>
              <th scope="col">Current Value</th>
              <th scope="col">Mortgage</th>
              <th scope="col">Offset</th>
              <th scope="col">Equity</th>
              <th scope="col">LVR</th>
              <th scope="col">Interest Rate</th>
              <th scope="col">Weekly Rent</th>
              <th scope="col">Annual Rental Income</th>
              <th scope="col">Annual Expenses</th>
              <th scope="col">Net Cash Flow</th>
            </tr>
          </thead>

          <tbody>
            {filteredProperties.length > 0
              && filteredProperties.map(property => (
                <tr key={property.id}>
                  <td>{property.name}</td>
                  <td>{property.suburb}</td>
                  <td>{formatCurrency(property.currentValue)}</td>
                  <td>{formatCurrency(property.mortgageBalance)}</td>
                  <td>{formatCurrency(property.offsetBalance)}</td>
                  <td>{formatCurrency(getPropertyEquity(property))}</td>
                  <td>{formatPercentage(getPropertyLVR(property))}</td>
                  <td>{formatPercentage(property.interestRate)}</td>
                  <td>{formatCurrency(property.weeklyRentalIncome)}</td>
                  <td>{formatCurrency(getPropertyAnnualRentalIncome(property))}</td>
                  <td>{formatCurrency(property.annualExpenses)}</td>
                  <td>{formatCurrency(getPropertyCashFlow(property))}</td>
                </tr>
              ))}

            {filteredProperties.length === 0
              && (
                <tr>
                  <td colSpan={12}>No properties found.</td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PropertyTable;