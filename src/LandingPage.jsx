import React from "react";
import { Container } from "react-bootstrap";
import { AboutUsSection } from "./Components/AboutUsSection";
import { Blog } from "./Components/Blog";
import { ClientsSection } from "./Components/ClientsSection";
import { ContactUs } from "./Components/ContactUs";
import { FeaturesSection } from "./Components/FeaturesSection";
import { Footer } from "./Components/Footer";
import { HeroSection } from "./Components/HeroSection";
import { NavBar } from "./Components/NavBar";
import { ProductsSection } from "./Components/ProductsSection";
import { Support } from "./Components/Support";

export const LandingPage = () => {
	return (
		<>
			<Container className='g-0' fluid>
				<NavBar />
				<HeroSection />
				<ClientsSection />
				<AboutUsSection />
				<ProductsSection />
				<FeaturesSection />
				<Support />
				<Blog />
				<ContactUs />
				<Footer />
			</Container>
		</>
	);
};
