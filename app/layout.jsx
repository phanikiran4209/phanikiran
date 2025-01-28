import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
	title: "Phani| Portofolio",
	description:
		"My name is Phani, I'm a web developer and I'm passionate about it. I'm currently studying at vasireddy venkatadri institute of technology.",
	author: "Phanikiran",
	siteUrl: "https://www.phani.my.id",
	applicationName: "Phani",
	keywords: [
		"alvalens",
		"alvalen",
		"alvalen shafel",
		"shafel",
		"alvalen shafelbilyunazra",
		"alvalen shafel bilyunazra",
		"bloodfallen",
		"alvalen porto",
		"alvalen um",
	],
	openGraph: {
		type: "website",
		url: "https://www.Phani.my.id",
		title: "Phani | Portofolio",
		site_name: "Phani | Portofolio",
		description: "My name is Phani, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Phani Portofolio",
			},
		],
		site_name: "Phani | Portofolio",
	},
};


import Chat from "@/components/Chat";

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
	ssr: false,
});



export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<TopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
