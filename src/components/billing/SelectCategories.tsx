import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';

interface SelectCategoriesProps {
  onSelectionChange: (selectedCategory: string) => void;
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
  const [value, setValue] = React.useState('');

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setValue(selectedCategory);
    onSelectionChange(selectedCategory);
  };

  return (
    <div className="flex w-full  flex-col gap-2">
      <Select
        label="Select a Category"
        selectionMode="single"
        placeholder="Select Categories"
        value={value}
        className="w-full px-4 py-2 border rounded-md rounded-tr-3xl shadow-xl"
        onChange={handleSelectionChange}
      >
        {categories.map((category: any) => (
          <SelectItem key={category.value} value={category.value}>
            {category.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectCategories;
