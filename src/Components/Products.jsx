import { Col, Row } from "react-bootstrap";

export const Products = () => {
	return (
		<div className=' my-5'>
			<section id='products' className='icons-background'>
				<Row className='my-5'>
					<Col sm={12} lg={4} className='pt-5 '>
						<h4 className='text-center w-75 mx-auto pb-5 fw-600'>Un producto para cada necesidad</h4>
						<Col sm={12}>
							<div className='products-grid mx-3 mx-lg-5'>
								<div className='products-grid-item d-flex justify-content-center align-items-center'>
									<p className='fw-700 dark-blue py-4 '>Franquicias</p>
								</div>
								<div className='products-grid-item  d-flex justify-content-center align-items-center'>
									<p className='fw-700 dark-blue py-4 '>Enterprise</p>
								</div>
								<div className='products-grid-item d-flex justify-content-center align-items-center'>
									<p className='fw-700 dark-blue py-4 '>Trivias</p>
								</div>
								<div className='products-grid-item d-flex justify-content-center align-items-center'>
									<p className='fw-700 dark-blue py-4'>RRHH</p>
								</div>
								<div className='d-flex full-width-product mb-4 justify-content-center align-items-center'>
									<p className='fw-700 dark-blue py-4'>Hazlo a tu medida!</p>
								</div>
							</div>
						</Col>
					</Col>
					<Col sm={12} lg={8} id='products-column' className='background-bone'>
						<Row>
							<Col sm={7} className='text-center mt-5'>
								<h3 className='fw-700 dark-blue my-3'>Productos</h3>
								<p className='fw-500 mx-2'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, amet donec morbi vitae semper at vulputate. Elementum
									vitae, mattis orci ultrices scelerisque sed. Magna praesent lectus quisque diam vivamus sed. Amet, egestas malesuada
									tortor augue pellentesque. Ut aliquam blandit vulputate pulvinar ipsum risus. Nulla neque augue et tempor viverra odio
									facilisi sed. Interdum lorem urna augue in posuere ut quis id commodo. Arcu orci, neque et elementum. Placerat lacus est
									lobortis ut. Aliquet in a et pulvinar eu rhoncus at quis. Venenatis, diam diam in sed integer. Aliquet at luctus
									pellentesque blandit dignissim ipsum.
								</p>
							</Col>
							<Col sm={4} className='mt-5 justify-content-center d-flex pb-5'>
								<img src='/images/selliaPhone.png' className='img-fluid ' alt='Sellia phone' />
							</Col>
						</Row>
					</Col>
				</Row>
			</section>
		</div>
	);
};
