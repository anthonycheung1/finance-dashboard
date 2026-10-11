export type ETF = {
  id: number;
  ticker: string;
  name: string;
  units: number;
  currentPrice: number;
  averagePurchasePrice: number;
};

export type Property = {
  id: number;
  name: string;
  suburb: string;
  currentValue: number;
  mortgageBalance: number;
  interestRate: number;
  offsetBalance: number;
  weeklyRentalIncome: number;
  annualExpenses: number;
};

export type CashAccount = {
  id: number;
  accountName: string;
  balance: number;
};

export type SuperAccount = {
  id: number;
  fundName: string;
  investmentOption: string;
  balance: number;
};

export type AmortisationEntry = {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
};

export type PropertyEquityProjection = {
  year: number;
  propertyValue: number;
  projectedMortgageBalance: number;
  equity: number;
};

export type NetWorthHistory = {
  date: Date;
  netWorth: number;
};