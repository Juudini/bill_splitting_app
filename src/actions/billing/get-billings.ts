'user server';
import prisma from '@/lib/prisma';

export const getBillings = async () => {
  try {
    const billings = await prisma.billing.findMany({
      orderBy: { createdAt: 'asc' },
    });

    return billings;
  } catch (err) {
    console.log(err);
    return [];
  }
};
