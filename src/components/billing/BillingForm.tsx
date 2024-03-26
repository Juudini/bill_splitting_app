'use client';
import { Chip, Input } from '@nextui-org/react';
import React, { useState, FormEvent } from 'react';
import SelectCategories from './SelectCategories';
import AddFriends from './AddFriends';

interface Friend {
  name: string;
}

interface FormData {
  totalAmount: number;
  friends: Friend[];
  category: string;
}

const BillingForm: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    totalAmount: 0,
    friends: [],
    category: 'others',
  });

  const handleFriendSelectionChange = (selectedFriends: Friend[]) => {
    setFormData({
      ...formData,
      friends: selectedFriends,
    });
  };

  const handleCategorySelectionChange = (selectedCategory: string) => {
    setFormData({
      ...formData,
      category: selectedCategory,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const totalFriends = formData.friends.length;
    const billPerFriend = formData.totalAmount / (totalFriends + 1);

    const billingData = {
      totalAmount: formData.totalAmount,
      friends: formData.friends,
      category: formData.category,
      billPerFriend: billPerFriend,
    };
    localStorage.setItem('billingData', JSON.stringify(billingData));

    const existingBillings = JSON.parse(
      localStorage.getItem('myBillings') ?? '[]',
    );
    existingBillings.push(billingData);
    localStorage.setItem('myBillings', JSON.stringify(existingBillings));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xs mx-auto space-y-4">
      <SelectCategories onSelectionChange={handleCategorySelectionChange} />
      <AddFriends onSelectionChange={handleFriendSelectionChange} />
      <div className="mb-4">
        <Input
          label="Total Amount"
          type="number"
          id="totalAmount"
          name="totalAmount"
          value={formData.totalAmount.toString()}
          onChange={e =>
            setFormData({
              ...formData,
              totalAmount: parseInt(e.target.value) || 0,
            })
          }
          className="w-full px-4 py-2 border rounded-md rounded-tr-3xl shadow-xl"
        />
      </div>
      <div className="flex justify-center flex-col items-center rounded-tl-2xl rounded-br-2xl overflow-hidden pb-4">
        <p className="text-sm text-default-500">Total Bill Amount:</p>
        <Chip
          size="lg"
          color="warning"
          variant="flat"
          className="text-lg font-bold mt-2"
        >
          {formData.totalAmount}
        </Chip>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-orange-300 rounded-md hover:bg-black transition-colors duration-300 ease-in-out"
      >
        Split Bill
      </button>
    </form>
  );
};

export default BillingForm;
