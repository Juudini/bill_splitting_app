'use server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

const billingSchema = z.object({
  friends: z.array(z.string()),
  amount: z.number(),
  category: z.string(),
  billPerFriend: z.number(),
});

export const createBilling = async (formData: any) => {
  const parsedBillingData = billingSchema.parse(formData);

  try {
    const dataFromDb = prisma.billing.create({
      data: parsedBillingData,
    });
    return { status: true, dataFromDb };
  } catch (error) {
    return {
      status: false,
      message: 'Error creating billing data. Please try again.',
    };
  }
};
