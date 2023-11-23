import Button from "@/components/button";
import Table from "@/components/table";
import expenses from "@/data.json";

export default function Page() {
  return (
    <Table title="Expenses" expenses={expenses}>
      <Button>Add expense</Button>
    </Table>
  );
}
