'use client';
import { Button, Chip, Input } from '@nextui-org/react';
import React, { useState, FormEvent } from 'react';
import SelectCategories from './SelectCategories';
import AddFriends from './AddFriends';
import { createBilling } from '@/actions/billing/create-biling';
import { useBillingStore } from '@/stores/billings/billing.store';

interface BillingData {
  amount: number;
  friends: string[];
  category: string;
  billPerFriend: number;
}

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
    category: 'Others',
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const totalFriends = formData.friends.length;
    const billPerFriend = formData.totalAmount / (totalFriends + 1);

    const billingData: BillingData = {
      amount: formData.totalAmount,
      friends: formData.friends.map(f => f.name),
      category: formData.category,
      billPerFriend: billPerFriend,
    };
    await createBilling(billingData);
    useBillingStore.setState({ billingData: [billingData] });
  };

  return (
    <form className="max-w-xs mx-auto space-y-4">
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
      <Button
        onClick={handleSubmit}
        className="w-full px-4 py-2 text-white bg-orange-300 rounded-md hover:bg-black transition-colors duration-300 ease-in-out"
      >
        Split Bill
      </Button>
    </form>
  );
};

export default BillingForm;
