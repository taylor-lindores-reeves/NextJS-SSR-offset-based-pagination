import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	await prisma.$queryRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE`;
	await prisma.$queryRaw`TRUNCATE TABLE "listings" RESTART IDENTITY CASCADE`;

	// Create a sample user
	const user = await prisma.user.upsert({
		where: { email: 'john@example.com' },
		update: {},
		create: {
			email: 'john@example.com',
			name: 'John',
		},
	});

	// Create 10 sample motor items
	const listings: Prisma.ListingCreateInput[] = [];
	for (let i = 1; i <= 50; i++) {
		listings.push({
			title: `Listing ${i}`,
			description: `This is the description for listing ${i}`,
			image: `https://fakeimg.pl/410x230/?text=${i}`,
			price: i * 100,
			endDate: new Date(Date.now() + 1000 * 60 * 60),
			seller: {
				connect: {
					id: user.id,
				},
			},
		});
	}

	await prisma.$transaction(
		listings.map((data) => prisma.listing.create({ data })),
	);
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
