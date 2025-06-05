import React from 'react';
import LessonsTypeCard from './LessonTypeCard';

export type Card = {
  text: string;
  value: string;
};

type Props = {
  cardsList: Card[];
  radioGroupName: string;
  selectedValue?: string;
  onChange?: (value: string) => void;
};

const LessonsTypeSelector: React.FC<Props> = ({ cardsList, radioGroupName, selectedValue, onChange }) => {
  return (
    <div className='relative flex flex-wrap justify-center gap-2'>
      {cardsList.map((card) => (
        <LessonsTypeCard
          key={card.value}
          {...card}
          selected={selectedValue === card.value}
          onChange={() => onChange?.(card.value)}
          name={radioGroupName}
        />
      ))}
    </div>
  );
};

export default LessonsTypeSelector;
