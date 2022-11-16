import { useState } from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Cross as Hamburger } from "hamburger-react";
export const NavBar = () => {
	const [position, setPosition] = useState({ left: "100%", width: 0 });
	const [isOpen, setOpen] = useState(false);

	const handleMouseEnter = (e) => {
		const paddingX = 16;
		setPosition({ left: e.target.getBoundingClientRect().x - 10, width: e.target.offsetWidth - paddingX });
	};
	const removeStripe = () => {
		setPosition({ left: "100%", width: 0 });
	};

	return (
		<section id='nav_bar'>
			<Navbar expand='md' expanded={isOpen}>
				<Container>
					<Navbar.Brand href='/'>
						<img className='ms-0' src='/images/SelliaLogoFooter.png' alt='Sellia logo' height='36.79px' width='120px' />
					</Navbar.Brand>
					<Hamburger toggled={isOpen} toggle={setOpen} label='Mostrar menu' />

					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link href='#about_us' onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={() => removeStripe()} className='fw-500 '>
								Sobre Nosotros
							</Nav.Link>
							<Nav.Link href='#products' onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={() => removeStripe()} className='fw-500'>
								Productos
							</Nav.Link>
							<Nav.Link href='#blog' onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={() => removeStripe()} className='fw-500'>
								Blog
							</Nav.Link>
							<Nav.Link href='#contact_us' onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={() => removeStripe()} className='fw-500'>
								Contacto
							</Nav.Link>
							<div className='stripe' style={{ left: position.left, width: position.width }} />
						</Nav>
					</Navbar.Collapse>
				</Container>
				{/* <Row className='mx-1 d-flex align-items-center nav-bar-container'>
					<Col>
						<img className='ms-4' src='/images/SelliaLogoFooter.png' alt='Sellia logo' height='36.79px' width='120px' />
					</Col>
					<Col>
						<Nav activeKey='/home' className='justify-content-end'>
							<Nav.Item>
								<Nav.Link href='#about_us' className='fw-500'>
									Sobre Nosotros
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href='#products' className='fw-500'>
									Productos
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href='#blog' className='fw-500'>
									Blog
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href='#contact_us' className='fw-500'>
									Contacto
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
				</Row> */}
			</Navbar>
		</section>
	);
};
