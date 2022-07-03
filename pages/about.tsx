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
				className="absolute top-0 left-0 block object-cover align-top select-none -z-10 dark:hidden max-w-2/5 max-h-1/4 md:max-h-full min-w-1/4 lg:min-h-2/5 xl:min-h-1/2"
				src="../resources/blob-tl-white.svg"
				draggable="false"
				aria-hidden="true"
			/>
			<img
				className="absolute bottom-0 right-0 block object-cover max-h-full align-bottom select-none -z-10 dark:hidden max-w-2/3 min-w-1/4 min-h-1/4 lg:min-h-1/2"
				src="../resources/blob-br-white.svg"
				draggable="false"
				aria-hidden="true"
			/>
			<img
				className="absolute top-0 left-0 hidden object-cover align-top select-none -z-10 dark:block max-w-2/5 max-h-1/4 md:max-h-full min-w-1/4 lg:min-h-2/5 xl:min-h-1/2"
				src="../resources/blob-tl-dark.svg"
				draggable="false"
				aria-hidden="true"
			/>
			<img
				className="absolute bottom-0 right-0 hidden object-cover max-h-full align-bottom select-none -z-10 dark:block max-w-2/3 min-w-1/4 min-h-1/4 lg:min-h-1/2"
				src="../resources/blob-br-dark.svg"
				draggable="false"
				aria-hidden="true"
			/>
			<div className="p-6 mx-auto min-w-1/3 md:mb-8">
				<h2 className="mb-2 text-2xl font-bold text-gray-500 opacity-0 dark:text-gray-400 animate-fly-in animation-delay-100">
					about
				</h2>
				<h1 className="mb-2 text-5xl font-bold opacity-0 animate-fly-in animation-delay-200">scybernaut</h1>
				<p className="mb-8 opacity-0 animate-fly-in animation-delay-200">/ˈsaɪbɚˌnɔt/</p>
				<p className='opacity-0 animate-fly-in animation-delay-300'>
					Me, who is fascinated by stuff about computer (and probably
					linguistics too).
				</p>
				<p className="mt-8 opacity-0 animate-fly-in animation-delay-300">Programming languages I know:</p>
				<ul className="flex flex-wrap mt-1 text-sm font-medium opacity-0 animate-fly-in animation-delay-300">
					<li
						className="inline px-2 py-1 mt-1 mr-2 bg-yellow-400 rounded-md text-dark"
					>
						JavaScript
					</li>
					<li
						className="inline px-2 py-1 mt-1 mr-2 text-white rounded-md bg-sky-600"
					>
						TypeScript
					</li>
					<li
						className="inline px-2 py-1 mt-1 mr-2 text-white bg-orange-500 rounded-md"
					>
						Java
					</li>
					<li
						className="inline px-2 py-1 mt-1 mr-2 text-white rounded-md bg-sky-800"
					>
						C++
					</li>
				</ul>
				<Link
					href="/"
					aria-label="back"
				>
					<a className="inline-block px-2 py-1 mt-12 font-medium text-gray-600 transition-colors rounded-md hover:text-gray-800 dark:text-gray-200 dark:hover:text-inherit hover:bg-gray-200 dark:hover:bg-gray-800 opacity-0 animate-fly-in animation-delay-400">
						« back
					</a>
				</Link>
			</div>
		</LayoutNoImage>
	);
};
export default About;