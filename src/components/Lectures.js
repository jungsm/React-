import Lectureitem from "./Lectureitem"
const Lectures = (props) => {
    console.log(props)
  return (
    <div id="wrap">
      <div className='container'>
      <h1>강의</h1>
        <Lectureitem  number={props.itmes[0].number} title={props.itmes[0].title} amount={props.itmes[0].amount}  />
        <Lectureitem  number={props.itmes[1].number} title={props.itmes[1].title} amount={props.itmes[1].amount}  />
        <Lectureitem  number={props.itmes[2].number} title={props.itmes[2].title} amount={props.itmes[2].amount}  />
        <Lectureitem  number={props.itmes[3].number} title={props.itmes[3].title} amount={props.itmes[3].amount}  />
        <Lectureitem  number={props.itmes[4].number} title={props.itmes[4].title} amount={props.itmes[4].amount}  />
       
      </div>
    </div>
  );
}

export default Lectures;
