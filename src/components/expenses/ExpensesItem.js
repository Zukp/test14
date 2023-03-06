
const ExpensesItem = (props) => {
  
    return (
        <div>
           {props.data.map((el) => {
               return <div key={el.id}>
                   <h1>{el.date.toString()}</h1>
                   <p>{el.title}</p>
                   <h4>{el.price}</h4>
               </div>
           })}
        </div>
    )
}

export default ExpensesItem