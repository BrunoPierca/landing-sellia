import { Col, Row } from "react-bootstrap";

export const Products = () => {
	return (
		<section id='products' className='icons-background'>
			<Row className='ms-5 py-5'>
				<Col sm={4}>
					<h2>Un producto para cada necesidad</h2>
					<Col sm={12}>
						<Row className='g-2'>
							<Col sm={6}>
								<div className='products-grid-item d-flex justify-content-center align-items-center'>
									<p className='fw-700 darkBlue m-0'>Franquicias</p>
								</div>
							</Col>
							<Col sm={6}>
								<div className='products-grid-item  d-flex justify-content-center align-items-center'>
									<p className='fw-700 darkBlue m-0'>Enterprise</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-between'>
							<Col sm={6}>
								<div className='products-grid-item d-flex justify-content-center align-items-center'>
									<p className='fw-700 darkBlue m-0'>Trivias</p>
								</div>
							</Col>
							<Col sm={6}>
								<div className='products-grid-item d-flex justify-content-center align-items-center'>
									<p className='fw-700 darkBlue m-0'>RRHH</p>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-between'>
							<Col sm={12}>
								<div className='d-flex products-grid-item justify-content-center align-items-center'>
									<p className='fw-700 darkBlue m-0'>Hazlo a tu medida</p>
								</div>
							</Col>
						</Row>
					</Col>
				</Col>
				<Col sm={8} id='products-column'>
					<Row>
						<Col sm={7} className='text-center mt-5'>
							<h2 className='fw-700 darkBlue my-3'>Productos</h2>
							<p className='fw-500 '>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, amet donec morbi vitae semper at vulputate. Elementum vitae,
								mattis orci ultrices scelerisque sed. Magna praesent lectus quisque diam vivamus sed. Amet, egestas malesuada tortor augue
								pellentesque. Ut aliquam blandit vulputate pulvinar ipsum risus. Nulla neque augue et tempor viverra odio facilisi sed.
								Interdum lorem urna augue in posuere ut quis id commodo. Arcu orci, neque et elementum. Placerat lacus est lobortis ut.
								Aliquet in a et pulvinar eu rhoncus at quis. Venenatis, diam diam in sed integer. Aliquet at luctus pellentesque blandit
								dignissim ipsum.
							</p>
						</Col>
						<Col sm={4} className='mt-5'>
							<img src='/images/selliaPhone.png' className='img-fluid ' alt='Sellia phone' />
						</Col>
					</Row>
				</Col>
			</Row>
		</section>
	);
};
