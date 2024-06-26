'use client';
import BillingLib from '@/components/billing-lib/BillingLib';
import Billing from '@/components/billing/Billing';
import Hero from '@/components/hero/Hero';
import { NextUIProvider } from '@nextui-org/react';

export default function Home() {
  return (
    <NextUIProvider className="bg-orange-100/10">
      <main className="space-y-20 lg:space-y-24 md:mx-16 lg:mx-24 xl:mx-32 mb-32">
        <Hero />
        <Billing />
        <BillingLib />
      </main>
    </NextUIProvider>
  );
}
