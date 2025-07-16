import "./App.css";
import Subject from "./component/Subject.jsx";
import Content from "./component/Content.jsx";
import Nav2 from "./component/Nav2.jsx";
import "./App.css";

function Header() {
  //header 컴포넌트 생성했으므로 다은 컴포넌트에서 사용 가능, 함수 이름 대문자로 시작
  return (
    <header>
      <h1>
        <a href="/">React</a>
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
  return (
    <div className="App">
      <Header /> {/* 컴포넌트 추가, 사용자 정의 태그 추가 */}
      <Header /> {/* 일반 html 태그 사용(맨 앞이 소문자면) */}
      <Header />
      <Nav />
      <Article />
      <Subject />
      <Content />
      <Nav2 />
    </div>
  );
}

export default App;
