import React, { useState } from 'react';

const InputEvent = () => {
  const [title, setTitle] = useState('지금 우리 학교는');
  const [inputValue, setInputValue] = useState('');

  //글자 입력시마다 inputValue 상태 변수에 입력된 값 저장
  const onInputChange = (e) => {
    setInputValue(e.target.value); // input 태그에 입력된 값을 상태 변수 inputValue에 저장
  }


  return (
    <div> 
      <hr />
      <h2>{title}</h2>
      <input /* input 태그에 값 입력하면 onChange 이벤트 발생
                입력된 값 : event.target.value */
        type="text"
        value={inputValue}
        onChange={onInputChange}
      /> &nbsp;
      {/* inputValue의 값이 변경되면 setTitle 함수가 실행되어 title 상태 변수가 변경됨 */}
      {/* inputValue의 값이 변경되면 화면에 표현된 제목이 변경됨 */}
      <button onClick={() => setTitle(inputValue)}>제목 변경</button>
    </div>
  );
};  

export default InputEvent;
