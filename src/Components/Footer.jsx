import { Col, Row } from "react-bootstrap";

export const Footer = () => {
	return (
		<section id='footer'>
			<Row className='mx-3 py-5'>
				<Col sm={5}>
					<img src='/images/SelliaLogoFooter.png' width='212px' height='65px' className='img-fluid' />
					<p>Copyright © 2022 Sellia, All rights reserved.</p>
				</Col>
				<Col sm={5}>
					<Row>
						<a href='#about_us'>¿Quienes somos?</a>
					</Row>
					<Row>
						<a href='#products'>Productos</a>
					</Row>
					<Row>
						<a href='#blog'>Blog</a>
					</Row>
					<Row>
						<a href='#contact_us'>Contacto</a>
					</Row>
				</Col>
				<Col sm={2}>
					<Row className='d-flex justify-content-around mt-4'>
						<Col>
							<a href='www.instragram.com'>
								<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M15.34 3.46C15.1027 3.46 14.8707 3.53038 14.6733 3.66224C14.476 3.79409 14.3222 3.98151 14.2313 4.20078C14.1405 4.42005 14.1168 4.66133 14.1631 4.89411C14.2094 5.12689 14.3236 5.34071 14.4915 5.50853C14.6593 5.67635 14.8731 5.79064 15.1059 5.83694C15.3387 5.88324 15.5799 5.85948 15.7992 5.76866C16.0185 5.67783 16.2059 5.52402 16.3378 5.32668C16.4696 5.12935 16.54 4.89734 16.54 4.66C16.54 4.34174 16.4136 4.03652 16.1885 3.81147C15.9635 3.58643 15.6583 3.46 15.34 3.46ZM19.94 5.88C19.9206 5.0503 19.7652 4.2294 19.48 3.45C19.2257 2.78313 18.83 2.17928 18.32 1.68C17.8248 1.16743 17.2196 0.774176 16.55 0.53C15.7727 0.236161 14.9508 0.07721 14.12 0.0599999C13.06 -5.58794e-08 12.72 0 10 0C7.28 0 6.94 -5.58794e-08 5.88 0.0599999C5.04915 0.07721 4.22734 0.236161 3.45 0.53C2.78168 0.776649 2.17693 1.16956 1.68 1.68C1.16743 2.17518 0.774176 2.78044 0.53 3.45C0.236161 4.22734 0.07721 5.04915 0.0599999 5.88C-5.58794e-08 6.94 0 7.28 0 10C0 12.72 -5.58794e-08 13.06 0.0599999 14.12C0.07721 14.9508 0.236161 15.7727 0.53 16.55C0.774176 17.2196 1.16743 17.8248 1.68 18.32C2.17693 18.8304 2.78168 19.2234 3.45 19.47C4.22734 19.7638 5.04915 19.9228 5.88 19.94C6.94 20 7.28 20 10 20C12.72 20 13.06 20 14.12 19.94C14.9508 19.9228 15.7727 19.7638 16.55 19.47C17.2196 19.2258 17.8248 18.8326 18.32 18.32C18.8322 17.8226 19.2283 17.2182 19.48 16.55C19.7652 15.7706 19.9206 14.9497 19.94 14.12C19.94 13.06 20 12.72 20 10C20 7.28 20 6.94 19.94 5.88ZM18.14 14C18.1327 14.6348 18.0178 15.2637 17.8 15.86C17.6403 16.2952 17.3839 16.6884 17.05 17.01C16.7256 17.3405 16.3332 17.5964 15.9 17.76C15.3037 17.9778 14.6748 18.0927 14.04 18.1C13.04 18.15 12.67 18.16 10.04 18.16C7.41 18.16 7.04 18.16 6.04 18.1C5.38089 18.1123 4.72459 18.0109 4.1 17.8C3.68578 17.6281 3.31136 17.3728 3 17.05C2.66809 16.7287 2.41484 16.3352 2.26 15.9C2.01586 15.2952 1.88044 14.6519 1.86 14C1.86 13 1.8 12.63 1.8 10C1.8 7.37 1.8 7 1.86 6C1.86448 5.35106 1.98295 4.70795 2.21 4.1C2.38605 3.67791 2.65627 3.30166 3 3C3.30381 2.65617 3.67929 2.3831 4.1 2.2C4.70955 1.98004 5.352 1.86508 6 1.86C7 1.86 7.37 1.8 10 1.8C12.63 1.8 13 1.8 14 1.86C14.6348 1.86728 15.2637 1.98225 15.86 2.2C16.3144 2.36865 16.7223 2.64285 17.05 3C17.3777 3.30718 17.6338 3.68273 17.8 4.1C18.0223 4.70893 18.1373 5.35178 18.14 6C18.19 7 18.2 7.37 18.2 10C18.2 12.63 18.19 13 18.14 14ZM10 4.87C8.98581 4.87198 7.99496 5.17453 7.15265 5.73942C6.31035 6.30431 5.65438 7.1062 5.26763 8.04375C4.88089 8.98131 4.78072 10.0125 4.97979 11.0069C5.17886 12.0014 5.66824 12.9145 6.38608 13.631C7.10392 14.3474 8.01801 14.835 9.01286 15.0321C10.0077 15.2293 11.0387 15.1271 11.9755 14.7385C12.9123 14.35 13.7129 13.6924 14.2761 12.849C14.8394 12.0056 15.14 11.0142 15.14 10C15.1413 9.3251 15.0092 8.65661 14.7512 8.03296C14.4933 7.40931 14.1146 6.84281 13.6369 6.36605C13.1592 5.88929 12.5919 5.51168 11.9678 5.25493C11.3436 4.99818 10.6749 4.86736 10 4.87ZM10 13.33C9.34139 13.33 8.69757 13.1347 8.14995 12.7688C7.60234 12.4029 7.17552 11.8828 6.92348 11.2743C6.67144 10.6659 6.6055 9.99631 6.73398 9.35035C6.86247 8.70439 7.17963 8.11104 7.64533 7.64533C8.11104 7.17963 8.70439 6.86247 9.35035 6.73398C9.99631 6.6055 10.6659 6.67144 11.2743 6.92348C11.8828 7.17552 12.4029 7.60234 12.7688 8.14995C13.1347 8.69757 13.33 9.34139 13.33 10C13.33 10.4373 13.2439 10.8703 13.0765 11.2743C12.9092 11.6784 12.6639 12.0454 12.3547 12.3547C12.0454 12.6639 11.6784 12.9092 11.2743 13.0765C10.8703 13.2439 10.4373 13.33 10 13.33Z'
										fill='black'
									/>
								</svg>
							</a>
						</Col>
						<Col>
							<a href='twitter.com'>
								<svg width='23' height='20' viewBox='0 0 23 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M22.9914 1.95021C22.9915 1.77357 22.9448 1.60007 22.8561 1.44735C22.7673 1.29464 22.6397 1.16817 22.4862 1.08084C22.3326 0.993502 22.1587 0.948416 21.9821 0.95017C21.8054 0.951925 21.6324 1.00046 21.4807 1.09083C20.8954 1.43921 20.2652 1.70601 19.6077 1.88383C18.6686 1.07806 17.471 0.637129 16.2337 0.641636C14.8762 0.643198 13.5726 1.17223 12.5979 2.11702C11.6232 3.06181 11.0539 4.3484 11.01 5.70512C8.33402 5.27838 5.90868 3.88164 4.19649 1.78126C4.09333 1.65609 3.96158 1.55757 3.81235 1.494C3.66313 1.43043 3.5008 1.40368 3.33907 1.41601C3.17743 1.42932 3.02147 1.4818 2.88467 1.56892C2.74786 1.65603 2.63434 1.77516 2.55391 1.91601C2.14144 2.63582 1.90454 3.44276 1.86246 4.27131C1.82038 5.09986 1.9743 5.92666 2.31172 6.68456L2.30977 6.68651C2.15812 6.77991 2.03296 6.91066 1.94628 7.06625C1.85959 7.22185 1.81427 7.39708 1.81465 7.57519C1.81282 7.72211 1.82163 7.86898 1.84102 8.01464C1.94316 9.2729 2.50081 10.4507 3.40938 11.3271C3.34775 11.4446 3.31013 11.5731 3.29873 11.7052C3.28732 11.8373 3.30237 11.9704 3.34297 12.0967C3.73909 13.3308 4.58147 14.3727 5.70528 15.0185C4.56352 15.46 3.3307 15.614 2.11543 15.4668C1.89051 15.4386 1.66266 15.4876 1.46928 15.6059C1.2759 15.7242 1.12846 15.9047 1.05115 16.1178C0.973837 16.3309 0.971244 16.5639 1.04379 16.7787C1.11634 16.9935 1.25973 17.1772 1.45043 17.2998C3.54053 18.646 5.97411 19.3617 8.4602 19.3613C11.2795 19.393 14.0302 18.4921 16.2844 16.7988C18.5387 15.1054 20.1702 12.7145 20.925 9.99801C21.2781 8.81464 21.4583 7.58648 21.4602 6.35157C21.4602 6.28614 21.4602 6.21876 21.4592 6.15138C21.9813 5.58831 22.3858 4.92668 22.6489 4.20527C22.912 3.48387 23.0284 2.7172 22.9914 1.95021ZM19.6848 5.16212C19.5196 5.35746 19.436 5.60891 19.4514 5.86427C19.4611 6.02927 19.4602 6.19527 19.4602 6.35157C19.4581 7.39511 19.3052 8.43287 19.0061 9.43263C18.3896 11.744 17.0152 13.7817 15.1031 15.2192C13.1911 16.6568 10.8519 17.4111 8.4602 17.3613C7.60108 17.3616 6.74492 17.2606 5.90942 17.0606C6.97483 16.7172 7.97101 16.1879 8.8518 15.4971C9.01403 15.3693 9.13275 15.1945 9.19169 14.9967C9.25063 14.7988 9.24688 14.5875 9.18098 14.3918C9.11507 14.1961 8.99023 14.0257 8.82358 13.9038C8.65694 13.7819 8.45665 13.7145 8.2502 13.7109C7.41903 13.698 6.62533 13.363 6.03633 12.7764C6.18575 12.7481 6.33419 12.7129 6.48165 12.6709C6.69766 12.6094 6.8867 12.477 7.01831 12.295C7.14993 12.1131 7.21647 11.8921 7.20723 11.6677C7.19798 11.4433 7.11348 11.2285 6.96734 11.058C6.82119 10.8874 6.62191 10.7711 6.40157 10.7275C5.91911 10.6323 5.46512 10.427 5.07489 10.1277C4.68466 9.82845 4.3687 9.44321 4.15157 9.00196C4.3323 9.02662 4.51418 9.04194 4.69649 9.04786C4.91308 9.05113 5.12509 8.98543 5.30187 8.86026C5.47865 8.73509 5.61104 8.55694 5.67989 8.35157C5.74587 8.14433 5.74248 7.92123 5.67022 7.7161C5.59797 7.51096 5.46079 7.33499 5.2795 7.21485C4.83965 6.92182 4.47935 6.52427 4.23086 6.0578C3.98237 5.59134 3.85346 5.07052 3.85567 4.54201C3.85567 4.47561 3.85762 4.4092 3.86153 4.34377C6.10279 6.43402 9.00985 7.66621 12.0705 7.82326C12.225 7.82934 12.3789 7.80024 12.5205 7.73816C12.6621 7.67607 12.7877 7.58262 12.8879 7.46486C12.9871 7.34596 13.0573 7.20566 13.0931 7.05501C13.1288 6.90437 13.1291 6.74748 13.0939 6.5967C13.0367 6.35806 13.0076 6.11357 13.007 5.86818C13.0079 5.01271 13.3482 4.19254 13.9531 3.58764C14.558 2.98274 15.3781 2.64251 16.2336 2.64161C16.6737 2.64043 17.1093 2.7305 17.5129 2.90615C17.9165 3.0818 18.2792 3.3392 18.5783 3.66212C18.6937 3.7862 18.8388 3.87871 19 3.93085C19.1612 3.98299 19.333 3.99303 19.4992 3.96001C19.91 3.88006 20.3149 3.7724 20.7111 3.63775C20.4409 4.19072 20.0955 4.70369 19.6848 5.16212Z'
										fill='black'
									/>
								</svg>
							</a>
						</Col>
						<Col>
							<a href='linkedin.com'>
								<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M18.4701 -0.00010431H1.53006C1.33964 -0.00274893 1.15056 0.0321432 0.973624 0.102579C0.796689 0.173016 0.635362 0.277616 0.498856 0.410408C0.36235 0.543199 0.25334 0.70158 0.178051 0.876505C0.102761 1.05143 0.062667 1.23947 0.0600586 1.4299V18.5699C0.062667 18.7603 0.102761 18.9484 0.178051 19.1233C0.25334 19.2982 0.36235 19.4566 0.498856 19.5894C0.635362 19.7222 0.796689 19.8268 0.973624 19.8972C1.15056 19.9676 1.33964 20.0025 1.53006 19.9999H18.4701C18.6605 20.0025 18.8496 19.9676 19.0265 19.8972C19.2034 19.8268 19.3648 19.7222 19.5013 19.5894C19.6378 19.4566 19.7468 19.2982 19.8221 19.1233C19.8974 18.9484 19.9375 18.7603 19.9401 18.5699V1.4299C19.9375 1.23947 19.8974 1.05143 19.8221 0.876505C19.7468 0.70158 19.6378 0.543199 19.5013 0.410408C19.3648 0.277616 19.2034 0.173016 19.0265 0.102579C18.8496 0.0321432 18.6605 -0.00274893 18.4701 -0.00010431ZM6.09006 16.7399H3.09006V7.7399H6.09006V16.7399ZM4.59006 6.4799C4.17632 6.4799 3.77953 6.31554 3.48697 6.02298C3.19442 5.73043 3.03006 5.33363 3.03006 4.9199C3.03006 4.50616 3.19442 4.10937 3.48697 3.81681C3.77953 3.52425 4.17632 3.3599 4.59006 3.3599C4.80975 3.33498 5.03224 3.35675 5.24293 3.42378C5.45363 3.49081 5.6478 3.60159 5.81272 3.74886C5.97763 3.89613 6.10958 4.07657 6.19993 4.27838C6.29028 4.48018 6.33698 4.69879 6.33698 4.9199C6.33698 5.141 6.29028 5.35961 6.19993 5.56141C6.10958 5.76322 5.97763 5.94366 5.81272 6.09093C5.6478 6.23821 5.45363 6.34898 5.24293 6.41601C5.03224 6.48304 4.80975 6.50481 4.59006 6.4799ZM16.9101 16.7399H13.9101V11.9099C13.9101 10.6999 13.4801 9.9099 12.3901 9.9099C12.0527 9.91237 11.7242 10.0182 11.4489 10.2131C11.1735 10.408 10.9645 10.6826 10.8501 10.9999C10.7718 11.2349 10.7379 11.4825 10.7501 11.7299V16.7299H7.75006C7.75006 16.7299 7.75006 8.5499 7.75006 7.7299H10.7501V8.9999C11.0226 8.527 11.419 8.13741 11.8965 7.8731C12.374 7.60878 12.9146 7.47975 13.4601 7.4999C15.4601 7.4999 16.9101 8.7899 16.9101 11.5599V16.7399Z'
										fill='black'
									/>
								</svg>
							</a>
						</Col>
					</Row>
				</Col>
			</Row>
		</section>
	);
};
