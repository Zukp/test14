import ExpensesForm from "./ExpensesForm";
const NewExpenses = (props) => {
  const dataWidhtHandler = (date) => {
    const dateWith = {
      ...date,
      id: Math.random().toString(),
    };
    props.onDateHandler(dateWith);
  };

  return (
    <div>
      <ExpensesForm onDateWith={dataWidhtHandler} />
    </div>
  );
};
export default NewExpenses;
