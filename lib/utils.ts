export function formatCurrency(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(value / 100);
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("de-DE").format(new Date(value));
}
