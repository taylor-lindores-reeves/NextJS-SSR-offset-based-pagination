import {
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
	Card,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import React from 'react';

import { type Listing } from '@prisma/client';
import { formatCurrency } from '@/lib/format-currency';

export const ListingCard = (props: Listing) => {
	const { title, description, image, price } = props;

	return (
		<Card className="overflow-hidden rounded-xl bg-white shadow-lg dark:bg-zinc-800">
			<div className="relative">
				<img
					alt="Auction item"
					className="aspect-[3/2] h-64 w-full object-cover"
					src={image}
					width="420"
					height="280"
				/>
			</div>
			<CardContent className="p-6">
				<CardTitle className="mb-2 text-2xl font-semibold">
					{title}
				</CardTitle>
				<CardDescription className="mb-4 text-gray-700 dark:text-zinc-100">
					{description}
				</CardDescription>
				<div className="mb-4">
					<span className="text-lg font-semibold">Price:</span>
					<span className="ml-2 text-2xl font-bold text-green-500">
						{formatCurrency(price)}
					</span>
				</div>
			</CardContent>
			<CardFooter className="bg-gray-50 p-6 dark:bg-zinc-900">
				<Button className="w-full" variant="secondary">
					Buy Now
				</Button>
			</CardFooter>
		</Card>
	);
};
