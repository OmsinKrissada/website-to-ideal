import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import LayoutNoImage from '../components/noimglayout';

const About: NextPage = () => {
	return (
		<LayoutNoImage>
			<Head>
				<title>about | scybernaut</title>
			</Head>
			<img
				className="-z-10 block dark:hidden absolute top-0 left-0 select-none object-cover align-top max-w-2/5 max-h-1/4 md:max-h-full min-w-1/4 lg:min-h-2/5 xl:min-h-1/2"
				src="../resources/blob-tl-white.svg"
				draggable="false"
				aria-hidden="true"
			/>
			<img
				className="-z-10 block dark:hidden absolute bottom-0 right-0 select-none object-cover align-bottom max-w-2/3 max-h-full min-w-1/4 min-h-1/4 lg:min-h-1/2"
				src="../resources/blob-br-white.svg"
				draggable="false"
				aria-hidden="true"
			/>
			<img
				className="-z-10 hidden dark:block absolute top-0 left-0 select-none object-cover align-top max-w-2/5 max-h-1/4 md:max-h-full min-w-1/4 lg:min-h-2/5 xl:min-h-1/2"
				src="../resources/blob-tl-dark.svg"
				draggable="false"
				aria-hidden="true"
			/>
			<img
				className="-z-10 hidden dark:block absolute bottom-0 right-0 select-none object-cover align-bottom max-w-2/3 max-h-full min-w-1/4 min-h-1/4 lg:min-h-1/2"
				src="../resources/blob-br-dark.svg"
				draggable="false"
				aria-hidden="true"
			/>
			<div className="min-w-1/3 mx-auto md:mb-8 p-6">
				<h2 className="text-2xl font-bold text-gray-500 dark:text-gray-400 mb-2">
					about
				</h2>
				<h1 className="text-5xl font-bold mb-2">scybernaut</h1>
				<p className="mb-8">/ˈsaɪbɚˌnɔt/</p>
				<p>
					Me, who is fascinated by stuff about computer (and probably
					linguistics too).
				</p>
				<p className="mt-8">Programming languages I know:</p>
				<ul className="mt-1 flex flex-wrap font-medium text-sm">
					<li
						className="inline mr-2 mt-1 px-2 py-1 rounded-md bg-yellow-400 text-dark"
					>
						JavaScript
					</li>
					<li
						className="inline mr-2 mt-1 px-2 py-1 rounded-md bg-sky-600 text-white"
					>
						TypeScript
					</li>
					<li
						className="inline mr-2 mt-1 px-2 py-1 rounded-md bg-orange-500 text-white"
					>
						Java
					</li>
					<li
						className="inline mr-2 mt-1 px-2 py-1 rounded-md bg-sky-800 text-white"
					>
						C++
					</li>
				</ul>
				<Link
					href="/"
					aria-label="back"
				>
					<a className="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-inherit hover:bg-gray-200 dark:hover:bg-gray-800 px-2 py-1 rounded-md transition-colors inline-block font-medium mt-12">
						« back
					</a>
				</Link>
			</div>
		</LayoutNoImage>
	);
};
export default About;