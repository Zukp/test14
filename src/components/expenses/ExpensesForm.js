import { useState } from "react";

const ExpensesForm = (props) => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };
  const numberChangeHandler = (event) => {
    setNumber(event.target.value);
  };
  const dateChangHandler = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    let object = {
      title: text,
      price: number,
      date: new Date(date),
    };
    props.onDateWith(object)
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input type="text" onChange={textChangeHandler} />
        </div>
        <div>
          <input type="number" onChange={numberChangeHandler} />
        </div>
        <div>
          <input type="date" onChange={dateChangHandler} />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
};

export default ExpensesForm;
