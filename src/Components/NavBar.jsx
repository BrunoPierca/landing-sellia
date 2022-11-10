import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
export const NavBar = () => {
	return (
		<Row className='mx-1'>
			<Col>
				<img src='/images/SelliaLogoFooter.png' alt='Sellia logo' height='36.79px' width='120px' />
			</Col>
			<Col>
				<Nav activeKey='/home' className='justify-content-end'>
					<Nav.Item>
						<Nav.Link href='/home'>Sobre Nosotros</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey='link-1'>Productos</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey='link-2'>Blog</Nav.Link>
					</Nav.Item>
				</Nav>
			</Col>
		</Row>
	);
};
