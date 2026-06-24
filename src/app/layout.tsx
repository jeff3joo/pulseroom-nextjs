import Link from "next/link";

export const metadata = {
	title: "Pulse Room",
	description: "Room Based Chatting Website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<header
					style={{
						backgroundColor: "lightblue",
						padding: "1rem",
						minHeight: "5vh",
					}}
				>
					<Link href='/'>Pulse Room</Link>
				</header>
				{children}
				<footer
					style={{
						background: "grey",
						padding: "1rem",
						minHeight: "5vh",
					}}
				>
					<p>Footer</p>
				</footer>
			</body>
		</html>
	);
}
