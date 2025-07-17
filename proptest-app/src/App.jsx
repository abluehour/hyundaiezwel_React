import "./App.css";
import Subject from "@/components/Subject.jsx";
import Nav2 from "@/components/Nav2.jsx";
import Student from "@/components/Student.jsx";
import imgblack from "@/img/black.png"; // 이미지 경로 예시


function Header(props) {
  //컴포넌트에 매개변수 설정함녀 컴포넌트를 사용하는 쪽에서 속성으로 전달된 객체를 받을 수 있음
  console.log(props);
  console.log(props.title);
  return (
    <header>
      <h1>
        <a href="/">React.tile</a>
        <br />
        <a href="/">{props.title}</a>
      </h1>
    </header>
  );
}

function Nav() {
  //nav 컴포넌트 생성
  return (
    <nav>
      <ol>
        <li>
          <a href="">html</a>
        </li>
        <li>
          <a href="">css</a>
        </li>
        <li>
          <a href="">js</a>
        </li>
      </ol>
    </nav>
  );
}

function Article() {
  //article 컴포넌트 생성
  return (
    <article>
      <h2>welcome</h2>
      hello, web
    </article>
  );
}

function App() {
  const title = "props연습";
  let content = "내용";
  const topics = [
    { id: 1, title: "HTML", sub: "HTML은 웹의 뼈대입니다." },
    { id: 2, title: "CSS", sub: "CSS는 웹의 스타일입니다." },
    { id: 3, title: "JavaScript", sub: "JavaScript는 웹의 동적 기능을 담당합니다." },
  ];
  
  const student = {
    name: "홍길동",
    age: 20,
    address: "서울",
    year: 4,
  };

  return (
    <div className="App">
      <Header title="리액트" /> {/* 컴포넌트 추가, 사용자 정의 태그 추가 */}
      <Nav />
      <Article />
      <Subject title={title} sub="부제목" content={content} />
      <Subject />
      <Nav2 topics={topics} />
      <Student
        name={student.name}
        age={student.age}
        address={student.address}
        year={student.year}
      />
      <img src={imgblack} alt="black" width={100} height={100} style={{ margin: "10px" }} />
      <img src="../assets/img/apple.png" alt="apple" width={100} height={100} style={{ margin: "10px" }} />
    </div>
  );  
}

export default App;
