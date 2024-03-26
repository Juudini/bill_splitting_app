'use server';
import prisma from '@/lib/prisma';

export const getBillings = async () => {
  try {
    const billings = await prisma.billing.findMany({
      orderBy: { createdAt: 'asc' },
    });
    return billings;
  } catch (err) {
    return {
      status: false,
      message: 'Error fetching billing data. Please try again.',
    };
  }
};
