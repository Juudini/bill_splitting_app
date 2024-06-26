import React, { useState, useEffect } from 'react';
import { Input, Card } from '@nextui-org/react';
import BillingCard from './BillingCard';
import { getBillings } from '@/actions/billing/get-billings';
import { UUID } from 'crypto';
import { useBillingStore } from '@/stores/billings/billing.store';
import CustomTitle from '../shared/CustomTitle';

interface BillingData {
  id: UUID;
  amount: number;
  friends: string[];
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const BillingLib: React.FC = () => {
  const [searchCategory, setSearchCategory] = useState('');
  const [billingData, setBillingData] = useState<BillingData[]>([]);
  const billingDataFromStore = useBillingStore(state => state.billingData);

  useEffect(() => {
    getBillings().then(data => {
      setBillingData(data as BillingData[]);
    });
  }, []);

  useEffect(() => {
    if (billingDataFromStore.length > 0) {
      setBillingData((prevBillingData: any) => [
        ...prevBillingData,
        ...billingDataFromStore,
      ]);
    }
  }, [billingDataFromStore]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCategory(e.target.value);
  };

  const filteredBillingData = billingData.filter(data =>
    data.category.toLowerCase().includes(searchCategory.toLowerCase()),
  );

  const noBillingDataForCategory =
    filteredBillingData.length === 0 && billingData.length > 0;

  return (
    <div className="max-w-xs lg:max-w-md mx-auto space-y-8">
      <CustomTitle
        title="My Billings"
        subtitle="Below are the billings you have made. You can search by category to filter the results."
      />

      <Input
        label="Search by category"
        type="text"
        id="searchCategory"
        value={searchCategory}
        onChange={handleSearchChange}
        className="w-full mb-4"
        aria-labelledby="searchCategory"
      />

      <div className="space-y-6">
        {filteredBillingData.map((data: any, index) => (
          <BillingCard key={index} data={data} />
        ))}

        {noBillingDataForCategory && (
          <Card className="p-4">
            <p>No billing data found for this category.</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BillingLib;
