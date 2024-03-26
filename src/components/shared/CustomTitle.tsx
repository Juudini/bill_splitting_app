import React from 'react';
import { Card } from '@nextui-org/react';
/* ★━━━━━━━━━━━★ Fonts ★━━━━━━━━━━━★ */
import { ADLaM_Display } from 'next/font/google';
export const textFont = ADLaM_Display({ weight: '400', subsets: ['latin'] });

import { Poppins } from 'next/font/google';
export const descriptionFont = Poppins({ weight: '500', subsets: ['latin'] });

interface CustomTitleProps {
  title: string;
  subtitle: string;
}

export default function CustomTitle({ title, subtitle }: CustomTitleProps) {
  return (
    <Card className="border-none shadow-none bg-inherit">
      <div className="w-full">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 mb-8 text-center">
            <div className="space-y-2">
              <div className="flex justify-center">
                <p className={`text-[2rem] pt-8 ${textFont.className}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="249"
                    height="22"
                    viewBox="0 0 249 22"
                    fill="currentColor"
                    className={`text-orange-200 -mb-[4rem]`}
                  >
                    <path d="M247.564 18.5808C241.772 13.3568 232.473 12.7526 225.225 11.4427C217.124 9.97398 208.996 8.57034 200.846 7.46096C186.542 5.51305 172.169 4.08857 157.79 3.01565C126.033 0.645858 94.0929 0.0338786 62.3387 2.36982C42.1785 3.85419 22.008 5.90888 2.32917 10.8464C-0.0155171 11.4349 0.207047 14.6719 2.6889 14.7084C22.0261 14.9896 41.3866 12.6406 60.7109 11.8568C79.9471 11.0808 99.2274 10.6719 118.484 10.9558C142.604 11.3125 166.719 12.8334 190.722 15.5156C199.956 16.5469 209.195 17.6016 218.411 18.8255C227.864 20.0808 237.259 22 246.767 20.7422C247.709 20.6198 248.426 19.3568 247.564 18.5808Z"></path>
                  </svg>
                  {title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <p
              className={` text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 ${descriptionFont.className}`}
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
