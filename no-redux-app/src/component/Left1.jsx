import React from 'react';
import Left2 from './Left2';


const Left1 = (props) => {
  return (
    <div>
      <div>
        <h3>Left1 Component</h3>
        <Left2 count={props.count} />
      </div>
    </div>
  );
};

export default Left1;