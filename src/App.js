import React, {useState} from 'react';
import './App.css';


function getColor() {
  const colors = [
    '#248787', '#7c22ab',
    '#387e14',  '#1f1da3',
    '#916b18',  '#04ff00',
    '#bd23d9',  '#17ebd7'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='main_block'>
      <p style={{color: getColor()}}>Вы кликнули {count} раз(а)</p>
      <button onClick={() => setCount(count  + 1)}>click me</button>
    </div>
  )
}





export default App;
