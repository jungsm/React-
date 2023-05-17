import React from "react";
import "./Lectureitem.css";
import Card from "./UI/Card"
const Lectureitem = (props) => {
  return (
    <Card className="lecture-item">
       <div className="lecture-itme__number">{props.number}</div>
      <h4 className="lecture-itme__title">{props.title}</h4>
      <div className="lecture-itme__amount">{props.amount}</div>
    </Card>
  );
}

export default Lectureitem;
