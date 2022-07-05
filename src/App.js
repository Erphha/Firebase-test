import AccountBox from "./components/signBox/SignBox";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const dark = useSelector((state) => state.dark);
  return (
    <div className="AppContainer" id={dark ? "darkMode" : "lightMode"}>
      <AccountBox />
    </div>
  );
}

export default App;
