import {useState} from "react"
import office from "./../images/office.png"
import {Navbar} from "../components/Navbar"

export const Home = () => {
	return (
		<div>
			<div className="main">
				<h1>Sponenburgh &amp; Co</h1>
				<img src={office} className="building" />
				<p className="textlink">Located at <a href="https://goo.gl/maps/2LSRLW2X8kCbhDu98">318 9th St</a> in Evanston, WY!
				Or give us a call at <a href="tel:+1-307-444-4272">(307)444-4272</a></p>
			</div>

			<div className="main">
				<h2>Expert Financial Services</h2>
				<p>What sets Sponenburgh &amp; Co apart from other expert financial service firms? We listen carefully and take the time to understand your complete financial picture. Then we scrutinize and compare your assets and liabilities, weigh your expectations against the revenue/income, and we develop a comprehensive plan with all your requirements.</p>
				<p>We are registered CPAs and offer personal and business income tax preparation and planning, personal financial planning, payroll, business and QuickBooks consulting, and full-service bookkeeping.</p>
				<p>Through our approach to financial services we offer, we can help you in realizing your financial dreams.</p>
				<h2>To sum-up our expert guided financial planning process:</h2>
				<p>You Dream –&gt; We Plan –&gt; Sponenburgh Keeps Track –&gt; We Achieve Your Goals!</p>
				<p>At Sponenburgh &amp; Co, we understand that each individual and business is different; as a result, we give equal importance to companies or individuals. Whether you are looking for long-term financial advice or would like an estimated tax refund, we can help.</p>
				<p>We take pride in the fact that we can take the place of a full-time accounting department. As experienced accountants, we help run your business and not just report the numbers after the fact. Call for expert financial services in Southwest Wyoming and Northern Utah.</p>
			</div>
		</div>
	)
}
