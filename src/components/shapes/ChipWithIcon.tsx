import React from 'react';
import Typography from '../semantics/Typography';
import { BlogCategoryEntity } from '@/entities/blog-category.entity';
import Link from 'next/link';
import Image from 'next/image';

type ChipWithIconProps = {
  content: BlogCategoryEntity;
};

const ChipWithIcon = ({ content }: ChipWithIconProps) => {
  return (
    <Link href={`/blog/category/${content.hyphenatedName}`}>
      <div className='flex justify-center items-center gap-2 px-6 py-1 rounded-[32px] relative'>
        <div
          className='flex items-center rounded-[32px] p-3 gap-4'
          style={{
            backgroundColor: `${content.hexColor}`,
          }}
        >
          {content.icon && (
            <Image
              width={24}
              height={24}
              src={content.icon}
              alt={`${content.name} icon`}
              className='object-contain'
              unoptimized
            />
          )}
          <Typography
            variant='custom'
            className='leading-[125%] text-[20px] font-bold font-secondary'
          >
            {content.name}
          </Typography>
        </div>
      </div>
    </Link>
  );
};

export default ChipWithIcon;
