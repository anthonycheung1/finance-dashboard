/*

const number = 123456.789;

console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number,
  ),
);
// Expected output: "123.456,79 €"

// The Japanese yen doesn't use a minor unit
console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    number,
  ),
);
// Expected output: "￥123,457"

// Limit to three significant digits
console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number,
  ),
);
// Expected output: "1,23,000"

*/

export function formatCurrency(amount: number): string {
  const formatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  });
  return formatter.format(amount);
}

export function formatPercentage(amount: number): string {
  const formatter = new Intl.NumberFormat('en-AU', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  // amount is stored as a decimal number (e.g. 6.09 actually means 6.09%), so convert it to a decimal (0.0609) for Intl.NumberFormat to convert into a percentage
  return formatter.format(amount / 100);
}

export function formatNumber(amount: number): string {
  const formatter = new Intl.NumberFormat('en-AU');
  return formatter.format(amount);
}