import "./Lectureform.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  console.log(props)
  const [inputTitle,setInputTitle]= useState("");
  const [inputNum,setInputNum]= useState("");
  const [inputDate,setInputDate]= useState("");
  const titleChangeFn = (e) => {
    setInputTitle(e.target.value);
  }
  const numChangeFn = (e) => {
    setInputNum(e.target.value)
  }
const dataChangeFn = (e) => {
  setInputDate(e.target.value)
};
const submitFn =(e) => {
  e.prevenDefault();
  const expenseData = { title : inputTitle, num : inputNum, date: inputDate};
  setInputTitle('');
  setInputNum('');
  setInputDate('');
  props.onSaveExpense(expenseData)
  console.log(props.onSaveExpense)
}
  return (
    <>
    <div className="container flex">
      <form onSubmit={submitFn}>
      <h1>지출내역 입력</h1>
        <div className="new-lecture__control">
          <label htmlFor="">제목</label>
          <input value={inputTitle} type="text" onChange={titleChangeFn} />
        </div>
        <div className="new-lecture__control">
          <label htmlFor="">금액</label>
          <input value={inputNum} onChange={numChangeFn} type="text" />
        </div>
        <div className="new-lecture__control">
          <label htmlFor="">날짜</label>
          <input value={inputDate} onChange={dataChangeFn} type="date" min="1999-01-01" max="2023-12-31" />
        </div>
        <div  className="new-lecture__action"><button className="new-lecture__button"type="submit">등록하기</button></div>
      </form>
    </div>
    </>
  );
}

export default ExpenseForm;
