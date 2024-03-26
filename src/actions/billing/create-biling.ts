'use server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

const billingSchema = z.object({
  friends: z.array(z.string()),
  amount: z.number(),
  category: z.string(),
});

export const createUpdateProduct = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const billingParsed = billingSchema.safeParse(data);

  if (!billingParsed.success) {
    console.log(billingParsed.error);
    return { ok: false };
  }

  const product = billingParsed.data;
  let billing;

  try {
    const prismaTx = await prisma.$transaction(async tx => {
      billing = await tx.billing.create({
        data: {
          friends: product.friends,
          amount: product.amount,
          category: product.category,
        },
      });

      return {
        ok: true,
        billing: billing,
      };
    });
    return prismaTx;
    //revalidatePath('/billings-lib/');
  } catch (error) {
    return {
      ok: false,
      message: 'Revisar los logs, no se pudo actualizar/crear',
    };
  }
};
