import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import useDarkMode from "./hooks/useDarkMode";

import "./styles.scss";

const App = () => {
	const [coinData, setCoinData] = useState([]);
	const [darkMode, setDarkMode] = useDarkMode(false);

	useEffect(() => {
		axios
			.get(
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
			)
			.then(res => setCoinData(res.data))
			.catch(err => console.log(err));
	}, []);

	return (
		<Router>
			<div className={darkMode ? "dark-mode App" : "App"}>
				<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
				<Route path="/overview">
					<Charts coinData={coinData} />
				</Route>
				<Route exact path="/">
					<Redirect to="/overview" />
				</Route>
			</div>

		</Router>
	);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
