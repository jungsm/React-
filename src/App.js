import './App.css';
import Lectures from "./components/Lectures"
import NewLecture from "./components/NewLecture/NewLecture"
function App() {
  const addExpenseFn = (data) => {
    console.log("NewExpense",data);
  }
  const  Lecture = [
    {id:"e1",number:"1",title:"리액트 교과서: 기본기에 충실한 리액트 입문서!",amount:"14000"},
    {id:"e2",number:"2",title:"혼자 공부하는 자바스크립트",amount:"18000"},
    {id:"e3",number:"3",title:"Do it! 타입스크립트 프로그래밍",amount:"32000"},
    {id:"e4",number:"4",title:"스마트한 생활을 위한 버전2: HTML 기초&활용 HTML5+CSS3",amount:"6000"},
    {id:"e5",number:"5",title:"Do it! HTML+CSS+자바스크립트 웹 표준의 정석: ",amount:"14000"},

  ]
  return (
    <>
      <NewLecture onAddExpense={addExpenseFn}  />
      <Lectures itmes={Lecture} />
    </>
  );
}

export default App;
