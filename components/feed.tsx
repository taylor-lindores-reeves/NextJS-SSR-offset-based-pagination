'use server';

import prisma from '@/lib/client';
import React from 'react';
import { PageProps } from '@/app/page';
import { ListingCard } from './listing-card';
import { Pagination } from './pagination';
import { revalidatePath } from 'next/cache';

export type FetchFeedType = typeof fetchFeed;

const PAGE_SIZE = 8;

const fetchFeed = async ({ take = PAGE_SIZE, skip = 0 }) => {
	'use server';

	const results = await prisma.listing.findMany({
		take,
		skip,
		orderBy: {
			price: 'asc',
		},
	});

	const total = await prisma.listing.count();

	revalidatePath('/');

	return {
		data: results,
		metadata: {
			hasNextPage: skip + take < total,
			totalPages: Math.ceil(total / take),
		},
	};
};

export const Feed = async (props: PageProps) => {
	const pageNumber = Number(props?.searchParams?.page || 1); // Get the page number. Default to 1 if not provided.

	const take = PAGE_SIZE;
	const skip = (pageNumber - 1) * take; // Calculate skip based on page number.

	const { data, metadata } = await fetchFeed({ take, skip });

	return (
		<div className="space-y-6 p-6">
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{data.map((listing, i) => (
					<ListingCard {...listing} key={i} />
				))}
			</div>

			<Pagination {...props.searchParams} {...metadata} />
		</div>
	);
};
