import Table from "@/components/Table";
import expenses from "@/data.json";

export default function Page() {
  return (
    <>
      <h1 className="text-3xl text-gray-900 font-bold mb-6">Expenses</h1>
      <Table expenses={expenses} />
    </>
  );
}
