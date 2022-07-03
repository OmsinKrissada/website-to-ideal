import Head from "next/head";

interface LayoutProps {
	children: React.ReactNode;
}

export default function LayoutNoImage({ children }: LayoutProps) {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="../resources/scybernaut-bw-nomargin.ico" sizes="any" />
				<link rel="icon" href="../resources/scybernaut-bw-nomargin-autodark.svg" type="image/svg+xml" />
				<title>scybernaut</title>
			</Head>
			<div className="bg-white text-dark selection:bg-gray-400/50 dark:bg-dark dark:text-white dark:selection:bg-gray-600/50 fixed inset-0 h-full">
				<div className="w-full h-full flex items-center">
					{children}
				</div>
			</div>
		</>
	);
};
