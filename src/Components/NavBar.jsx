import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
export const NavBar = () => {
	return (
		<section id='nav_bar'>
			<Row className='mx-1 d-flex align-items-center nav-bar-container'>
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
			</Row>
		</section>
	);
};
