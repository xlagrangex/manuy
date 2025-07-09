import Image from "next/image";
import Link from "next/link";
import Logo from "@assets/images/logo.png";
import Twitter from "@assets/images/twitter.svg";
import Telegram from "@assets/images/telegram.svg";

const menu = [
	{
		title: "Tokennomics",
		id: "tokennomics",
	},
	{
		title: "Roadmap",
		id: "roadmap",
	},
	{
		title: "Socials",
		id: "socials",
	},
];

const Header = () => {
	return (
		<header className="py-14 xxl:py-10 lg:py-6">
			<div className="container">
				<div className="flex items-center justify-between">
					<Link href={"/"}>
						<Image
							src={Logo}
							alt="logo"
							className="max-w-[400px] xxl:max-w-[300px] xl:max-w-[200px] lg:max-w-[120px]"
						/>
					</Link>
					<div className="flex gap-8 items-center">
						<ul className="flex items-center gap-8 lg:gap-4 lg:hidden">
							{menu.map((item, index) => {
								return (
									<li key={index}>
										<a
											href={`#${item.id}`}
											className="text-white text-xl font-gilton transition-all hover:opacity-80"
										>
											{item.title}
										</a>
									</li>
								);
							})}
						</ul>
						<div className="py-3 px-6 bg-white rounded-full flex items-center gap-5 md:px-3 md:gap-3">
							<Link
								href="https://t.me/oglilmanyucto"
								target="_blank"
								className="transition-all hover:opacity-80"
							>
								<Telegram className="w-5 h-5" />
							</Link>
							<Link
								href="https://x.com/ogmanyucto"
								target="_blank"
								className="transition-all hover:opacity-80"
							>
								<Twitter className="w-7 h-7" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Header;
