import { useEffect } from "react";
import "./App.css";
import { useToolbar } from "./toolbar";

function App() {
  const [domRef, toolbarRef] = useToolbar();

  useEffect(() => {
    console.log("init", toolbarRef);
  }, []);

  return (
    <div className="App">
      {/* <Toolbar /> */}
      <div ref={domRef}></div>
    </div>
  );
}

export default App;
