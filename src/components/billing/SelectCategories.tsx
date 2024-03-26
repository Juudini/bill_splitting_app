import React, { useState } from 'react';
import { Select, SelectItem } from '@nextui-org/react';

interface SelectCategoriesProps {
  onSelectionChange: (selectedCategory: string) => void;
}

interface Category {
  label: string;
  value: string;
}

const categories = [
  { label: 'Food', value: 'food' },
  { label: 'Transport', value: 'transport' },
  { label: 'Entertainment', value: 'entertainment' },
  { label: 'Health', value: 'health' },
  { label: 'Shopping', value: 'shopping' },
  { label: 'Others', value: 'others' },
];

const SelectCategories: React.FC<SelectCategoriesProps> = ({
  onSelectionChange,
}) => {
  const [value, setValue] = useState('');

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;

    setValue(selectedCategory);

    onSelectionChange(selectedCategory);
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <Select
        label="Select a Category"
        selectionMode="single"
        placeholder="Select Categories"
        value={value}
        className="w-full px-4 py-2 border rounded-md rounded-tr-3xl shadow-xl"
        color="default"
        onChange={handleSelectionChange}
      >
        {categories.map((category: Category) => (
          <SelectItem
            key={category.value}
            value={category.value}
            color="default"
            className="bg-orange-200"
          >
            {category.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectCategories;
