import { Container } from "react-bootstrap";
import { AboutUs, Blog, Clients, ContactUs, DemoButton, Features, Footer, Hero, NavBar, Products, Support } from "./Components";

export const LandingPage = () => {
	return (
		<>
			<NavBar />

			<Container className='g-0' fluid>
				<div className='extended-background icons-background'>
					<Hero />
					{/* <Clients /> */}
				</div>

				<AboutUs />
				<Products />
				<Features />
				<Support />
				<Blog />
				<ContactUs />
				<DemoButton />
				<Footer />
			</Container>
		</>
	);
};
