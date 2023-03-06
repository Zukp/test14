import { useState } from "react";
import ExpensesItem from "./components/expenses/ExpensesItem";
import NewExpenses from "./components/expenses/NewExpenses";
import "./App.css";

const expenses = [
  {
    id: "e1",
    title: "Toiler poper",
    price: "123",
    date: new Date(12, 20, 23),
  },
  {
    id: "e2",
    title: "Toiler poper",
    price: "103",
    date: new Date(12, 28, 23),
  },
];

function App() {

  const [data, setData] = useState(expenses);
  const dateWithHandler = (data) => {
    setData((prev) => {
      return [...prev, data];
    });
  };

  return (
    <div className="App">
      <NewExpenses onDateHandler={dateWithHandler} />
      <ExpensesItem data={data} />
    </div>
  );
}

export default App;
