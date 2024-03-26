'use client';
import React from 'react';
import { Card, Chip, Select, SelectItem } from '@nextui-org/react';
import { UUID } from 'crypto';

interface BillingCardProps {
  data: {
    id: UUID;
    amount: number;
    friends: string[];
    billPerFriend: number;
    category: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

const BillingCard: React.FC<BillingCardProps> = ({ data }) => {
  return (
    <div className="space-y-2">
      <Card className="mx-auto border border-slate-400/65 shadow-md items-center rounded-tl-[6rem] rounded-br-[6rem] text-orange-400">
        <div className="p-4">
          <div className="flex flex-col items-start">
            <div>
              <p className="inline-block rounded-br-2xl rounded-l-xl text-xl hover:scale-105 duration-500 pl-2 pr-2 p-1">
                Category:
              </p>
              <Chip
                variant="faded"
                color="default"
                className="border-none font-bold text-lg bg-transparent text-slate-600"
              >
                {data.category.charAt(0).toUpperCase() + data.category.slice(1)}
              </Chip>
            </div>
            <div>
              <p className="inline-block rounded-br-2xl rounded-l-xl  text-xl hover:scale-105 duration-500 pl-2 pr-2 p-1">
                Bill Per Friend:
              </p>
              <Chip
                variant="faded"
                color="default"
                className="border-none font-bold text-lg bg-transparent text-slate-600"
              >
                ${data.billPerFriend}
              </Chip>
            </div>
            <div>
              <p className="inline-block rounded-br-2xl rounded-l-xl  text-xl hover:scale-105 duration-500 pl-2 pr-2 p-1">
                Friends:
              </p>
              <div className="flex w-full flex-col gap-2">
                <Select
                  selectionMode="none"
                  placeholder="Show Friends"
                  className="w-52 lg:w-72"
                  color="default"
                  aria-label="Friends"
                >
                  {data.friends.map((friend: string) => (
                    <SelectItem
                      key={friend}
                      value={friend}
                      color="default"
                      className="bg-orange-200"
                      aria-label="Friend Name"
                      aria-labelledby="Friend Name"
                    >
                      {friend}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="relative max-w-fit inline-flex items-center box-border whitespace-nowrap rounded-full shadow-lg shadow-default/50 min-w-unit-6 min-h-6 justify-center text-xl font-semibold rounded-tl-[1px] text-white p-4 px-8 border-blue-900/25 bg-blue-600/25 transition duration-300 hover:bg-blue-700/25 hover:border-amber-900/50 hover:scale-105 space-x-2">
        <p className="text-lg font-black text-white">Total Bill:</p>
        <Chip
          variant="faded"
          color="default"
          className="border-none font-bold text-lg bg-white text-slate-500"
        >
          ${data.amount}
        </Chip>
      </div>
    </div>
  );
};

export default BillingCard;
