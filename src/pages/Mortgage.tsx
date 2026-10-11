import { useState } from 'react';

import {
  getMonthlyMortgagePayment,
  getMortgageAmortisationSchedule
} from '../utils/calculations';

import MortgageCalculator from '../components/Property/MortgageCalculator';
import AmortisationChart from '../components/Charts/AmortisationChart';

import { formatCurrency } from '../utils/formatters';


function Mortgage() {
  // Data for calculations
  const [principal, setPrincipal] = useState<number | ''>(700000);
  const [interestRate, setInterestRate] = useState<number | ''>(6.09);
  const [termYears, setTermYears] = useState<number | ''>(30);

  // For displaying amortisation schedule and graph
  const [isScheduleVisible, setIsScheduleVisible] = useState<boolean>(true);
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);

  // For validating input. 'null' means no errors.
  const [principalError, setPrincipalError] = useState<string | null>(null);
  const [interestRateError, setInterestRateError] = useState<string | null>(null);
  const [termYearsError, setTermYearsError] = useState<string | null>(null);

  function calculateMortgage() {
    // For keeping track of whether any input went wrong
    let hasErrors: boolean = false;

    // Clear previous errors, if any
    setPrincipalError(null);
    setInterestRateError(null);
    setTermYearsError(null);

    // Validate the principal, interest rate, and the term
    if (principal === '' || principal <= 0) {
      setPrincipalError('Loan amount must be greater than zero.');
      hasErrors = true;
    }

    if (interestRate === '' || interestRate < 0) {
      setInterestRateError('Interest rate cannot be negative.');
      hasErrors = true;
    }

    if (
      termYears === ''
      || termYears <= 0
      || !Number.isInteger(termYears)
    ) {
      setTermYearsError(
        'Loan term must be a whole number greater than zero.'
      );
      hasErrors = true;
    }

    // Stop here if there are validation errors
    if (hasErrors) {
      return;
    }

    /*
      The validation above guarantees that these values
      are numbers. The explicit checks below allow TypeScript
      to narrow the types from number | '' to number.
    */
    if (
      principal === ''
      || interestRate === ''
      || termYears === ''
    ) {
      return;
    }

    setHasCalculated(true);
  }


  let monthlyPayment: number | null = null;
  let mortgageSchedule: ReturnType<typeof getMortgageAmortisationSchedule> = [];

  if (
    hasCalculated
    && principal !== ''
    && interestRate !== ''
    && termYears !== ''
  ) {
    monthlyPayment = getMonthlyMortgagePayment(
      principal,
      interestRate,
      termYears
    );

    mortgageSchedule = getMortgageAmortisationSchedule(
      principal,
      interestRate,
      termYears
    );
  }


  return (
    <main>
      <h1>Mortgage</h1>

      <MortgageCalculator
        principal={principal}
        interestRate={interestRate}
        termYears={termYears}
        onPrincipalChange={(value) => {
          setPrincipal(value);

          if (
            value !== ''
            && value > 0
          ) {
            setPrincipalError(null);
          }
        }}
        onInterestRateChange={(value) => {
          setInterestRate(value);

          if (
            value !== ''
            && value >= 0
          ) {
            setInterestRateError(null);
          }
        }}
        onTermYearsChange={(value) => {
          setTermYears(value);

          if (
            value !== ''
            && value > 0
            && Number.isInteger(value)
          ) {
            setTermYearsError(null);
          }
        }}
        onCalculate={calculateMortgage}
        monthlyPayment={monthlyPayment}
        principalError={principalError}
        interestRateError={interestRateError}
        termYearsError={termYearsError}
      />

      {hasCalculated && (
        <section className="mortgage-amortisation">
          <h2>Mortgage Amortisation</h2>

          <div className="dashboard-chart-card">
            <AmortisationChart
              schedule={mortgageSchedule}
            />
          </div>

          <details
            open={isScheduleVisible}
            onToggle={(event) => {
              setIsScheduleVisible(event.currentTarget.open);
            }}
          >
            <summary>
              {isScheduleVisible
                ? "Hide amortisation schedule"
                : "Show amortisation schedule"}
            </summary>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Payment</th>
                    <th>Principal</th>
                    <th>Interest</th>
                    <th>Balance</th>
                  </tr>
                </thead>

                <tbody>
                  {mortgageSchedule.map((entry) => (
                    <tr key={entry.month}>
                      <td>
                        {entry.month}
                      </td>

                      <td>
                        {formatCurrency(entry.payment)}
                      </td>

                      <td>
                        {formatCurrency(entry.principal)}
                      </td>

                      <td>
                        {formatCurrency(entry.interest)}
                      </td>

                      <td>
                        {formatCurrency(entry.balance)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </section>
      )}
    </main>
  );
}


export default Mortgage;