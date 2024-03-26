'use client';
import React from 'react';
import { Card, Chip } from '@nextui-org/react';
import { UUID } from 'crypto';

interface BillingCardProps {
  data: {
    id: UUID;
    amount: number;
    friends: string[];
    category: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

const BillingCard: React.FC<BillingCardProps> = ({ data }) => {
  return (
    <>
      <Card className="max-w-md mx-auto p-4 border border-slate-400/65 shadow-xl items-center rounded-tl-[6rem] rounded-br-[6rem] text-orange-400">
        <div className="p-2 pt-4">
          <div className="flex flex-col items-start space-y-4">
            <div className="mb-2 ">
              <p className="inline-block rounded-br-2xl rounded-l-xl bg-gradient-to-tr from-orange-200 via-orange-100 to-transparent border border-gray-100 text-xl hover:scale-105 duration-500 pl-2 pr-2 p-1">
                Category:
              </p>
              <Chip
                variant="faded"
                color="default"
                className="border-none font-bold text-lg bg-transparent text-slate-600"
              >
                {data.category}
              </Chip>
            </div>
            <div className="mb-2">
              <p className="inline-block rounded-br-2xl rounded-l-xl bg-gradient-to-tr from-orange-200 via-orange-100 to-transparent border border-gray-100 text-xl hover:scale-105 duration-500 pl-2 pr-2 p-1">
                Bill Per Friend:
              </p>
              <Chip
                variant="faded"
                color="default"
                className="border-none font-bold text-lg bg-transparent text-slate-600"
              >
                ${data.amount / data.friends.length}
              </Chip>
            </div>
            <div>
              <p className="inline-block rounded-br-2xl rounded-l-xl bg-gradient-to-tr from-orange-200 via-orange-100 to-transparent border border-gray-100 text-xl hover:scale-105 duration-500 pl-2 pr-2 p-1">
                Friends:
              </p>
              <ul className="list-disc pl-6">
                {data.friends.map((friend, index) => (
                  <li key={index} className="text-slate-600">
                    {friend}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Card>
      <div className="relative max-w-fit inline-flex items-center box-border whitespace-nowrap rounded-full shadow-lg shadow-default/50 min-w-unit-6 min-h-6 justify-center text-xl font-semibold rounded-tl-[1px] text-white mb-2 p-4 px-8 border-blue-900/25 bg-blue-600/25 transition duration-300 hover:bg-blue-700/25 hover:border-amber-900/50 hover:scale-105 space-x-2">
        <p className="text-lg font-black text-white">Total Bill:</p>
        <Chip
          variant="faded"
          color="default"
          className="border-none font-bold text-lg bg-white text-slate-500"
        >
          ${data.amount}
        </Chip>
      </div>
    </>
  );
};

export default BillingCard;
