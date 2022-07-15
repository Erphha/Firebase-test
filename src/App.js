// import AccountBox from "./components/signBox/SignBox";
import Home from "./pages/Home";
import RegisterLogin from "./pages/RegisterLogin";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import AuthProvider from "./context/auth";
import Navbar from "./components/UI/Navbar";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

function App() {
  const dark = useSelector((state) => state.dark);
  return (
    <AuthProvider>
      <div className="AppContainer" id={dark ? "darkMode" : "lightMode"}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/register-login" component={RegisterLogin} />
            <PrivateRoute exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
        {/* <AccountBox /> */}
      </div>
    </AuthProvider>
  );
}

export default App;
