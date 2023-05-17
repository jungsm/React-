import "./NewLecture.css"
import Lectureform from "./Lectureform"
const NewLecture =(props) => {
    const saveExpenseFn= (data) => {
        const expenseData={...data, id:Math.random().toString()}
        props.onAddExpense(expenseData)
      }

    return (
      <>
      <Lectureform onSaveExpense={saveExpenseFn}  />
      </>
    );
  }
  
  export default NewLecture;
  