import React from 'react';
import { Sidebar } from '@/components/sidebar';
import { Feed } from '@/components/feed';

export type PageProps = {
	params: { [key: string]: string | string[] | undefined };
	searchParams?: { [key: string]: string | string[] | undefined };
};

const Page = (props: PageProps) => {
	return (
		<div className="flex flex-1 overflow-hidden">
			<Sidebar />
			<main>
				<Feed {...props} />
			</main>
		</div>
	);
};

export default Page;
