import Head from "next/head";

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
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
					<img
						className="-z-10 block dark:hidden absolute top-0 left-0 select-none align-top max-w-2/3 max-h-full min-w-1/4 min-h-1/4 lg:min-h-1/2"
						src="/resources/blob-tl-white.svg"
						draggable="false"
						aria-hidden="true"
					/>
					<img
						className="-z-10 block dark:hidden absolute bottom-0 right-0 select-none align-bottom max-w-2/3 max-h-full min-w-1/4 min-h-1/4 lg:min-h-1/2"
						src="/resources/blob-br-white.svg"
						draggable="false"
						aria-hidden="true"
					/>
					<img
						className="-z-10 hidden dark:block absolute top-0 left-0 select-none align-top max-w-2/3 max-h-full min-w-1/4 min-h-1/4 lg:min-h-1/2"
						src="/resources/blob-tl-dark.svg"
						draggable="false"
						aria-hidden="true"
					/>
					<img
						className="-z-10 hidden dark:block absolute bottom-0 right-0 select-none align-bottom max-w-2/3 max-h-full min-w-1/4 min-h-1/4 lg:min-h-1/2"
						src="/resources/blob-br-dark.svg"
						draggable="false"
						aria-hidden="true"
					/>
					{children}
				</div>
			</div>
		</>
	);
};
