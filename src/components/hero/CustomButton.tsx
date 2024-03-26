'use client';
import React from 'react';
import { Button } from '@nextui-org/react';

import { Link } from 'react-scroll';
interface ButtonProps {
  title: string;
  linkTo: string;
}
export default function CustomButton({ title, linkTo }: ButtonProps) {
  return (
    <Button
      radius="full"
      className="shadow-lg bg-orange-300 text-white px-4 py-2 mb-4 hover:bg-black transition-colors duration-300 ease-in-out"
      variant="flat"
    >
      <Link to={linkTo} spy={true} smooth={true} offset={-100} duration={500}>
        {title || 'Must be a title'}
      </Link>
    </Button>
  );
}
