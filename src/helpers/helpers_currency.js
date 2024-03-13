export function formatCurrency(currency) {
  const formatter = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",
  });
  return formatter.format(currency);
}
