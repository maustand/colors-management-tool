import { Outlet } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <div className="container pt-4">
        <Outlet />
      </div>
    </>
  );
}

export default App;
