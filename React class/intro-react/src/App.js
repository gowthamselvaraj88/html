import logo from './logo.svg';
import './App.css';
import Functioncom from './component/Functioncom';
import Funchook from './component/Funchook';

function App() {
  const value=["goal","dream","target"];
  return (
  <div>
    <Functioncom exterData="jvavaScript" exData1={value} />
    <Funchook />
    </div>
  );
}

export default App;
