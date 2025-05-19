import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import React from 'react';
import SelectableCard from './SelectableCard';

export type SelectableCard = {
  icon: string | StaticImport;
  text: string;
  value: string;
};

type Props = {
  cardsList: SelectableCard[];
  radioGroupName: string;
  selectedCard?: SelectableCard;
  onChange?: (card?: SelectableCard) => void;
};

const CardsSelector: React.FC<Props> = ({
  cardsList,
  radioGroupName,
  selectedCard,
  onChange,
}) => {
  return (
    <div className='relative flex flex-wrap justify-center gap-2'>
      {cardsList.map((card) => (
        <SelectableCard
          key={card.value}
          {...card}
          selected={selectedCard?.value === card.value}
          onChange={() => onChange?.(card)}
          name={radioGroupName}
        />
      ))}
    </div>
  );
};

export default CardsSelector;
