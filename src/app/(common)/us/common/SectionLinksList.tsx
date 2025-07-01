import Typography from '@/components/semantics/Typography';
import Link from 'next/link';
import React from 'react';

type Link = {
  label: string;
  href: string;
};

type Props = {
  heading?: string;
  linksList?: Link[];
  columnCount?: number;
};

const SectionLinksList: React.FC<Props> = ({
  heading,
  linksList,
  columnCount = 4,
}) => {
  return (
    <section>
      <Typography variant='h2' className='!text-[32px] !leading-[120%] mb-5'>
        {heading}
      </Typography>
      <ul
        className='grid gap-x-2 gap-y-1 max-sm:!grid-cols-1 max-lg:!grid-cols-2'
        style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}
      >
        {linksList?.map((link, i) => (
          <li key={i}>
            <Link
              className='font-secondary text-darkGray underline text-base font-medium leading-[180%]'
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionLinksList;
