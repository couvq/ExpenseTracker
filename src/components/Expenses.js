import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "./Card";
import "./Expenses.css";
import { useState } from "react/cjs/react.development";

function Expenses(props) {
  // This component is responsible for rendering all of our expense items from the expenses array, takes expenses array as prop

  const [yearState, changeYearState] = useState("2020");

  const onSelectYearHandler = (year) => {
    changeYearState(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === yearState;
  }); // returns expenses where if expense year === filtered year selected, false otherwise

  let expensesContent = <p>No Expenses Found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearState}
          onSelectYear={onSelectYearHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
