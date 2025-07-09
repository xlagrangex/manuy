import React from "react";
import Image from "next/image";
import RoundedBg from "@assets/images/round-bg.png";

const Tokenomics = () => {
	return (
		<div id="tokennomics" className="mb-20">
			<div className="container">
				<h2 className="text-[123px] xl:text-[90px] lg:text-[60px] md:text-[50px] font-gilton leading-none text-center text-white mb-20 xl:mb-16">
					Tokenomics
				</h2>

				<div className="mt-22 flex items-center justify-center gap-28 xxl:gap-10 lg:gap-5 sm:flex-wrap">
					<div className="max-w-[436px] sm:max-w-[250px] w-full flex items-center justify-center relative">
						<Image
							src={RoundedBg}
							alt="RoundedBg"
							className="w-full"
						/>
						<div className="absolute">
							<div className="block text-[74px] xxl:text-[60px] lg:text-[30px] leading-none mb-5 font-gilton text-black text-center">
								Supply
							</div>
							<div className="block text-[125px] xxl:text-[80px] lg:text-[60px] leading-none font-futura text-center text-black">
								10B
							</div>
						</div>
					</div>
					<div className="max-w-[436px] sm:max-w-[250px] w-full flex items-center justify-center relative">
						<Image
							src={RoundedBg}
							alt="RoundedBg"
							className="w-full"
						/>
						<div className="absolute">
							<div className="block text-[74px] xxl:text-[60px] lg:text-[30px] leading-none mb-5 font-gilton text-black text-center">
								Tax
							</div>
							<div className="block text-[125px] xxl:text-[80px] lg:text-[60px] leading-none font-futura text-center text-black">
								1/1
							</div>
						</div>
					</div>
					<div className="max-w-[436px] sm:max-w-[250px] w-full flex items-center justify-center relative">
						<Image
							src={RoundedBg}
							alt="RoundedBg"
							className="w-full"
						/>
						<div className="absolute">
							<div className="block text-[74px] xxl:text-[60px] lg:text-[30px] leading-none mb-5 font-gilton text-black text-center">
								Ticker
							</div>
							<div className="block text-[64px] xxl:text-[50px] lg:text-[30px] leading-none font-futura text-center text-black">
								$MANYU
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tokenomics;
