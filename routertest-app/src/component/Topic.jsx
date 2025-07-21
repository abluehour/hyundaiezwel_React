import React from 'react';
import {useParams}  from 'react-router-dom';

const Topic = (props) => {
  console.log(props.content);
  let content = props.content;
  let params = useParams();
  console.log(params);
  let topic_id = params.topic_id;
  // topic_id에 해당되는 데이터를 content에서 찾는 작업을 진행
  // potic_id에 해당되는 데이터가 없으면 기본값으로 출력
  let select_topic = {
    title:'sorry',
    description:'not found',
  }

  // for(let i=0; i<content.length; i++){
  //   if(content[i].id === parseInt(topic_id)){
  //     select_topic = content[i];
  //     break;
  //   }
  // }
  select_topic = content.find((item) => item.id === parseInt(topic_id)) || select_topic;
  return (
    <div>
      <h3>{select_topic.title}</h3>
      <p>{select_topic.description}</p>
    </div>
  );
};

export default Topic;