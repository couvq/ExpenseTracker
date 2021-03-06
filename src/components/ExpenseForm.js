import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({ // our state object
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    // get the title the user entered
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput, //copy over userInput Object
    //     enteredTitle: event.target.value // override enteredTitle to new title state
    // }); THIS WAS BAD BC STATE DEPENDS ON PREV STATE
    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle: event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    // get the amount the user entered
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // });
    // setUserInput((prevState) => {
    //     return {...prevState, enteredAmount: event.target.value};
    // });
  };

  const dateChangeHandler = (event) => {
    // get the date the user entered
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // });
    // setUserInput((prevState) => {
    //     return {...prevState, enteredDate: event.target.value};
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);
    // console.log(expenseData);
    setEnteredTitle(''); // clear the title
    setEnteredAmount(''); // clear the amount
    setEnteredDate(''); // clear the date
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
