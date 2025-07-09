import React from "react";
import Image from "next/image";
import BoneLg from "@assets/images/bone-lg.png";
import RoadmapLeft from "@assets/images/roadmap-left.png";
import RoadmapRight from "@assets/images/rihgt-img.png";
import Arrow from "@assets/images/arrow.png";
import BorderImg from "@assets/images/border-img.png";
import Dog from "@assets/images/dog.png";

const youngManyu = [
	"Launch",
	"Whitepaper",
	"Manyu Buy Bot Launch",
	"CoinMarketCap Listing",
	"CoinGecko Listing",
	"250 Holders",
	"Ongoing Marketing",
];

const bigManyu = [
	"Manyu Calls Launch",
	"Blocki Global Takeover",
	"Blocki V2 Launch",
	"V2 Whitepaper",
	"T1 CEX Listings",
	"1000 Holders",
	"Ongoing Marketing",
];

const Roadmap = () => {
	return (
		<div id="roadmap" className="mb-20 overflow-hidden relative">
			<div className="container">
				<div className="flex items-center justify-center">
					<Image
						src={BoneLg}
						alt="Bone"
						width={136}
						className="xl:max-w-[100px] xl:mx-auto xl:w-full lg:max-w-[60px] md:max-w-[50px] md:mb-4"
					/>
					<Image
						src={BoneLg}
						alt="Bone"
						width={136}
						className="absolute -left-[50px] bottom-[200px] rotate-[60deg] xl:hidden"
					/>
					<Image
						src={BoneLg}
						alt="Bone"
						width={136}
						className="absolute -right-[80px] top-[200px] rotate-[60deg] md:max-w-[90px] md:-right-[60px]"
					/>
				</div>
				<div className="flex items-center justify-center gap-16 mb-24">
					<div>
						<Image
							src={RoadmapLeft}
							alt="RoadmapLeft"
							width={367}
							className="sm:hidden"
						/>
					</div>
					<div className="text-center">
						<h2 className="text-[116px] xl:text-[80px] lg:text-[60px] font-gilton leading-none text-center text-white">
							Roadmap
						</h2>
						<p className="text-[38px] xl:text-[26px] lg:text-[18px] font-gilton leading-none text-white mb-10 sm:mb-4">
							Young Manyu to Big Manyu!
						</p>
						<Image
							src={Arrow}
							alt="Arrow"
							width={300}
							className="mx-auto"
						/>
					</div>
					<div>
						<Image
							src={RoadmapRight}
							alt="RoadmapRight"
							width={438}
							className="sm:hidden"
						/>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-20 xxl:gap-10 lg:gap-5 md:grid-cols-1">
					<div className="relative p-20 xxl:p-16 xl:p-12 lg:p-8">
						<Image src={BorderImg} alt="Bone" fill />
						<h3 className="font-gilton text-[44px] xl:text-[38px] lg:text-[28px] leading-none mb-1 text-white">
							Young Manyu
						</h3>
						<h4 className="font-leviMarker text-[48px] lg:text-[40px] leading-none mb-12 sm:mb-6 text-white">
							(Short Term)
						</h4>
						<ul className="flex gap-8 flex-col lg:gap-5">
							{youngManyu.map((item, index) => {
								return (
									<li
										key={index}
										className="text-white text-2xl xl:text-xl lg:text-lg font-futura flex items-center gap-3"
									>
										<Image
											src={BoneLg}
											alt="Bone"
											width={34}
										/>
										{item}
									</li>
								);
							})}
						</ul>
					</div>
					<div className="relative p-20 xxl:p-16 xl:p-12 lg:p-8">
						<Image src={BorderImg} alt="Bone" fill />
						<Image
							src={Dog}
							alt="Dog"
							width={238}
							className="absolute right-0 bottom-0 xl:max-w-[150px] lg:max-w-[100px]"
						/>
						<h3 className="font-gilton text-[44px] xl:text-[38px] lg:text-[28px] leading-none mb-1 text-white">
							Big Manyu
						</h3>
						<h4 className="font-leviMarker text-[48px] lg:text-[40px] leading-none mb-12 sm:mb-6 text-white">
							(Long Term)
						</h4>
						<ul className="flex gap-8 flex-col lg:gap-5">
							{bigManyu.map((item, index) => {
								return (
									<li
										key={index}
										className="text-white text-2xl xl:text-xl lg:text-lg font-futura flex items-center gap-3"
									>
										<Image
											src={BoneLg}
											alt="Bone"
											width={34}
										/>
										{item}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Roadmap;
