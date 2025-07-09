import Image from "next/image";
import LeftObj from "@assets/images/left-img.png";
import BoneLg from "@assets/images/bone-lg.png";

const About = () => {
	return (
		<div className="-mt-10 relative xl:mb-20">
			<Image
				src={BoneLg}
				alt="Bone"
				width={136}
				className="absolute left-[80px] bottom-0 lg:max-w-[60px] md:-bottom-14 md:left-3"
			/>
			<div className="container">
				<div className="flex gap-16 items-center md:flex-col md:gap-0">
					<div className="flex-1 flex items-center justify-center md:max-w-[400px]">
						<Image
							src={LeftObj}
							alt="Left obj"
							width={754}
							className="mx-auto"
						/>
					</div>
					<div className="max-w-[750px] xl:max-w-[55%] w-full md:max-w-full">
						<div className="text-xl lg:text-lg text-white">
							Nah, Nah, Nah.
						</div>
						<div className="text-xl lg:text-lg text-white mb-5">
							This isn’t just another dog token...
						</div>
						<h2 className="text-[83px] xl:text-[60px] lg:text-[40px] leading-tight text-white font-gilton">
							This is Lil’ Manyu
						</h2>
						<div className="font-leviMarker text-[44px] xl:text-[34px] lg:text-[28px] leading-none text-white mb-6 -rotate-2">
							(sorry Manyu id a lil disracted right now)
						</div>
						<p className="font-sans text-white text-xl xl:text-lg lg:text-base">
							In a world where cryptocurrency is rapidly evolving,
							a new and enchanting player is emerging to capture
							the imagination of investors and enthusiasts alike.
							Little Manyu, a memecoin deeply rooted in the rich
							tapestry of Chinese culture, is set to make waves in
							the cryptocurrency market across Asia and beyond.
							This isn’t just another digital currency; it’s a
							symbol of happiness, innovation, and a bridge
							between the charm of a beloved Chinese dog breed and
							the cutting-edge world of finance.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
