import { Container } from "react-bootstrap";
import { AboutUs, Blog, Clients, ContactUs, Features, Footer, Hero, NavBar, Products, Support } from "./Components";

export const LandingPage = () => {
	return (
		<>
			<Container className='g-0' fluid>
				<NavBar />
				<Hero />
				<Clients />
				<AboutUs />
				<Products />
				<Features />
				<Support />
				<Blog />
				<ContactUs />
				<Footer />
			</Container>
		</>
	);
};
