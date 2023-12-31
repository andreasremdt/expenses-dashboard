import type { Expense } from "@/types";

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(value / 100);
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("de-DE").format(new Date(value));
}

export function filterExpenses(expenses: Expense[], filter: string) {
  let lowerCaseFilter = filter.toLowerCase();

  return expenses.filter(({ title, category, value }) => {
    return (
      title.toLowerCase().includes(lowerCaseFilter) ||
      category.toLowerCase().includes(lowerCaseFilter) ||
      String(value).toLowerCase().includes(lowerCaseFilter)
    );
  });
}

export function groupExpenses(expenses: Expense[]) {
  let grouped = new Map<string, Expense[]>();

  for (let expense of expenses) {
    let created = expense.created.slice(0, 10);

    if (grouped.has(created)) {
      let previous = grouped.get(created) as Expense[];

      grouped.set(created, [...previous, expense]);
    } else {
      grouped.set(created, [expense]);
    }
  }

  return grouped;
}
