import Header from "@/componentes/header/Header";
import Footer from "@/componentes/footer/footer";
// import "./global.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: "400",
	subsets: ["latin"],
});

export const metadata = {
	title: "Projeto Front End II",
	description: "Projeto escolar Front End",
	charset: "UTF-8",
	author: "Sofia Melo",
	keywords: "React, CSS, JavaScript, Next.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="pt-BR">
			<body className={poppins.className}>
				<Header />
				<main>{children}</main>
        <Footer/>
			</body>
		</html>
	);
}
