import { useEffect } from "react";
import Chart from "./components/Chart";
import TokenInfo from "./components/TokenInfo";

function App() {
  useEffect(() => {
    const app = (window as any).Telegram?.WebApp;
    if (app) {
      app.ready();
    }
  }, []);

  return (
    <div className="grid grid-cols-2 grid-rows-2 h-[100vh] ">
      <div className="col-span-2 row-span-2 ">
        <Chart />
      </div>
      <div className="col-span-2 row-span-3">
        <TokenInfo />
      </div>
    </div>
  );
}

export default App;

