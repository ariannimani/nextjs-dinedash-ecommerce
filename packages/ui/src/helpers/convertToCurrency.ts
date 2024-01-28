export const convertCurrency = (amount: number, currencyCode = "$") => {
  const formattedAmount = `${currencyCode}${amount}`;
  return formattedAmount;
};
