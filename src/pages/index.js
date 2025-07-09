import Header from "@components/common/Header";
import About from "@components/home/About";
import Banner from "@components/home/Banner";
import Marquee from "react-fast-marquee";
import PageBg from "@assets/images/page-bg.png";
import Image from "next/image";
import Tokenomics from "@components/home/Tokenomics";
import Roadmap from "@components/home/Roadmap";
import Info from "@components/home/Info";
import Footer from "@components/common/Footer";

const Home = () => {
	return (
		<div className="relative bg-[#080808] min-h-screen">
			<Image
				src={PageBg}
				alt="PageBg"
				fill
				className="w-full h-full object-cover"
			/>
			<div className="bg-white py-2.5">
				<Marquee>
					<div className="text-base text-black mx-9 lg:mx-5 md:mx-3 font-bold">
						WE ARE LIL MANYU
					</div>
					<div className="text-base text-black mx-9 lg:mx-5 md:mx-3 font-bold">
						0xdnsf0wienf9funw0emmf490weoi
					</div>
					<div className="text-base text-black mx-9 lg:mx-5 md:mx-3 font-bold">
						WE ARE LIL MANYU
					</div>
					<div className="text-base text-black mx-9 lg:mx-5 md:mx-3 font-bold">
						0xdnsf0wienf9funw0emmf490weoi
					</div>
					<div className="text-base text-black mx-9 lg:mx-5 md:mx-3 font-bold">
						WE ARE LIL MANYU
					</div>
					<div className="text-base text-black mx-9 lg:mx-5 md:mx-3 font-bold">
						0xdnsf0wienf9funw0emmf490weoi
					</div>
				</Marquee>
			</div>
			<div className="relative z-10">
				<Header />
				<div className="relative">
					<Banner />
					<About />
					<Tokenomics />
					<Roadmap />
					<Info />
				</div>
				<div className="bg-gradient-to-t from-[#2d3f49] to-black/10 absolute bottom-0 w-full h-[500px] sm:h-[200px]" />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
