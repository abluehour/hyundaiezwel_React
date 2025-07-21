import React from "react";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import Topic from "./Topic.jsx";





const Topics = (props) => {
  let params = useParams();
  console.log(params);
  
  let contents = props.contents;
  const lis = [];
  for (let i = 0; i < contents.length; i++) {
    let t = contents[i];
    lis.push(
      <li key={t.id}>
        {/* NavLink 컴포넌트는 현재 선택된 링크에 대해 스타일을 적용할 수 있음 */}
        <NavLink to={"/topics/" + t.id} className={({ isActive }) => (isActive ? "active" : "")}>
          {t.title}
        </NavLink>
      </li>
    );
  }

  return (
    <div>
      <h2>HeadLine</h2>
      {/* <ul> //정적 태그 - 반드시 3개의 목록이 생성됨 데이터에 따라 다른 목록이 생성되면 안됨
        <li>
          <NavLink to="/topics/1">Topic 1</NavLink>
        </li>
        <li>
          <NavLink to="/topics/2">Topic 2</NavLink>
        </li>
        <li>
          <NavLink to="/topics/3">Topic 3</NavLink>
        </li>
      </ul> */}
      <ul>
        {lis}
      </ul>

      <Routes>
        {/* 이 라우터에서는 App에서 매핑된 /topics는 제외시키고 하위 url만 매칭하면 됨 */}
        {/* <Route path="1" element={<div>Content for Topic 1</div>} />
        <Route path="2" element={<div>Content for Topic 2</div>} />
        <Route path="3" element={<div>Content for Topic 3 </div>} /> */}
        <Route path="/:topic_id" element={<Topic content={contents} />} />
      </Routes>
    </div>
  );
};

export default Topics;
