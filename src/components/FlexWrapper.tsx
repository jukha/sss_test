import React, { ReactNode } from 'react';
import Container from './Container';

type StackOrderType = 'first-top' | 'second-top';
type DirectionType = 'row' | 'row-reverse';

type Props = {
  stackOrder?: StackOrderType; // Determines the vertical order on mobile
  direction?: DirectionType; // Controls the flex direction for larger screens
  children: ReactNode; // Accepts children for flexibility
  className?: string;
};

const FlexWrapper: React.FC<Props> = ({
  stackOrder = 'first-top',
  direction = 'row', // Default direction
  children,
  className = '',
}) => {
  // Determine the stacking order on mobile
  const mobileStack =
    stackOrder === 'first-top' ? 'flex-col' : 'flex-col-reverse';

  // Map direction to Tailwind classes
  const directionClass = {
    row: 'lg:flex-row',
    'row-reverse': 'lg:flex-row-reverse',
  }[direction];

  return (
    <Container>
      <div
        className={`flex ${mobileStack} ${directionClass} ${className} gap-8 justify-between items-center`}
      >
        {children}
      </div>
    </Container>
  );
};

export default FlexWrapper;
