import "./Lectureitem.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [text, setText] = useState('');

  const titleChangeFn = (e) => {
    setText(e.target.value);
  }

  return (
    <>
    <h1>{text}</h1>
    <div className="container flex">
      <form>
        <div className="new-lecture__control">
          <label htmlFor="">제목</label>
          <input type="text" onChange={titleChangeFn} />
        </div>
        <div className="new-lecture__control">
          <label htmlFor="">금액</label>
          <input type="text" />
        </div>
        <div className="new-lecture__control">
          <label htmlFor="">날짜</label>
          <input type="date" min="1999-01-01" max="2023-12-31" />
        </div>
        <div className="new-lecture__action"><button class="new-lecture__button"type="submit">등록하기</button></div>
      </form>
    </div>
    </>
  );
}

export default ExpenseForm;
