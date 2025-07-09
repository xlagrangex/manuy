import Image from "next/image";
import FooterLogo from "@assets/images/footer-logo.png";
import Link from "next/link";

const Footer = () => (
	<footer className="relative mt-24 z-10 pb-20 xl:mt-20 lg:pb-10">
		<div className="container">
			<div className="flex flex-col items-center text-center">
				<div className="text-[126px] xl:text-[100px] lg:text-[70px] text-white font-gilton leading-none relative mb-5">
					Manyu{" "}
					<span className="text-[39px] text-white absolute top-0 left-[120px] xl:left-[90px] -mt-5 lg:text-[30px] lg:left-[68px] lg:-mt-3.5">
						Lil’
					</span>
				</div>
				<Link
					href="mailto:lilmanyu@proton.com"
					className="text-base text-white font-gilton mb-8 lg:mb-4"
				>
					lilmanyu@proton.com
				</Link>
				<p className="text-lg text-white">
					Copyright © 2023 Lil Manyu. All Rights Reserved.
				</p>
			</div>
		</div>
	</footer>
);
export default Footer;
