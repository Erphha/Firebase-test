// import AccountBox from "./components/signBox/SignBox";
import Home from './pages/Home';
import Register from './pages/Register';
import { BrowserRouter, Switch , Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Navbar from './components/UI/Navbar';

function App() {
	const dark = useSelector((state) => state.dark);
	return (
		<div className="AppContainer" id={dark ? "darkMode" : "lightMode"}>
			<BrowserRouter>
				<Navbar/>
				<Switch>
					<Route exact path="/register" component={Register} />
					<Route exact path="/" component={Home} />
				</Switch>
			</BrowserRouter>
			{/* <AccountBox /> */}
		</div>
	);
}

export default App;
