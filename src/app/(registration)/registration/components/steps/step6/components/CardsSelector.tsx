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
    <div className='relative grid grid-cols-2 gap-2 max-w-[220px] mx-auto desktop:grid-cols-3 desktop:max-w-[100%]'>
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
