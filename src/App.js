import './App.css';
import Sidebar from './component/sidebar';
import Landing from './component/landing';
import Typer from './component/typer';
import Score from './component/score';
import { useEffect, useState } from 'react';

function App() {

 var [result, setresult] = useState(0);
 var [accuracy, setAccuracy] = useState("0%");
  return (
    <div className="App">
      <section className="landing-screen">
        <div className="landing-left">
          <Landing />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </section>
      <section className="typer">
        <Typer setResultFunc={setresult} setAccuracyFunc={setAccuracy}/>
      </section>
      <section className="score">
        <Score score={result} accu={accuracy}/>
      </section>
    </div>
  );
}

export default App;
