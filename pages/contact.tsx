import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Contact: NextPage = () => {
	return (
		<>
			<Head>
				<title>contact | scybernaut</title>
			</Head>
			<div className="min-w-1/3 mx-auto md:mb-8 p-6">
				<h2 className="text-2xl font-bold text-gray-500 dark:text-gray-400 mb-2 opacity-0 animate-fly-in animation-delay-100">
					contact
				</h2>
				<h1 className="text-5xl font-bold mb-8 opacity-0 animate-fly-in animation-delay-200">scybernaut</h1>
				<ul className="space-y-3 opacity-0 animate-fly-in animation-delay-300">
					<li>
						<span>twitter: </span>
						<a
							className="text-blue-600 dark:text-blue-400 underline"
							href="https://twitter.com/scybernaut"
							target="_blank"
							rel="noreferrer"
						>
							@scybernaut
						</a>
					</li>
					<li>
						<span>email: </span>
						<span className="font-mono bg-gray-200 dark:bg-gray-800 p-1 rounded">
							public at scybernaut dot me
						</span>
					</li>
				</ul>
				<Link
					href="/"
					aria-label="back"
				>
					<a className="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-inherit hover:bg-gray-200 dark:hover:bg-gray-800 px-2 py-1 rounded-md transition-colors inline-block font-medium mt-12 opacity-0 animate-fly-in animation-delay-400">
						« back
					</a>
				</Link>
			</div>
		</>
	);
};
export default Contact;