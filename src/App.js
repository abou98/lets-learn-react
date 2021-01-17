
import './App.css';
import { useState } from 'react';
import Button from './Button.js';

function App() {
  const  [color, setColor] = useState('red');
  return (
    <div className="App">
      <header className="App-header">
        <h1> Lets Try React ... </h1> 
      </header>
      <div className={`App-main`}
      style = {{
        backgroundColor: color
      }}
      >
        <div>
        <Button color="red" setColor = {setColor}/>
        <Button color="blue" setColor = {setColor}/>
        <Button color="yellow" setColor = {setColor}/>
        </div>
       
      </div>
    </div>
  );
}

export default App;
