import { PrismaClient } from '@prisma/client';
import { env } from '@/env.mjs';

function makePrisma() {
	return new PrismaClient();
}

const globalForPrisma = global as unknown as {
	prisma: ReturnType<typeof makePrisma>;
};

// export const prisma = globalForPrisma.prisma ?? makePrisma();
const prisma = globalForPrisma.prisma ?? makePrisma();

if (env.APP_ENV !== 'production') {
	globalForPrisma.prisma = makePrisma();
}

// @ts-ignore
export default prisma as PrismaClient;
