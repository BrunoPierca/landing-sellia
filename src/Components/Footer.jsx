import { Col, Row } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
	return (
		<div id='footer' className='extended-background'>
			<section>
				<Row className='mx-3 py-5'>
					<Col sm={4} className='text-center text-lg-start'>
						<img src='./images/SelliaLogoFooter.png' className='img-fluid' width='212px' height='65px' />
						<p className='fw-500 mb-0 mt-4 text-md-start'>Copyright © 2022 Sellia, All rights reserved.</p>
					</Col>
					<Col sm={5} className='text-center'>
						<ul className='list-group'>
							<li className='list-group-item'>
								<a className='text-decoration-none fw-500' href='#about_us'>
									¿Quienes somos?
								</a>
							</li>
							<li className='list-group-item'>
								<a className='text-decoration-none fw-500' href='#products'>
									Productos
								</a>
							</li>
							<li className='list-group-item'>
								<a className='text-decoration-none fw-500' href='#blog'>
									Blog
								</a>
							</li>
							<li className='list-group-item'>
								<a className='text-decoration-none fw-500' href='#contact_us'>
									Contacto
								</a>
							</li>
						</ul>
					</Col>
					<Col sm={2} className='d-flex content-social'>
						<SocialIcon url='https://facebook.com/' style={{ height: 35, width: 35 }} />

						<SocialIcon url='https://instagram.com/' style={{ height: 35, width: 35 }} />

						<SocialIcon url='https://linkedin.com/' style={{ height: 35, width: 35 }} />
					</Col>
				</Row>
			</section>
		</div>
	);
};
