import React from 'react';

const reducer = (currentState, action) => {
      //currentState가 정의되니 않은 경우 기본 state를 반환
      if(!currentState) {
        return {
          count: 0,
          text: 'Hello Redux',
        };
      }

      //각 state의 불변성 유지하기 위해 state 복제해서 사용
      const newState = { ...currentState };

      ////////////////////////////////////////////
      // 여기서 state를 변경하는 로직을 작성합니다.

      ///////////////////////////////////////////
      //반환시킨 값을 반환
      return newState; // 반환된 값이 새로운 state가 됩니다.
};

export default reducer;