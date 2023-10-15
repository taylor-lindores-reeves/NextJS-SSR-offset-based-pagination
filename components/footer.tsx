import React from 'react';
import Link from 'next/link';

export const Footer = () => {
	return (
		<footer className="flex items-center justify-between border-t-2 p-6">
			<div className="flex gap-6">
				<Link
					className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
					href="#"
				>
					Privacy Policy
				</Link>

				<Link
					className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
					href="#"
				>
					Terms of Service
				</Link>
			</div>
			<div className="flex gap-4">
				<svg
					className="h-6 w-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
					fill="none"
					height="24"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 24"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
				</svg>
			</div>
		</footer>
	);
};
