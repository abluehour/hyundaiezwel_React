
import './App.css'
import Left1 from './component/Left1.jsx'
import Right1 from './component/Right1.jsx'
import { useState } from 'react'
function App() {

  let[count, setCount] = useState(0)

  //+버튼 이벤트 처리 함수
  const handelPlus = () => {
    setCount(count + 1)
  }

  //-버튼 이벤트 처리 함수
  const handleMinus = () => {
    setCount(count > 0 ? count - 1 : count)
  }

  return (
    <div className="app">
      <h3>Root</h3>
      <div id ="container">
        <Left1 count={count} handlePlus={handelPlus} handleMinus={handleMinus} />
        <Right1 count={count} handlePlus={handelPlus} handleMinus={handleMinus} />
      </div>
    </div>
  )
}

export default App
