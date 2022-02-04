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
    console.log(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearState}
          onSelectYear={onSelectYearHandler}
        />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
