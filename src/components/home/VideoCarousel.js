import Marquee from "react-fast-marquee";
import { TikTok } from "react-tiktok";

const VideoCarousel = () => {
	// List of TikTok videos to display in the carousel
	const videos = [
		{
			id: 1,
			url: "https://www.tiktok.com/@littlemanyu/video/7398468976205892906?q=manyu&t=1752092572488",
		},
		{
			id: 2,
			url: "https://www.tiktok.com/@littlemanyu/video/7500893192947092779?q=manyu&t=1752092572488",
		},
		{
			id: 3,
			url: "https://www.tiktok.com/@littlemanyu/video/7274559122576559402?q=manyu&t=1752092572488",
		},
		{
			id: 4,
			url: "https://www.tiktok.com/@manyudog/video/7412439605745667371?q=manyu&t=1752092572488",
		},
		{
			id: 5,
			url: "https://www.tiktok.com/@littlemanyu/video/7265262625431358766?q=manyu&t=1752092572488",
		},
		{
			id: 6,
			url: "https://www.tiktok.com/@littlemanyu/video/7262386082057096491?q=manyu&t=1752092572488",
		},
		{
			id: 7,
			url: "https://www.tiktok.com/@manyutheshiba/video/7405804610151124257?q=manyu&t=1752092572488",
		},
		{
			id: 8,
			url: "https://www.tiktok.com/@manyudog/video/7500270362891078958?q=manyu&t=1752092572488",
		},
	];

	return (
		<div className="py-16">
			<Marquee gradient={false} speed={40}>
				{videos.map((video) => (
					<div
						key={video.id}
						className="mx-3 w-[220px] h-[400px] bg-gray-900/50 border border-gray-700 rounded-xl flex items-center justify-center overflow-hidden"
					>
						<div className="scale-[0.5] w-[440px] h-[800px]">
							<TikTok url={video.url} />
						</div>
					</div>
				))}
			</Marquee>
		</div>
	);
};

export default VideoCarousel; 