import Image from "next/image";
import Cat from "@assets/images/cat-img.png";
import Dog from "@assets/images/dog-left.png";

const Info = () => {
	return (
		<div className="relative py-[260px] xxl:py-[100px] xl:pt-0">
			<Image
				src={Cat}
				alt="Cat"
				width={1240}
				className="absolute left-0 top-0 xxl:max-w-[800px] xl:max-w-[600px] md:max-w-[400px] sm:max-w-full"
			/>
			<Image
				src={Dog}
				alt="Dog"
				width={1920}
				className="absolute right-0 bottom-0 xl:max-w-[800px] md:max-w-[600px]"
			/>
			<div className="container relative z-10">
				<div className="flex justify-end">
					<div className="max-w-[971px] xxl:max-w-[60%] sm:max-w-full sm:mt-[250px] w-full mb-[240px] xl:mb-[100px] sm:mb-[50px]">
						<p className="text-white text-xl xl:text-lg lg:text-base md:text-sm">
							From the very beginning, Little Manyu is designed to
							ensure a fair and equitable entry into the crypto
							space. The introduction of controlled sell and buy
							taxes during its initial phase is a thoughtful
							strategy to maintain market equilibrium and protect
							against the common pitfalls of price manipulation.
							<br />
							This approach not only builds trust but also
							provides a stable platform for early adopters to
							thrive. <br />
							<br />
							But the true essence of Little Manyu lies in its
							community. The team behind this unique
							cryptocurrency is passionately committed to creating
							an engaging, interactive network of crypto
							enthusiasts. <br />
							From diverse online campaigns to community events
							and collaborative projects, Little Manyu is
							fostering a space where every member feels valued
							and connected. This sense of belonging is what sets
							Little Manyu apart, making it more than just a
							cryptocurrency, but a community-driven movement.
						</p>
					</div>
				</div>
				<div className="flex justify-start">
					<div className="max-w-[971px] xxl:max-w-[60%] sm:max-w-full w-full sm:mb-[70px]">
						<p className="text-white text-xl xl:text-lg lg:text-base md:text-sm">
							Adding an artistic flair to its portfolio, Little
							Manyu will soon introduce an exclusive NFT
							collection. Crafted by a prominent Chinese digital
							artist, these NFTs are not just visually stunning
							but also offer tangible benefits to their holders.
							These digital artworks symbolize the spirit of
							Little Manyu, granting owners special perks that
							enhance the token's value and provide access to
							exclusive events and decision-making privileges.
							<br />
							<br />
							Little Manyu's vision extends far beyond its current
							offerings. The roadmap is dotted with ambitious
							plans, including forging partnerships with leading
							exchanges, creating limited edition merchandise, and
							hosting global community events. Perhaps most
							intriguing is the development of an AI assistant
							that embodies the collective personality and crypto
							knowledge of the Little Manyu community, a testament
							to the project's commitment to innovation and user
							engagement.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Info;
