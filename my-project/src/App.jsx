import { useState } from "react";
import { Homepage } from "./pages/homepage";
import "../src/output.css";
import { About } from "./component/about";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
