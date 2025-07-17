
import './App.css';
import { useState } from 'react';
{/* useState(): 상태관리 사용
    1. import { useState } from 'react'; 
    2. asd*/}


function Header(props) {
  console.log('props', props.title)
  return (
    <header>
      <h1><a href="/" onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  )
}
function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a>
    </li>);
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}



function App() {
  //let mode = 'WELCOME'; // 상태 변수 선언
  //const _mode = useState('WELCOME'); // useState를 사용하여 상태 변수 선언
  //let mode = _mode[0]; // 상태 변수의 현재 값
  //let setMode = _mode[1]; // 상태 변수의 값을 변경하는 함수
  // 위의 두 줄을 아래와 같이 배열 구조분해할당으로 간단

  const [mode, setMode] = useState('WELCOME'); // useState를 사용하여 mode 상태 변수 선언

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  let content = null;
  if(mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, Web"></Article>;
  } else if(mode === 'html') {
    content = <Article title="html" body="This is HTML content"></Article>;
  } else if(mode === 'css') {
    content = <Article title="css" body="This is CSS content"></Article>;
  } else if(mode === 'javascript') {
    content = <Article title="javascript" body="This is JavaScript content"></Article>;
  }
  return (
    <div className="App">
      {/* 컴포넌트의 클릭 이벤트에 의해 mode 변수의 값으 변경 됨
      content가 반영되려면 APP 컴포넌트가 다시 랜더링 되어야 함
      mode값을 바꾸면 APP을 호출(랜더링) 되어야 함 
      변수의 변화나 상태 변화가 생길 때 APP호출(랜더링) 진행 할 수 있도록
      state(내부에서 변경될 수 있는 값, 값이 변경 되면 재랜더링이 진행됨) 기능 제공*/}
      <Header title="WEB" onChangeMode={()=>{
        //mode = 'WELCOME';
        setMode('WELCOME'); // 상태 변경 함수 호출
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        if(id == 1)setMode('html'); // 상태 변경 함수 호출
        else if(id == 2)setMode('css'); // 상태 변경 함수 호출
        else if(id == 3)setMode('javascript'); // 상태 변경 함수 호출
      }}></Nav>
      {content}
    </div>
  );
}
export default App;