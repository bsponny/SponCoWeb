import { useState } from 'react'
import header from "./images/header.png"
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { Taxes } from './pages/Taxes'
import { Planning } from './pages/Planning'
import { Payroll } from './pages/Payroll'
import { Books } from './pages/Books'

function App() {
	const[pageName, setPageName] = useState("Home");

	return (
		<div>
		<div className="headerdiv">
			<div className="pageheader homeheader">
				<img src={header} className="logo" />
			</div>
			<div className="contactLinks">
				<div><a href="tel:+1-307-444-4272">(307)444-4272</a></div>
				<div><a className="textlink" href="https://goo.gl/maps/2LSRLW2X8kCbhDu98">318 9th St Evanston, WY</a></div>
			</div>
		</div>
		<div className="navdiv">
			<div className="navbar">
				<a onClick={() => setPageName("Home")}>Home</a>
				<a onClick={() => setPageName("AboutUs")}>About Us</a>
				<a onClick={() => setPageName("Taxes")}>Taxes</a>
				<a onClick={() => setPageName("Planning")}>Financial Planning</a>
				<a onClick={() => setPageName("Payroll")}>Payroll</a>
				<a onClick={() => setPageName("Books")}>Bookkeeping</a>
				<a href="https://secure.netlinksolution.com/nextgen/?firm=457525">Portal</a>
			</div>
		</div>
		{pageName === "Home" && <Home />}
		{pageName === "AboutUs" && <AboutUs />}
		{pageName === "Taxes" && <Taxes />}
		{pageName === "Planning" && <Planning />}
		{pageName === "Payroll" && <Payroll />}
		{pageName === "Books" && <Books />}
		</div>
	);
}

export default App
