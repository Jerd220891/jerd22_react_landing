import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<>
			<div className="text-center">
			<Navbar /> 
			<Jumbotron />
			<div className="container">
				<div className="row">
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
			</div>
		</>
	);
};

export default Home;