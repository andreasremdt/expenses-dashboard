import Button from "@/components/button";
import Table from "@/components/table";
import expenses from "@/data.json";

export default function Page() {
  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="text-3xl text-gray-900 font-bold mb-6">Expenses</h1>
        <Button>Add Expense</Button>
      </header>

      <Table expenses={expenses} />
    </>
  );
}
