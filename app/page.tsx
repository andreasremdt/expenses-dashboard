"use client";

import { useState } from "react";
import Button from "@/components/button";
import Dialog from "@/components/dialog";
import Table from "@/components/table";
import Input from "@/components/input";
import Label from "@/components/label";
import InputGroup from "@/components/input-group";
import expenses from "@/data.json";
import RadioButton from "@/components/radio-button";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Table title="My Expenses" expenses={expenses}>
        <Button onClick={() => setOpen(true)}>Add Expense</Button>
      </Table>

      <Dialog open={open} onClose={() => setOpen(false)} title="Add Expense">
        <InputGroup>
          <Label htmlFor="title">Title</Label>
          <Input type="text" id="title" name="title" placeholder="Groceries" required autoFocus />
        </InputGroup>
        <div className="flex gap-x-2">
          <InputGroup className="w-1/2">
            <Label htmlFor="value">Value</Label>
            <Input type="number" id="value" name="value" placeholder="9.99" required />
          </InputGroup>
          <InputGroup className="w-1/2">
            <Label htmlFor="created">Date</Label>
            <Input
              type="date"
              id="created"
              name="created"
              required
              defaultValue={new Date().toISOString().slice(0, 10)}
            />
          </InputGroup>
        </div>
        <InputGroup>
          <Label htmlFor="category">Category</Label>
          <Input type="text" id="category" name="category" />
        </InputGroup>
        <div className="flex gap-x-2">
          <RadioButton name="type" value="expense" className="w-1/2" defaultChecked>
            Expense
          </RadioButton>
          <RadioButton name="type" value="income" className="w-1/2">
            Income
          </RadioButton>
        </div>
      </Dialog>
    </>
  );
}
