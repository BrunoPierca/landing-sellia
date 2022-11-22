import { Col, Row } from "react-bootstrap";

export const Features = () => {
	return (
		<section id='features_section'>
			<Row className='text-center py-5 mx-3 mx-lg-5'>
				<h2 className='dark-blue fw-300'>
					Sellia lo tiene <strong className='fw-700'>todo.</strong>
				</h2>
				<Col sm={12} lg={6} className='py-5 px-0  mt-0 mt-lg-5'>
					<div className='features-grid'>
						<div className='features-grid-item py-3 justify-content-center align-items-center'>
							<svg className='w-100' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.3331 15.3333C10.0035 15.3333 9.68124 15.4311 9.40716 15.6142C9.13308 15.7974 8.91946 16.0576 8.79331 16.3622C8.66716 16.6667 8.63416 17.0018 8.69847 17.3251C8.76278 17.6485 8.92151 17.9454 9.1546 18.1785C9.38769 18.4116 9.68466 18.5703 10.008 18.6346C10.3313 18.6989 10.6664 18.6659 10.9709 18.5398C11.2755 18.4137 11.5358 18.2 11.7189 17.9259C11.902 17.6519 11.9998 17.3296 11.9998 17C11.9998 16.558 11.8242 16.134 11.5116 15.8215C11.1991 15.5089 10.7751 15.3333 10.3331 15.3333ZM16.9998 15.3333C16.6701 15.3333 16.3479 15.4311 16.0738 15.6142C15.7997 15.7974 15.5861 16.0576 15.46 16.3622C15.3338 16.6667 15.3008 17.0018 15.3651 17.3251C15.4294 17.6485 15.5882 17.9454 15.8213 18.1785C16.0544 18.4116 16.3513 18.5703 16.6746 18.6346C16.9979 18.6989 17.333 18.6659 17.6376 18.5398C17.9421 18.4137 18.2024 18.2 18.3856 17.9259C18.5687 17.6519 18.6664 17.3296 18.6664 17C18.6664 16.558 18.4908 16.134 18.1783 15.8215C17.8657 15.5089 17.4418 15.3333 16.9998 15.3333ZM23.6664 15.3333C23.3368 15.3333 23.0146 15.4311 22.7405 15.6142C22.4664 15.7974 22.2528 16.0576 22.1266 16.3622C22.0005 16.6667 21.9675 17.0018 22.0318 17.3251C22.0961 17.6485 22.2548 17.9454 22.4879 18.1785C22.721 18.4116 23.018 18.5703 23.3413 18.6346C23.6646 18.6989 23.9997 18.6659 24.3042 18.5398C24.6088 18.4137 24.8691 18.2 25.0522 17.9259C25.2354 17.6519 25.3331 17.3296 25.3331 17C25.3331 16.558 25.1575 16.134 24.845 15.8215C24.5324 15.5089 24.1085 15.3333 23.6664 15.3333ZM16.9998 0.333332C14.8111 0.333332 12.6438 0.764428 10.6217 1.60201C8.59963 2.43958 6.76231 3.66724 5.21466 5.21489C2.08906 8.34049 0.33311 12.5797 0.33311 17C0.31854 20.8486 1.6511 24.5809 4.09978 27.55L0.766443 30.8833C0.535181 31.1177 0.37852 31.4153 0.31623 31.7386C0.25394 32.062 0.288811 32.3965 0.416443 32.7C0.554873 32.9999 0.779284 33.2519 1.06119 33.424C1.34309 33.5961 1.66978 33.6806 1.99978 33.6667H16.9998C21.4201 33.6667 25.6593 31.9107 28.7849 28.7851C31.9105 25.6595 33.6664 21.4203 33.6664 17C33.6664 12.5797 31.9105 8.34049 28.7849 5.21489C25.6593 2.08928 21.4201 0.333332 16.9998 0.333332ZM16.9998 30.3333H6.01644L7.56644 28.7833C7.87686 28.4711 8.0511 28.0486 8.0511 27.6083C8.0511 27.168 7.87686 26.7456 7.56644 26.4333C5.38409 24.2534 4.02507 21.3842 3.72093 18.3147C3.41679 15.2451 4.18635 12.165 5.89849 9.5992C7.61063 7.0334 10.1594 5.1406 13.1106 4.24329C16.0618 3.34598 19.2329 3.49967 22.0835 4.67819C24.9341 5.8567 27.2879 7.98712 28.7438 10.7065C30.1998 13.4258 30.6679 16.5659 30.0683 19.5917C29.4688 22.6174 27.8386 25.3417 25.4557 27.3004C23.0727 29.2591 20.0844 30.3309 16.9998 30.3333Z'
									fill='#E2F0FF'
								/>
							</svg>
							<p className='w-100 fw-500 mt-1'>Chatbot</p>
						</div>
						<div className='features-grid-item py-3 justify-content-center align-items-center'>
							<svg viewBox='0 0 28 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M22.3332 12V8.66667C22.3332 6.45653 21.4552 4.33691 19.8924 2.77411C18.3296 1.21131 16.21 0.333332 13.9998 0.333332C11.7897 0.333332 9.67008 1.21131 8.10728 2.77411C6.54448 4.33691 5.6665 6.45653 5.6665 8.66667V12C4.34042 12 3.06865 12.5268 2.13097 13.4645C1.19329 14.4021 0.666504 15.6739 0.666504 17V28.6667C0.666504 29.9928 1.19329 31.2645 2.13097 32.2022C3.06865 33.1399 4.34042 33.6667 5.6665 33.6667H22.3332C23.6593 33.6667 24.931 33.1399 25.8687 32.2022C26.8064 31.2645 27.3332 29.9928 27.3332 28.6667V17C27.3332 15.6739 26.8064 14.4021 25.8687 13.4645C24.931 12.5268 23.6593 12 22.3332 12ZM8.99984 8.66667C8.99984 7.34058 9.52662 6.06881 10.4643 5.13113C11.402 4.19345 12.6738 3.66667 13.9998 3.66667C15.3259 3.66667 16.5977 4.19345 17.5354 5.13113C18.4731 6.06881 18.9998 7.34058 18.9998 8.66667V12H8.99984V8.66667ZM23.9998 28.6667C23.9998 29.1087 23.8242 29.5326 23.5117 29.8452C23.1991 30.1577 22.7752 30.3333 22.3332 30.3333H5.6665C5.22448 30.3333 4.80055 30.1577 4.48799 29.8452C4.17543 29.5326 3.99984 29.1087 3.99984 28.6667V17C3.99984 16.558 4.17543 16.134 4.48799 15.8215C4.80055 15.5089 5.22448 15.3333 5.6665 15.3333H22.3332C22.7752 15.3333 23.1991 15.5089 23.5117 15.8215C23.8242 16.134 23.9998 16.558 23.9998 17V28.6667Z'
									fill='#E2F0FF'
								/>
							</svg>

							<p className='w-100 fw-500 mt-1'>Seguridad</p>
						</div>
						<div className='features-grid-item py-3 justify-content-center align-items-center'>
							<svg viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M9.66667 23.6667C10.3297 23.6667 10.9656 23.4033 11.4344 22.9344C11.9033 22.4656 12.1667 21.8297 12.1667 21.1667C12.1748 21.0835 12.1748 20.9998 12.1667 20.9167L16.8167 16.2667H17.2H17.5833L20.2667 18.95C20.2667 18.95 20.2667 19.0333 20.2667 19.0833C20.2667 19.7464 20.5301 20.3823 20.9989 20.8511C21.4677 21.3199 22.1036 21.5833 22.7667 21.5833C23.4297 21.5833 24.0656 21.3199 24.5344 20.8511C25.0033 20.3823 25.2667 19.7464 25.2667 19.0833V18.95L31.3333 12.8333C31.8278 12.8333 32.3111 12.6867 32.7223 12.412C33.1334 12.1373 33.4538 11.7469 33.643 11.29C33.8322 10.8332 33.8818 10.3306 33.7853 9.84561C33.6888 9.36065 33.4507 8.9152 33.1011 8.56557C32.7515 8.21593 32.306 7.97783 31.8211 7.88137C31.3361 7.78491 30.8334 7.83441 30.3766 8.02363C29.9198 8.21285 29.5294 8.53328 29.2547 8.94441C28.98 9.35553 28.8333 9.83888 28.8333 10.3333C28.8252 10.4165 28.8252 10.5002 28.8333 10.5833L22.8167 16.6H22.55L19.6667 13.6667C19.6667 13.0036 19.4033 12.3677 18.9344 11.8989C18.4656 11.4301 17.8297 11.1667 17.1667 11.1667C16.5036 11.1667 15.8677 11.4301 15.3989 11.8989C14.9301 12.3677 14.6667 13.0036 14.6667 13.6667L9.66667 18.6667C9.00362 18.6667 8.36774 18.9301 7.8989 19.3989C7.43006 19.8677 7.16667 20.5036 7.16667 21.1667C7.16667 21.8297 7.43006 22.4656 7.8989 22.9344C8.36774 23.4033 9.00362 23.6667 9.66667 23.6667ZM32.1667 30.3333H3.83333V2C3.83333 1.55797 3.65774 1.13405 3.34518 0.821487C3.03262 0.508927 2.60869 0.333332 2.16667 0.333332C1.72464 0.333332 1.30072 0.508927 0.988155 0.821487C0.675595 1.13405 0.5 1.55797 0.5 2V32C0.5 32.442 0.675595 32.866 0.988155 33.1785C1.30072 33.4911 1.72464 33.6667 2.16667 33.6667H32.1667C32.6087 33.6667 33.0326 33.4911 33.3452 33.1785C33.6577 32.866 33.8333 32.442 33.8333 32C33.8333 31.558 33.6577 31.134 33.3452 30.8215C33.0326 30.5089 32.6087 30.3333 32.1667 30.3333Z'
									fill='#E2F0FF'
								/>
							</svg>

							<p className='w-100 fw-500 mt-1'>Data</p>
						</div>
						<div className='features-grid-item pt-3 justify-content-center align-items-center'>
							<svg viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M32.5335 12.9167L29.3835 11.8667L30.8668 8.9C31.0172 8.58948 31.0675 8.23994 31.0108 7.89962C30.9541 7.5593 30.7931 7.24497 30.5502 7L27.0002 3.45C26.7539 3.20348 26.4365 3.04034 26.0927 2.98354C25.7489 2.92674 25.396 2.97913 25.0835 3.13333L22.1168 4.61667L21.0668 1.46667C20.9559 1.13832 20.7455 0.85271 20.4647 0.649581C20.1839 0.446451 19.8467 0.335908 19.5002 0.333334H14.5002C14.1508 0.332432 13.8099 0.441365 13.5258 0.644737C13.2417 0.848109 13.0286 1.13563 12.9168 1.46667L11.8668 4.61667L8.90017 3.13333C8.58965 2.98297 8.24011 2.93267 7.89979 2.98939C7.55947 3.04611 7.24514 3.20705 7.00017 3.45L3.45017 7C3.20364 7.24628 3.04051 7.56363 2.98371 7.90743C2.92691 8.25123 2.9793 8.60419 3.1335 8.91667L4.61684 11.8833L1.46684 12.9333C1.13849 13.0442 0.852878 13.2547 0.649748 13.5355C0.446619 13.8163 0.336076 14.1534 0.333502 14.5V19.5C0.3326 19.8494 0.441533 20.1903 0.644905 20.4744C0.848277 20.7585 1.1358 20.9715 1.46684 21.0833L4.61684 22.1333L3.1335 25.1C2.98313 25.4105 2.93284 25.7601 2.98956 26.1004C3.04628 26.4407 3.20722 26.755 3.45017 27L7.00017 30.55C7.24644 30.7965 7.56379 30.9597 7.90759 31.0165C8.2514 31.0733 8.60435 31.0209 8.91684 30.8667L11.8835 29.3833L12.9335 32.5333C13.0453 32.8644 13.2583 33.1519 13.5425 33.3553C13.8266 33.5586 14.1674 33.6676 14.5168 33.6667H19.5168C19.8662 33.6676 20.2071 33.5586 20.4912 33.3553C20.7753 33.1519 20.9884 32.8644 21.1002 32.5333L22.1502 29.3833L25.1168 30.8667C25.4254 31.0132 25.7715 31.0615 26.1084 31.0048C26.4452 30.9482 26.7565 30.7894 27.0002 30.55L30.5502 27C30.7967 26.7537 30.9598 26.4364 31.0166 26.0926C31.0734 25.7488 31.021 25.3958 30.8668 25.0833L29.3835 22.1167L32.5335 21.0667C32.8619 20.9558 33.1475 20.7453 33.3506 20.4645C33.5537 20.1837 33.6643 19.8466 33.6668 19.5V14.5C33.6677 14.1506 33.5588 13.8097 33.3554 13.5256C33.1521 13.2415 32.8645 13.0285 32.5335 12.9167ZM30.3335 18.3L28.3335 18.9667C27.8736 19.1158 27.4517 19.3633 27.0969 19.6918C26.7422 20.0204 26.4632 20.4222 26.2793 20.8693C26.0953 21.3164 26.0109 21.7982 26.0318 22.2813C26.0526 22.7643 26.1783 23.2371 26.4002 23.6667L27.3502 25.5667L25.5168 27.4L23.6668 26.4C23.2394 26.1871 22.7713 26.0684 22.294 26.0522C21.8168 26.0359 21.3416 26.1223 20.9007 26.3057C20.4598 26.489 20.0634 26.7649 19.7384 27.1147C19.4133 27.4646 19.1673 27.8801 19.0168 28.3333L18.3502 30.3333H15.7002L15.0335 28.3333C14.8843 27.8734 14.6369 27.4515 14.3083 27.0968C13.9798 26.742 13.578 26.463 13.1309 26.2791C12.6837 26.0952 12.2019 26.0107 11.7189 26.0316C11.2358 26.0525 10.7631 26.1782 10.3335 26.4L8.4335 27.35L6.60017 25.5167L7.60017 23.6667C7.82199 23.2371 7.9477 22.7643 7.96858 22.2813C7.98945 21.7982 7.905 21.3164 7.72107 20.8693C7.53713 20.4222 7.25813 20.0204 6.90341 19.6918C6.54869 19.3633 6.12674 19.1158 5.66683 18.9667L3.66684 18.3V15.7L5.66683 15.0333C6.12674 14.8842 6.54869 14.6367 6.90341 14.3082C7.25813 13.9796 7.53713 13.5778 7.72107 13.1307C7.905 12.6836 7.98945 12.2018 7.96858 11.7187C7.9477 11.2357 7.82199 10.7629 7.60017 10.3333L6.65017 8.48333L8.4835 6.65L10.3335 7.6C10.7631 7.82182 11.2358 7.94753 11.7189 7.96841C12.2019 7.98929 12.6837 7.90483 13.1309 7.7209C13.578 7.53697 13.9798 7.25796 14.3083 6.90324C14.6369 6.54852 14.8843 6.12657 15.0335 5.66667L15.7002 3.66667H18.3002L18.9668 5.66667C19.116 6.12657 19.3635 6.54852 19.692 6.90324C20.0205 7.25796 20.4223 7.53697 20.8695 7.7209C21.3166 7.90483 21.7984 7.98929 22.2815 7.96841C22.7645 7.94753 23.2372 7.82182 23.6668 7.6L25.5668 6.65L27.4002 8.48333L26.4002 10.3333C26.1872 10.7607 26.0686 11.2289 26.0523 11.7061C26.0361 12.1834 26.1225 12.6585 26.3058 13.0995C26.4891 13.5404 26.7651 13.9368 27.1149 14.2618C27.4647 14.5868 27.8803 14.8329 28.3335 14.9833L30.3335 15.65V18.3ZM17.0002 10.3333C15.6816 10.3333 14.3927 10.7243 13.2964 11.4569C12.2 12.1894 11.3456 13.2306 10.841 14.4488C10.3364 15.667 10.2044 17.0074 10.4616 18.3006C10.7188 19.5938 11.3538 20.7817 12.2861 21.714C13.2185 22.6464 14.4064 23.2813 15.6996 23.5386C16.9928 23.7958 18.3332 23.6638 19.5514 23.1592C20.7696 22.6546 21.8108 21.8001 22.5433 20.7038C23.2758 19.6075 23.6668 18.3185 23.6668 17C23.6668 15.2319 22.9645 13.5362 21.7142 12.286C20.464 11.0357 18.7683 10.3333 17.0002 10.3333ZM17.0002 20.3333C16.3409 20.3333 15.6964 20.1378 15.1483 19.7716C14.6001 19.4053 14.1729 18.8847 13.9206 18.2756C13.6683 17.6665 13.6023 16.9963 13.7309 16.3497C13.8595 15.7031 14.177 15.1092 14.6431 14.643C15.1093 14.1768 15.7033 13.8593 16.3499 13.7307C16.9965 13.6021 17.6667 13.6681 18.2758 13.9204C18.8849 14.1727 19.4055 14.5999 19.7717 15.1481C20.138 15.6963 20.3335 16.3407 20.3335 17C20.3335 17.8841 19.9823 18.7319 19.3572 19.357C18.7321 19.9821 17.8842 20.3333 17.0002 20.3333Z'
									fill='#E2F0FF'
								/>
							</svg>
							<p className='w-100 fw-500 mt-1'>Conexión oficial con grupo Meta</p>
						</div>
						<div className='features-grid-item py-3 justify-content-center align-items-center'>
							<svg viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M32.6835 11.4C32.6835 11.4 32.6835 11.4 32.6835 11.3167C31.5092 8.11038 29.3784 5.34214 26.5793 3.38644C23.7803 1.43074 20.4481 0.381958 17.0335 0.381958C13.6189 0.381958 10.2867 1.43074 7.48768 3.38644C4.68864 5.34214 2.55783 8.11038 1.3835 11.3167C1.3835 11.3167 1.3835 11.3167 1.3835 11.4C0.0720376 15.0182 0.0720376 18.9818 1.3835 22.6C1.3835 22.6 1.3835 22.6 1.3835 22.6833C2.55783 25.8896 4.68864 28.6579 7.48768 30.6136C10.2867 32.5693 13.6189 33.6181 17.0335 33.6181C20.4481 33.6181 23.7803 32.5693 26.5793 30.6136C29.3784 28.6579 31.5092 25.8896 32.6835 22.6833C32.6835 22.6833 32.6835 22.6833 32.6835 22.6C33.995 18.9818 33.995 15.0182 32.6835 11.4ZM4.10016 20.3333C3.52221 18.1487 3.52221 15.8513 4.10016 13.6667H7.20016C6.93355 15.8809 6.93355 18.1191 7.20016 20.3333H4.10016ZM5.46683 23.6667H7.80016C8.19136 25.1531 8.75052 26.5901 9.46683 27.95C7.83233 26.8366 6.46599 25.3734 5.46683 23.6667ZM7.80016 10.3333H5.46683C6.45161 8.63181 7.80048 7.16912 9.41683 6.05C8.71775 7.41208 8.1754 8.84904 7.80016 10.3333ZM15.3335 29.8333C13.2864 28.3311 11.8487 26.1421 11.2835 23.6667H15.3335V29.8333ZM15.3335 20.3333H10.5668C10.2558 18.122 10.2558 15.878 10.5668 13.6667H15.3335V20.3333ZM15.3335 10.3333H11.2835C11.8487 7.85795 13.2864 5.66887 15.3335 4.16667V10.3333ZM28.5335 10.3333H26.2002C25.809 8.84694 25.2498 7.4099 24.5335 6.05C26.168 7.16346 27.5343 8.62657 28.5335 10.3333ZM18.6668 4.16667C20.7139 5.66887 22.1516 7.85795 22.7168 10.3333H18.6668V4.16667ZM18.6668 29.8333V23.6667H22.7168C22.1516 26.1421 20.7139 28.3311 18.6668 29.8333ZM23.4335 20.3333H18.6668V13.6667H23.4335C23.7445 15.878 23.7445 18.122 23.4335 20.3333ZM24.5835 27.95C25.2998 26.5901 25.859 25.1531 26.2502 23.6667H28.5835C27.5843 25.3734 26.218 26.8366 24.5835 27.95ZM29.9002 20.3333H26.8002C26.9357 19.2274 27.0025 18.1142 27.0002 17C27.002 15.8858 26.9352 14.7726 26.8002 13.6667H29.9002C30.4781 15.8513 30.4781 18.1487 29.9002 20.3333Z'
									fill='#E2F0FF'
								/>
							</svg>
							<p className='w-100 fw-500 mt-1'>Conectividad</p>
						</div>
						<div className='features-grid-item py-3 justify-content-center align-items-center'>
							<svg viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M32.0002 23.6667H8.66683C8.2248 23.6667 7.80088 23.4911 7.48832 23.1785C7.17576 22.8659 7.00016 22.442 7.00016 22C7.00016 21.558 7.17576 21.134 7.48832 20.8215C7.80088 20.5089 8.2248 20.3333 8.66683 20.3333H26.0668C27.1813 20.3334 28.2638 19.9612 29.1424 19.2757C30.0211 18.5903 30.6457 17.6309 30.9168 16.55L33.6668 5.73333C33.7293 5.48734 33.7347 5.23035 33.6827 4.98195C33.6307 4.73355 33.5227 4.5003 33.3668 4.3C33.2047 4.09455 32.9966 3.93016 32.7591 3.82013C32.5217 3.7101 32.2617 3.65752 32.0002 3.66666H8.26683C7.92298 2.69408 7.28671 1.85166 6.44527 1.25489C5.60383 0.658126 4.5984 0.336227 3.56683 0.333328H2.00016C1.55814 0.333328 1.13421 0.508923 0.821651 0.821484C0.509091 1.13404 0.333496 1.55797 0.333496 1.99999C0.333496 2.44202 0.509091 2.86595 0.821651 3.17851C1.13421 3.49107 1.55814 3.66666 2.00016 3.66666H3.56683C3.94755 3.65557 4.32059 3.77522 4.62384 4.00568C4.92709 4.23615 5.14225 4.56354 5.2335 4.93333L5.3335 5.73333L8.21683 17C6.89075 17.0597 5.64268 17.6437 4.7472 18.6236C3.85171 19.6034 3.38216 20.8989 3.44183 22.225C3.5015 23.5511 4.08552 24.7991 5.06539 25.6946C6.04527 26.5901 7.34075 27.0597 8.66683 27H8.96683C8.69272 27.7552 8.60464 28.5654 8.71005 29.3618C8.81545 30.1583 9.11124 30.9177 9.57236 31.5756C10.0335 32.2335 10.6464 32.7706 11.3591 33.1414C12.0718 33.5123 12.8634 33.7059 13.6668 33.7059C14.4703 33.7059 15.2618 33.5123 15.9746 33.1414C16.6873 32.7706 17.3002 32.2335 17.7613 31.5756C18.2224 30.9177 18.5182 30.1583 18.6236 29.3618C18.729 28.5654 18.6409 27.7552 18.3668 27H22.3002C22.0261 27.7552 21.938 28.5654 22.0434 29.3618C22.1488 30.1583 22.4446 30.9177 22.9057 31.5756C23.3668 32.2335 23.9797 32.7706 24.6924 33.1414C25.4051 33.5123 26.1967 33.7059 27.0002 33.7059C27.8036 33.7059 28.5952 33.5123 29.3079 33.1414C30.0206 32.7706 30.6335 32.2335 31.0946 31.5756C31.5558 30.9177 31.8515 30.1583 31.9569 29.3618C32.0624 28.5654 31.9743 27.7552 31.7002 27H32.0002C32.4422 27 32.8661 26.8244 33.1787 26.5118C33.4912 26.1993 33.6668 25.7754 33.6668 25.3333C33.6668 24.8913 33.4912 24.4674 33.1787 24.1548C32.8661 23.8423 32.4422 23.6667 32.0002 23.6667ZM29.8668 7L27.6835 15.7333C27.5922 16.1031 27.3771 16.4305 27.0738 16.661C26.7706 16.8914 26.3976 17.0111 26.0168 17H11.6335L9.1335 7H29.8668ZM13.6668 30.3333C13.3372 30.3333 13.015 30.2356 12.7409 30.0524C12.4668 29.8693 12.2532 29.609 12.127 29.3045C12.0009 28.9999 11.9679 28.6648 12.0322 28.3415C12.0965 28.0182 12.2552 27.7212 12.4883 27.4881C12.7214 27.2551 13.0184 27.0963 13.3417 27.032C13.665 26.9677 14.0001 27.0007 14.3046 27.1269C14.6092 27.253 14.8695 27.4666 15.0526 27.7407C15.2357 28.0148 15.3335 28.337 15.3335 28.6667C15.3335 29.1087 15.1579 29.5326 14.8453 29.8452C14.5328 30.1577 14.1089 30.3333 13.6668 30.3333ZM27.0002 30.3333C26.6705 30.3333 26.3483 30.2356 26.0742 30.0524C25.8001 29.8693 25.5865 29.609 25.4604 29.3045C25.3342 28.9999 25.3012 28.6648 25.3655 28.3415C25.4298 28.0182 25.5886 27.7212 25.8217 27.4881C26.0547 27.2551 26.3517 27.0963 26.675 27.032C26.9983 26.9677 27.3334 27.0007 27.638 27.1269C27.9425 27.253 28.2028 27.4666 28.3859 27.7407C28.5691 28.0148 28.6668 28.337 28.6668 28.6667C28.6668 29.1087 28.4912 29.5326 28.1787 29.8452C27.8661 30.1577 27.4422 30.3333 27.0002 30.3333Z'
									fill='#E2F0FF'
								/>
							</svg>

							<p className='w-100 fw-500 mt-1'>Marketplace integrado</p>
						</div>
						<div className='features-grid-item py-3 justify-content-center align-items-center'>
							<svg viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M32.5002 13.8C32.0318 13.2377 31.4458 12.7851 30.7835 12.4741C30.1211 12.1631 29.3986 12.0012 28.6668 12H21.0668L22.0002 9.61666C22.3884 8.57313 22.5177 7.451 22.3769 6.34653C22.2362 5.24205 21.8296 4.1882 21.1921 3.27537C20.5546 2.36255 19.7052 1.61799 18.7167 1.10556C17.7283 0.593143 16.6302 0.328153 15.5168 0.333326C15.1962 0.333995 14.8826 0.427118 14.6136 0.601531C14.3446 0.775943 14.1316 1.02424 14.0002 1.31666L9.25016 12H5.3335C4.00741 12 2.73564 12.5268 1.79796 13.4645C0.86028 14.4021 0.333496 15.6739 0.333496 17V28.6667C0.333496 29.9927 0.86028 31.2645 1.79796 32.2022C2.73564 33.1399 4.00741 33.6667 5.3335 33.6667H26.5502C27.7198 33.6663 28.8524 33.2558 29.7507 32.5067C30.649 31.7576 31.2563 30.7172 31.4668 29.5667L33.5835 17.9C33.7144 17.179 33.6852 16.438 33.498 15.7295C33.3108 15.0209 32.9702 14.3622 32.5002 13.8ZM8.66683 30.3333H5.3335C4.89147 30.3333 4.46755 30.1577 4.15499 29.8452C3.84242 29.5326 3.66683 29.1087 3.66683 28.6667V17C3.66683 16.558 3.84242 16.134 4.15499 15.8215C4.46755 15.5089 4.89147 15.3333 5.3335 15.3333H8.66683V30.3333ZM30.3335 17.3L28.2168 28.9667C28.1458 29.3549 27.9394 29.7054 27.6341 29.9557C27.3289 30.2059 26.9448 30.3398 26.5502 30.3333H12.0002V14.0167L16.5335 3.81666C17.0001 3.9527 17.4335 4.184 17.8063 4.49597C18.179 4.80793 18.483 5.19377 18.6992 5.62915C18.9153 6.06452 19.0388 6.53998 19.0619 7.02549C19.085 7.51101 19.0073 7.99605 18.8335 8.44999L17.9502 10.8333C17.7619 11.3371 17.6984 11.8789 17.765 12.4125C17.8315 12.9462 18.0262 13.4558 18.3324 13.8979C18.6386 14.34 19.0472 14.7014 19.5233 14.9514C19.9995 15.2013 20.5291 15.3324 21.0668 15.3333H28.6668C28.9117 15.3329 29.1536 15.3865 29.3754 15.4902C29.5972 15.5939 29.7935 15.7452 29.9502 15.9333C30.1107 16.1189 30.2283 16.3376 30.2946 16.5738C30.3609 16.8101 30.3741 17.058 30.3335 17.3Z'
									fill='#E2F0FF'
								/>
							</svg>
							<p className='w-100 fw-500 mt-1'>Autogestión</p>
						</div>
						<div className='features-grid-item py-3 justify-content-center align-items-center'>
							<svg viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M31.3499 28.9833C32.3944 27.5832 33.1111 25.9665 33.4473 24.2524C33.7835 22.5382 33.7304 20.7705 33.2921 19.0796C32.8538 17.3887 32.0414 15.8179 30.9148 14.4829C29.7883 13.148 28.3763 12.083 26.7832 11.3667C26.4362 9.37017 25.6387 7.47903 24.4512 5.83695C23.2638 4.19487 21.7177 2.84505 19.9304 1.89005C18.1431 0.93505 16.1617 0.400002 14.1366 0.32556C12.1116 0.251117 10.0962 0.639238 8.24359 1.46043C6.39101 2.28162 4.74998 3.51429 3.44519 5.06475C2.1404 6.61522 1.20618 8.44269 0.71352 10.4083C0.220859 12.374 0.182716 14.426 0.601991 16.4086C1.02127 18.3912 1.88693 20.2521 3.1332 21.85L0.816529 24.15C0.585267 24.3844 0.428606 24.682 0.366316 25.0053C0.304026 25.3286 0.338897 25.6631 0.466529 25.9667C0.591563 26.271 0.803893 26.5316 1.07676 26.7155C1.34963 26.8994 1.67082 26.9984 1.99986 27H11.4832C12.4276 28.991 13.9166 30.6738 15.7778 31.8537C17.639 33.0335 19.7962 33.6621 21.9999 33.6667H31.9999C32.3289 33.665 32.6501 33.566 32.923 33.3821C33.1958 33.1982 33.4082 32.9377 33.5332 32.6333C33.6608 32.3298 33.6957 31.9953 33.6334 31.672C33.5711 31.3487 33.4145 31.051 33.1832 30.8167L31.3499 28.9833ZM10.3332 22C10.3355 22.5581 10.3801 23.1153 10.4665 23.6667H6.01653L6.59986 23.1C6.75608 22.9451 6.88007 22.7607 6.96468 22.5576C7.0493 22.3545 7.09286 22.1367 7.09286 21.9167C7.09286 21.6966 7.0493 21.4788 6.96468 21.2757C6.88007 21.0726 6.75608 20.8883 6.59986 20.7333C5.66579 19.8095 4.92528 18.7087 4.42162 17.4954C3.91796 16.282 3.66126 14.9804 3.66653 13.6667C3.66653 11.0145 4.7201 8.47096 6.59546 6.5956C8.47083 4.72023 11.0144 3.66666 13.6665 3.66666C15.736 3.65423 17.7573 4.29064 19.4464 5.48644C21.1355 6.68224 22.4073 8.37729 23.0832 10.3333C22.7165 10.3333 22.3665 10.3333 21.9999 10.3333C18.9057 10.3333 15.9382 11.5625 13.7503 13.7504C11.5624 15.9383 10.3332 18.9058 10.3332 22ZM27.8999 30.3333L27.9832 30.4167H21.9999C20.0721 30.4132 18.2051 29.7415 16.7171 28.516C15.229 27.2905 14.2118 25.5869 13.8389 23.6956C13.4659 21.8042 13.7602 19.8421 14.6717 18.1434C15.5831 16.4447 17.0553 15.1145 18.8375 14.3795C20.6196 13.6445 22.6015 13.5501 24.4454 14.1124C26.2894 14.6747 27.8813 15.8589 28.9501 17.4632C30.0189 19.0676 30.4984 20.9929 30.3069 22.9112C30.1154 24.8294 29.2647 26.6219 27.8999 27.9833C27.5858 28.291 27.4061 28.7104 27.3999 29.15C27.4008 29.3705 27.4454 29.5886 27.5313 29.7918C27.6171 29.9949 27.7424 30.179 27.8999 30.3333Z'
									fill='#E2F0FF'
								/>
							</svg>
							<p className='w-100 fw-500 mt-1'>Omnicanal</p>
						</div>
						<div className='features-grid-item mobile-full-width py-3 justify-content-center align-items-center'>
							<svg viewBox='0 0 28 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M22.3332 0.333344H5.6665C4.34042 0.333344 3.06865 0.860128 2.13097 1.79781C1.19329 2.73549 0.666504 4.00726 0.666504 5.33334V28.6667C0.666504 29.9928 1.19329 31.2645 2.13097 32.2022C3.06865 33.1399 4.34042 33.6667 5.6665 33.6667H22.3332C23.6593 33.6667 24.931 33.1399 25.8687 32.2022C26.8064 31.2645 27.3332 29.9928 27.3332 28.6667V5.33334C27.3332 4.00726 26.8064 2.73549 25.8687 1.79781C24.931 0.860128 23.6593 0.333344 22.3332 0.333344ZM23.9998 28.6667C23.9998 29.1087 23.8242 29.5326 23.5117 29.8452C23.1991 30.1578 22.7752 30.3333 22.3332 30.3333H5.6665C5.22448 30.3333 4.80055 30.1578 4.48799 29.8452C4.17543 29.5326 3.99984 29.1087 3.99984 28.6667V5.33334C3.99984 4.89132 4.17543 4.46739 4.48799 4.15483C4.80055 3.84227 5.22448 3.66668 5.6665 3.66668H22.3332C22.7752 3.66668 23.1991 3.84227 23.5117 4.15483C23.8242 4.46739 23.9998 4.89132 23.9998 5.33334V28.6667ZM15.1832 24.15C14.9907 23.9493 14.7512 23.8 14.4863 23.7156C14.2214 23.6312 13.9396 23.6143 13.6665 23.6667L13.3665 23.7667C13.2603 23.8032 13.1594 23.8536 13.0665 23.9167L12.8165 24.1167C12.6648 24.2752 12.5458 24.4621 12.4665 24.6667C12.3389 24.9702 12.304 25.3047 12.3663 25.628C12.4286 25.9513 12.5852 26.249 12.8165 26.4833C12.9823 26.63 13.1673 26.7534 13.3665 26.85C13.6716 26.9756 14.0071 27.0077 14.3305 26.9425C14.6539 26.8772 14.9507 26.7174 15.1832 26.4833C15.4871 26.177 15.6603 25.7648 15.6665 25.3333C15.6721 25.1147 15.6265 24.8978 15.5332 24.7C15.4488 24.498 15.3304 24.312 15.1832 24.15Z'
									fill='#E2F0FF'
								/>
							</svg>

							<p className='w-100 fw-500 mt-1 '>Envíos masivos</p>
						</div>
					</div>
				</Col>
				<Col sm={12} lg={6} className='px-0'>
					<img className='features-image my-5 my-lg-0 ' src='/images/mkUp.png' alt='Marketing Picture' />
				</Col>
			</Row>
		</section>
	);
};
