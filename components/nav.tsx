import { NextComponentType, NextPage } from "next";
import Link from "next/link";
import { ComponentProps, FunctionComponent } from "react";


type NavProps = {
	props?: Record<string, any>;
	className?: string;
};

const Nav: FunctionComponent<NavProps> = ({ className }) => {
	return (
		<nav className={className}>
			<ul
				className="md:text-lg h-28 md:h-min md:w-72 flex flex-col md:flex-row items-center justify-between font-medium"
			>
				<li
					className="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-inherit hover:bg-gray-200 dark:hover:bg-gray-800 px-2 py-1 rounded-md transition-colors"
				>
					<Link href="/about">about</Link>
				</li>
				<li
					className="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-inherit hover:bg-gray-200 dark:hover:bg-gray-800 px-2 py-1 rounded-md transition-colors"
				>
					<Link href="https://gitlab.com/scybernaut">gitlab</Link>
				</li>
				<li
					className="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-inherit hover:bg-gray-200 dark:hover:bg-gray-800 px-2 py-1 rounded-md transition-colors"
				>
					<Link href="/contact">contact</Link>
				</li>
			</ul>
		</nav>
	);
};
export default Nav;