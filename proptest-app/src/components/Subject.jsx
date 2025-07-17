import React, { Component } from 'react';

// const Subject = ({ titles, sub }) => { //{}를 통해 매개변수 설정 titles와 sub를 받음
//   return (
//     <div>
//       <h2>{titles}</h2>
//       <p>{sub}</p>
//     </div>
//   );
// };

const Subject = (props) => {//선택자에서 전달된 속성값을 매개변수 1개로 받으면 object 타입으로 받아짐
 // static defaultProps = {
//   title_default: 'WEb'
// }; 클래스형 가능
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.sub}</p>
      <p>{props.content}</p>
    </div>
  );
};

// Subject.defaultProps = {
//   title_default: 'Web'
// };

export default Subject;