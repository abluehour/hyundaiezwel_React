import React from "react";

const Nav2 = (props) => {
  const list_topics = [];

  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    list_topics.push(
      <li key={t.id}>
        <a href={"/read/" + t.id}>{t.title}</a>
        <p>{t.sub}</p>
      </li>
    );
  }

  return (
    <nav>
      <ol style={{ listStyleType: "none", padding: 0 }}>{list_topics}</ol>
    </nav>
  );
};

export default Nav2;
