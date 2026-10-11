import { formatCurrency } from '../../utils/formatters';

type MortgageCalculatorProps = {
  principal: number | '';
  interestRate: number | '';
  termYears: number | '';
  principalError: string | null;
  interestRateError: string | null;
  termYearsError: string | null;
  monthlyPayment: number | null;

  onPrincipalChange: (value: number | '') => void;
  onInterestRateChange: (value: number | '') => void;
  onTermYearsChange: (value: number | '') => void;
  onCalculate: () => void;
};

function MortgageCalculator(
  props: MortgageCalculatorProps
) {
  return (
    <section>
      <h2>Mortgage Calculator</h2>

      <div className="mortgage-calculator">
        <div className="form-field">
          <label htmlFor="mortgage-principal">
            Loan Amount
          </label>

          <input
            id="mortgage-principal"
            type="number"
            min="0"
            step="1000"
            value={props.principal}
            aria-invalid={props.principalError !== null}
            aria-describedby="mortgage-principal-error"
            onChange={(event) => {
              const value = event.target.value;

              const principal =
                value === ''
                  ? ''
                  : Number(value);

              props.onPrincipalChange(principal);
            }}
          />

          {props.principalError !== null && (
            <p
              id="mortgage-principal-error"
              className="form-error"
            >
              {props.principalError}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="mortgage-interest-rate">
            Interest Rate (%)
          </label>

          <input
            id="mortgage-interest-rate"
            type="number"
            min="0"
            step="0.01"
            value={props.interestRate}
            aria-invalid={props.interestRateError !== null}
            aria-describedby="mortgage-interest-rate-error"
            onChange={(event) => {
              const value = event.target.value;

              const interestRate =
                value === ''
                  ? ''
                  : Number(value);

              props.onInterestRateChange(interestRate);
            }}
          />

          {props.interestRateError !== null && (
            <p
              id="mortgage-interest-rate-error"
              className="form-error"
            >
              {props.interestRateError}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="mortgage-term">
            Loan Term (years)
          </label>

          <input
            id="mortgage-term"
            type="number"
            min="1"
            step="1"
            value={props.termYears}
            aria-invalid={props.termYearsError !== null}
            aria-describedby="mortgage-term-error"
            onChange={(event) => {
              const value = event.target.value;

              const termYears =
                value === ''
                  ? ''
                  : Number(value);

              props.onTermYearsChange(termYears);
            }}
          />

          {props.termYearsError !== null && (
            <p
              id="mortgage-term-error"
              className="form-error"
            >
              {props.termYearsError}
            </p>
          )}
        </div>

        <div className="form-actions">
          <button
            type="button"
            onClick={props.onCalculate}
          >
            Calculate Mortgage
          </button>
        </div>

        {props.monthlyPayment !== null && (
          <div className="mortgage-result">
            <h3>Monthly Repayment</h3>

            <p>
              {formatCurrency(
                props.monthlyPayment
              )}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default MortgageCalculator;