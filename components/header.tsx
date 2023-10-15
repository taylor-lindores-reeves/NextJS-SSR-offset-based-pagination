import React from 'react';
import Link from 'next/link';

import { Input } from '@/components/ui/input';

export const Header = () => {
	return (
		<header className="flex items-center justify-between border-b-2 p-6">
			<Link className="flex items-center gap-2" href="#">
				<span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
					NextJS Offset-Based SSR Pagination
				</span>
			</Link>
			<nav className="hidden gap-6 md:flex">
				<Link
					className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
					href="#"
				>
					Products
				</Link>
				<Link
					className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
					href="#"
				>
					About
				</Link>
				<Link
					className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
					href="#"
				>
					Contact
				</Link>
			</nav>
			<form className="relative w-64">
				<svg
					className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400"
					fill="none"
					height="24"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="11" cy="11" r="8" />
					<path d="m21 21-4.3-4.3" />
				</svg>
				<Input
					className="w-full pl-8"
					placeholder="Search products..."
					type="search"
				/>
			</form>
		</header>
	);
};
