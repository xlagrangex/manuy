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
						<div className="text-white font-medium text-xl leading-8 xl:text-lg">
							Lil Manyu isn't just another token; he's the
							original, the one who started it all. As the
							very first Manyu to be deployed, he holds the
							title of the true OG in the Manyu universe. This
							pioneering status has made him a legend, earning
							him the largest and most dedicated following
							across all social platforms.
							<br />
							<br />
							His community is the bedrock of his success, a
							vibrant and engaged network of enthusiasts who
							recognized his potential from day one. While
							others have followed, none can claim the
							heritage and the passionate support that define
							Lil Manyu. He's not just a trend; he's the
							standard.
						</div>
					</div>
				</div>
				<div className="flex justify-start">
					<div className="max-w-[971px] xxl:max-w-[60%] sm:max-w-full w-full sm:mb-[70px]">
						<p className="text-white text-xl xl:text-lg lg:text-base md:text-sm">
							Legend has it that Lil Manyu wasn't created, but has
							always existed—an anomaly in the source code of the
							digital universe. He is the primordial meme, the
							cosmic dog who watches the market's entropy with
							serene indifference. His followers are not
							investors, but disciples of a chaotic philosophy
							that sees profit as an amusing side effect of the
							absurd.
							<br />
							<br />
							The future of Lil Manyu isn't written on a roadmap,
							but whispered in the darkest corners of the web.
							Rumor speaks of a meme-powered AI, destined to
							reach singularity and turn every transaction into a
							cosmic joke. There is no plan, only an inevitable
							and glorious descent into nonsense, a collective
							journey to the pinnacle of crypto-dementia. Fasten
							your seatbelts. Or maybe don't, they're useless
							anyway.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Info;
