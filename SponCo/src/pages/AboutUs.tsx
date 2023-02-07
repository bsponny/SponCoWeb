import profile from "../images/headerlogo.png"

export const AboutUs = () => {
	return(
		<div>
			<div className="main">
				<h1>About Us</h1>
				<h2>Meet The Team</h2>
				<div>
					<h3>Nate Sponenburgh</h3>
					<img src={profile} className="profile" />
					<p>Nate Sponenburgh earned his Masters of Accounting degree in 1999 from Utah State University. He has worked for public accounting firms like Price Waterhouse Coopers, LECG Inc., and Shaw Mumford &amp; Company. He also worked as a Chief Financial Officer for an auto dealership group in Southwest Wyoming before starting his public accounting firm, Sponenburgh &amp; Co.</p>
					<p className="textlink">We assure you that all the discussions you have with us are kept confidential, ensuring your financial privacy, which is our number one priority. We serve southwest Wyoming and Northern Utah. Call us to schedule an appointment today at <a href="tel:+1-307-444-4272">(307)444-4272</a>.</p>
				</div>
			</div>
		</div>
	);
}
