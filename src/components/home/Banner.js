import Image from "next/image";
import BannerObj from "@assets/images/circle-dog.png";
import WelcomeText from "@assets/images/welcome-text.png";
import ShadowMany from "@assets/images/shadowmany.png";
import BoneLg from "@assets/images/bone-lg.png";
import Foot from "@assets/images/foot.png";

const Banner = () => (
	<div id="home" className="py-20 relative sm:pb-10">
		<Image
			src={BoneLg}
			alt="Bone"
			width={96}
			className="absolute right-[10%] top-[10%] rotate-[-90deg] lg:max-w-[50px]"
		/>
		<Image
			src={BoneLg}
			alt="Bone"
			width={96}
			className="absolute left-[10%] bottom-1/3 lg:max-w-[50px]"
		/>
		<div className="container">
			<div className="relative">
				<div className="text-[200px] xxl:text-[160px] xl:text-[130px] lg:text-[100px] md:text-[70px] sm:text-[45px] absolute top-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap text-center leading-none text-white uppercase [text-shadow:_0_2px_2px_rgb(255,255,255)]">
					是曼玉不是鳗鱼
				</div>
				<Image
					src={WelcomeText}
					alt="Welcome"
					width={708}
					className="mx-auto relative z-10 -mb-[150px] xl:max-w-[500px] xl:-mb-[100px] lg:-mb-[60px] lg:max-w-[300px] sm:max-w-[220px]"
				/>
				<Image
					src={BannerObj}
					alt="Banner obj"
					width={632}
					className="mx-auto relative z-10 xl:max-w-[450px] lg:max-w-[300px] sm:max-w-[200px]"
				/>
				<Image
					src={ShadowMany}
					alt="Shadow"
					width={700}
					className="mx-auto absolute -bottom-[90px] lg:-bottom-[80px] xl:max-w-[600px] sm:max-w-[200px] sm:-bottom-[24px] lg:max-w-[500px] left-1/2 -translate-x-1/2 z-[9]"
				/>
			</div>

			<Image src={Foot} alt="Foot" width={1626} className="mx-auto" />
		</div>
	</div>
);
export default Banner;
