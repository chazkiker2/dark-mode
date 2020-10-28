import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
// import useDarkMode from "../hooks/useDarkMode";

const Nav = styled.nav`

`;

const Navbar = (props) => {
	// const [darkMode, setDarkMode] = useDarkMode(false);
	const { darkMode, setDarkMode } = props;
	const toggleMode = e => {
		e.preventDefault();
		// props.setDarkMode(!props.darkMode);
		setDarkMode(!darkMode);
	};
	return (
		<nav className="navbar">
			<div className="site-title nav-pane">
				<h1>Crypto Tracker</h1>
				<div className="links nav-pane">
					<Link to="/overview">Overview</Link>
					<Link to="/coin">Coin</Link>
				</div>
			</div>
			<div className="dark-mode__toggle nav-pane">
				<div
					onClick={toggleMode}
					className={darkMode ? 'toggle toggled' : 'toggle'}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
