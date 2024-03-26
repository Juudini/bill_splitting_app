'use server';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const billingSchema = z.object({
  friends: z.array(z.string()),
  amount: z.number(),
  category: z.string(),
  billPerFriend: z.number(),
});

export const createBilling = async (formData: any) => {
  try {
    const dataFromDb = prisma.billing.create({
      data: formData,
    });
    return { status: true, dataFromDb };
  } catch (error) {
    return {
      status: false,
      message: 'Error creating billing data. Please try again.',
    };
  }
};
