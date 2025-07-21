import "./App.css";
import { useState } from "react";
import Create from "./component/Create";
import Update from "./component/Update";

function Header(props) {
  console.log("props", props.title);
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
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
          id={t.id}
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
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

function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);

  //topics가 값이 변경되면(원소가 추가되면) 표현된 화면의 목록이 변경되어야 함 -> 랜더링이 다시 되어야 함
  //useState를 사용하여 상태 변수 선언
  const [nextId, setNextId] = useState(4); // 다음에 추가할 id를 관리하는 상태 변수
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ]);

  let content = null;
  let contextControl = null;

  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web"></Article>;
  } else if (mode === "READ") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
    // contextControl 객체 변수에 두개의 태그를 담아서 표현
    //JSX 최상위 태그가 반드시 있어여함
    //의미없는 태그를 활용해서 최상위 태그 구성 가능함

    contextControl = (
      <>
        <li>
          <a
            href={"/update/" + id}
            onClick={(event) => {
              event.preventDefault();
              setMode("UPDATE");
            }}>Update
          </a>
        </li>
        <li>
          <a href="#" value="Delete" onClick={(e) => {
              e.preventDefault();
              const newTopics = topics.filter((topic) => topic.id !== id); // 선택된 id를 제외한 새로운 배열 생성
              setTopics(newTopics); // 상태 업데이트
              setMode("WELCOME"); // 삭제 후에 웰컴 모드로 전환
              setId(null); // id 초기화
            }}
          >Delete</a>
        </li>
      </>
    );
  } else if (mode === "CREATE") {
    //create 메뉼르 클릭하면 입력창을 표현(Create 컴포넌트 사용 -> create)
    // Create 컴포넌트의 cteate 버튼을 클릭해서 submit 이벤트가 발생하면 props로 전달된 함수가 실행이 되도록
    // 함수 내용은 입력된 title과 body를 위래서 선언한 topics 배열에 추가하는 내용
    content = (
      <Create
        onCreate={(title, body) => {
          const newTopic = { id: nextId, title, body }; // 새로 추가할 토픽 객체 생성
          const newTopics = [...topics];
          newTopics.push(newTopic); // 새 토픽을 복사본 배열에 추가
          setTopics(newTopics); // 상태 업데이트 (기존 state value객체인 topics하고 setTopics가 전달하고 비교해서 변경된것이 있어야 렌더링을 진행함
          setNextId(nextId + 1); // 다음 ID 증가
          setMode("READ"); // 생성 후에 바로 읽기 모드로 전환
          setId(nextId); // 새로 생성한 토픽의 ID를 id 상태 변수에 저장

          //setTopics(topics); //기존 state value객체인 topics하고 setTopics가 전달하고  비교해서 변경된것이 있어야 렌더링을 진행함
          // 위 코드는 state가 기존 state value 객체인 topics를 전달하고 setTopics가 전달한 객체와 비교해서 변경된것이 있어야 렌더링을 진행함
          //렌더링 진행안됨-> state가 참조하는 원본 배열을 복사해서 복사본을 변경함 -> setTopics에게 복사본 전달 -> 원본과 비교해서 변동이 있으므로 렌더일 진행하고 원본을 변결시킴
          //배열 복제 : [...topics] 또는 topics.slice() 또는 Array.from(topics)

          /* topics.push(newTopic); // topics 배열에 새 토픽 추가
      setTopics([...topics]); // 상태 업데이트 
      setNextId(nextId + 1); // 다음 ID 증가 */
        }}
      ></Create>
    );
  } else if (mode === "UPDATE") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = (
      <Update
        title={title}
        body={body}
        onUpdate={(title, body) => {
          const newTopics = [...topics]; // 기존 topics 배열을 복사
          const updatedTopic = { id: id, title: title, body: body }; // 업데이트된 토픽 객체 생성
          for (let i = 0; i < newTopics.length; i++) {
            if (newTopics[i].id === id) {
              newTopics[i] = updatedTopic; // 해당 ID의 토픽을 업데이트
              break;
            }
          }
          setTopics(newTopics); // 상태 업데이트
          setMode("READ"); // 업데이트 후에 읽기 모드로 전환
        }}
      ></Update>
    );
  }
  return (
    <div className="App">
      <Header
        title="WEB"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode("READ");
          setId(_id);
        }}
      ></Nav>
      {content}
      <ul>
        <li>
          <a
            href="/create"
            onClick={(event) => {
              event.preventDefault();
              setMode("CREATE");
            }}
          >
            Create
          </a>
          &nbsp;
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
