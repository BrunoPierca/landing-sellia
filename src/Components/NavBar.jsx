import React from "react";
import { Nav } from "react-bootstrap";
export const NavBar = () => {
	return (
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
	);
};
