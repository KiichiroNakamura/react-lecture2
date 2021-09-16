import { useState } from "react";
import "./styles.css";

export default function App() {
  const [num, setNum] = useState(0);
  const countUp = () => {
    //alert();
    setNum(num + 1);
  };

  return (
    <div className="App">
      <input />
      <br />
      <br />
      <br />
      <button>表示</button>
    </div>
  );
}
