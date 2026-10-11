import type {
  ETF,
  Property,
  CashAccount,
  SuperAccount,
  AmortisationEntry,
  PropertyEquityProjection
} from '../types/finance';

/* ---------- ETFs ---------- */

export function getETFCurrentValue(etf: ETF): number {
  return etf.units * etf.currentPrice;
}

export function getETFTotalCost(etf: ETF): number {
  return etf.units * etf.averagePurchasePrice;
}

export function getETFDollarGainLoss(etf: ETF): number {
  return getETFCurrentValue(etf) - getETFTotalCost(etf);
}

export function getETFPercentageGainLoss(etf: ETF): number {
  return getETFDollarGainLoss(etf) / getETFTotalCost(etf) * 100;
}

export function getETFTotalValue(etfs: ETF[]): number {
  let ETFtotalValue = 0;

  for (const etf of etfs) {
    ETFtotalValue = ETFtotalValue + getETFCurrentValue(etf);
  }

  return ETFtotalValue;
}

/* ---------- Properties ---------- */

export function getPropertyEquity(property: Property): number {
  return property.currentValue - property.mortgageBalance;
}

export function getPropertyLVR(property: Property): number {
  return property.mortgageBalance / property.currentValue * 100;
}

export function getPropertyAnnualRentalIncome(property: Property): number {
  return property.weeklyRentalIncome * 52;
}

export function getPropertyAnnualInterest(property: Property): number {
  const interestBearingBalance =
    property.mortgageBalance - property.offsetBalance;

  if (interestBearingBalance > 0) {
    return interestBearingBalance * property.interestRate / 100;
  } else {
    return 0;
  }
}

export function getPropertyCashFlow(property: Property): number {
  return (
    getPropertyAnnualRentalIncome(property) -
    getPropertyAnnualInterest(property) -
    property.annualExpenses
  );
}

export function getTotalPropertyEquity(properties: Property[]): number {
  let totalPropertyEquity = 0;

  for (const someProperty of properties) {
    totalPropertyEquity =
      totalPropertyEquity + getPropertyEquity(someProperty);
  }

  return totalPropertyEquity;
}

export function getTotalPropertyMortgage(properties: Property[]): number {
  let totalPropertyMortgage = 0;

  for (const someProperty of properties) {
    totalPropertyMortgage =
      totalPropertyMortgage + someProperty.mortgageBalance;
  }

  return totalPropertyMortgage;
}

export function getTotalPropertyCashFlow(properties: Property[]): number {
  let totalPropertyCashFlow = 0;

  for (const someProperty of properties) {
    totalPropertyCashFlow =
      totalPropertyCashFlow + getPropertyCashFlow(someProperty);
  }

  return totalPropertyCashFlow;
}

/* ---------- Mortgages ---------- */

export function getMonthlyMortgagePayment(
  principal: number,
  annualInterestRate: number,
  termYears: number
): number {
  const monthlyInterestRate =
    annualInterestRate / 100 / 12;

  const numberOfPayments =
    termYears * 12;

  if (monthlyInterestRate === 0) {
    return principal / numberOfPayments;
  }

  return (
    principal *
    (
      monthlyInterestRate *
      Math.pow(
        1 + monthlyInterestRate,
        numberOfPayments
      )
    ) /
    (
      Math.pow(
        1 + monthlyInterestRate,
        numberOfPayments
      ) - 1
    )
  );
}

export function getMortgageAmortisationSchedule(
  principal: number,
  annualInterestRate: number,
  termYears: number
): AmortisationEntry[] {
  const monthlyInterestRate =
    annualInterestRate / 100 / 12;

  const numberOfPayments =
    termYears * 12;

  const monthlyPayment =
    getMonthlyMortgagePayment(
      principal,
      annualInterestRate,
      termYears
    );

  let balance = principal;

  const schedule: AmortisationEntry[] = [];

  for (
    let month = 1;
    month <= numberOfPayments;
    month++
  ) {
    const interest =
      balance * monthlyInterestRate;

    let principalPaid =
      monthlyPayment - interest;

    if (principalPaid > balance) {
      principalPaid = balance;
    }

    balance =
      balance - principalPaid;

    schedule.push({
      month,
      payment: principalPaid + interest,
      principal: principalPaid,
      interest,
      balance
    });
  }

  return schedule;
}

export function getPropertyEquityProjections(
  property: Property,
  loanAmount: number,
  annualInterestRate: number,
  loanTermYears: number
): PropertyEquityProjection[] {
  const mortgageSchedule =
    getMortgageAmortisationSchedule(
      loanAmount,
      annualInterestRate,
      loanTermYears
    );

  const propertyEquityProjections: PropertyEquityProjection[] = [];
  let projectedEquity: number;
  let projectedMortgageBalance: number;

  for (
    let theYear = 0;
    theYear <= loanTermYears;
    theYear++
  ) {
    if (theYear === 0) {
      projectedMortgageBalance =
        property.mortgageBalance;
    } else {
      projectedMortgageBalance =
        mortgageSchedule[
          theYear * 12 - 1
        ].balance;
    }

    projectedEquity =
      property.currentValue -
      projectedMortgageBalance;

    propertyEquityProjections.push({
      year: theYear,
      propertyValue: property.currentValue,
      projectedMortgageBalance,
      equity: projectedEquity
    });
  }

  return propertyEquityProjections;
}

/* ---------- Superannuation ---------- */

export function getTotalSuperannuationBalance(
  superAccounts: SuperAccount[]
): number {
  let totalSuperannuationBalance = 0;

  for (const superAccount of superAccounts) {
    totalSuperannuationBalance =
      totalSuperannuationBalance +
      superAccount.balance;
  }

  return totalSuperannuationBalance;
}

/* ---------- Cash ---------- */

export function getTotalCash(
  cashAccounts: CashAccount[]
): number {
  let totalCash = 0;

  for (const cashAccount of cashAccounts) {
    totalCash =
      totalCash + cashAccount.balance;
  }

  return totalCash;
}

/* ---------- Net Worth ---------- */

export function getNetWorth(
  etfs: ETF[],
  properties: Property[],
  superAccounts: SuperAccount[],
  cashAccounts: CashAccount[]
): number {
  return (
    getETFTotalValue(etfs) +
    getTotalPropertyEquity(properties) +
    getTotalSuperannuationBalance(superAccounts) +
    getTotalCash(cashAccounts)
  );
}