import React from "react";

const Create = (props) => {
  return (
    <article>
      <h2>Create</h2>
      {/* submit의 기본 이벤트 기능을 중지 */}
      <form onSubmit={(event)=>{
        event.preventDefault();
        // submit 이벤트 발생시에 입력된 데이터 추출
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body); //onCreate는 인수 2개가 필요함 - 입력된 값 title과 body
      }}>
        <p>
          <input type="text" name="title" placeholder="Title" />
        </p>
        <p>
          <textarea name="body" placeholder="Body"></textarea>
        </p>
        <p>
          <button type="submit" value="Create">Create</button>
        </p>
      </form>
    </article>
  );
};

export default Create;