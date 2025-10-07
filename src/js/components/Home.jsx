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
						<Card img="https://plus.unsplash.com/premium_photo-1671489203034-fc619a2de3bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title= "Santiago Benabeu" text="Campo de futbol del madrid"/>
					</div>
					<div className="col">
						<Card img="https://plus.unsplash.com/premium_photo-1671489203034-fc619a2de3bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title= "Mestalla" text="Campo de futbol del valencia"/>
					</div>
					<div className="col">
						<Card img="https://plus.unsplash.com/premium_photo-1671489203034-fc619a2de3bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title= "Camp nou" text="Campo de futbol del Barcelona"/>
					</div>
					<div className="col">
						<Card img="https://plus.unsplash.com/premium_photo-1671489203034-fc619a2de3bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title= "Sanchez pijuan" text="Campo de futbol del sevilla"/>
					</div>
				</div>
			</div>
			<Footer />
			</div>
		</>
	);
};

export default Home;