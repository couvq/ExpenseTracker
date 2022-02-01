import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "./Card";
import './Expenses.css';
import { useState } from "react/cjs/react.development";

function Expenses(props) {
  // This component is responsible for rendering all of our expense items from the expenses array, takes expenses array as prop

  const [yearState, changeYearState] = useState('');

  const onSelectYearHandler = (year) => {
    changeYearState(year);
    console.log(year);
  };

  const expenses = props.expenses; // the expenses array

  return (
    <div>
    <ExpensesFilter onSelectYear={onSelectYearHandler} />
    <Card className="expenses">
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </Card>
    </div>
  );
}


export default Expenses;
