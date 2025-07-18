import React, {useState } from 'react';

const Update = (props) => {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return (
    <article>
      <h2>Update</h2>
      {/* submit의 기본 이벤트 기능을 중지 */}
      <form onSubmit={(event)=>{
        event.preventDefault();
        // submit 이벤트 발생시에 입력된 데이터 추출
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body); //onUpdate는 인수 2개가 필요함 - 입력된 값 title과 body
      }}>
        <p>
          <input type="text" name="title" placeholder="Title" value={title} onChange={(event) => {
            setTitle(event.target.value);
          }} />
        </p>
        <p>
          <textarea name="body" placeholder="Body" value={body} onChange={(event) => {
            setBody(event.target.value);
          }}></textarea>
        </p>
        <p>
          <button type="submit" value="Update">Update</button>
        </p>
        {/* value값은 특정값으로 고정한 상태 inputbox 수정 안됨 state 이용해서 관리 */}
        {/* <p>
          <input type="text" name="title" placeholder="Title" value={props.title} />
        </p>
        <p>
          <textarea name="body" placeholder="Body" value={props.body}></textarea>
        </p>
        <p>
          <button type="submit" value="Update">Update</button>
        </p> */}
      </form>
    </article>
  );
};

export default Update;