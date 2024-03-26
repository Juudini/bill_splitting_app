import React from 'react';
import BillingForm from './BillingForm';
import CustomTitle from '../shared/CustomTitle';

export default function Billing() {
  return (
    <div className="max-w-xs mx-auto space-y-4">
      <CustomTitle
        title="Billing"
        subtitle="Fill in the form below the billing details."
      />
      <BillingForm />
    </div>
  );
}
