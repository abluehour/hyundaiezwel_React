import "./App.css";

function Header(props) {
  console.log("props", props.title);
  return (
    <header>
      {/* a태그에 click 이벤트 추가
          리액트는 태그에 이벤트 핸들러 연결되면 콜백함수가 호출될 때
          event 객체를 첫번째 파라미터로 주입
          */}
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault(); // a태그의 기본 동작인 페이지 이동을 막음
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id} /* 이게 */
          href={"/read/" + t.id}
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode(t.body);
            props.onChangeMode(e.target.id); /* 여기로 호잇~! */
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

const topics = [
  { id: 1, title: "html", body: "html is ..." },
  { id: 2, title: "css", body: "css is ..." },
  { id: 3, title: "javascript", body: "javascript is ..." },
];

function App() {
  return (
    <div className="App">
      <Header
        title="WEB"
        onChangeMode={() => {
          alert("This is header WEB");
        }}
      ></Header>
      <Header
        title="REACT"
        onChangeMode={() => {
          alert("this is header REACT");
        }}
      ></Header>

      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      ></Nav>
      <Article title="Welcome" body="Hello, Web"></Article>
    </div>
  );
}
export default App;
