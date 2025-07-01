'use client';

import { Property } from 'csstype';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ChevronRight } from '../icons';

type Crumb = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  color?: Property.Color;
  className?: string; // Add this prop
  customCrumbs?: Crumb[];
  rootCrumbLabel?: string;
};

function formatSegment(segment: string): string {
  return segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function Breadcrumbs({
  color = 'var(--color-darkBlue)',
  className,
  customCrumbs,
  rootCrumbLabel,
}: BreadcrumbsProps) {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const crumbs =
    customCrumbs ??
    segments.map((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/');
      return {
        label: formatSegment(segment),
        href,
      };
    });

  return (
    <nav
      aria-label='Breadcrumb'
      className={clsx('container mx-auto px-4', className)}
    >
      <ol
        className='flex flex-wrap gap-1 items-center text-[14px] font-bold font-secondary md:text-base'
        style={{ color }}
      >
        <li>
          <Link href='/' className='hover:underline'>
            {rootCrumbLabel ?? 'Home'}
          </Link>
        </li>
        {crumbs.map((crumb) => (
          <li
            key={crumb.href}
            className='flex gap-1 justify-start items-center hover:underline'
          >
            <span className='inline-flex justify-center items-center w-8 h-8'>
              <ChevronRight color={color} />
            </span>
            <Link href={crumb.href}>{crumb.label}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
