import { create } from 'zustand';

interface BillingData {
  amount: number;
  friends: string[];
  category: string;
  billPerFriend: number;
}

interface BillingStore {
  billingData: BillingData[];
  addBillingData: (data: BillingData) => void;
}

export const useBillingStore = create<BillingStore>((set, get) => ({
  billingData: [],
  addBillingData: (data: BillingData) => {
    set({ billingData: [...get().billingData, data] });
  },
}));
