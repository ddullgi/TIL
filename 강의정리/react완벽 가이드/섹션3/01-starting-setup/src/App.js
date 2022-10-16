import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: "e1", title: "둘기", amount: 294.67, date: new Date(2022, 6, 15) },
  { id: "e2", title: "에몽", amount: 20, date: new Date(2022, 6, 22) },
  { id: "e3", title: "코코", amount: 30, date: new Date(2022, 6, 24) },
  { id: "e4", title: "사슴", amount: 40, date: new Date(2022, 7, 2) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
