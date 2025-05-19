import { CardType } from '@/types/card.type';
import { FilterClassEnum } from '@/enum/filter-class.enum';
import CardSlider from './CardSlider';
import { curveCard1, curveCard2, curveCard3, starBg } from '@/assets';

const cardsData: CardType[] = [
  {
    text: 'Christine has been great! My kids enjoy swim ming with her and she is very easy to work with...',
    person: { name: 'Joselyn K', city: 'Las Vegas', bgColor: 'bg-blue' },
    cardBgSrc: curveCard1,
    cardFilter: FilterClassEnum.OffBlack,
    cardShadowFilter: FilterClassEnum.DarkBlue,
    textColor: '!text-white',
  },
  {
    text: 'We have been having a great experience with Sunsational. First they worked hard to get us matched....',
    person: { name: 'Neda', city: 'Arizona', bgColor: 'bg-orange' },
    cardBgSrc: curveCard2,
    cardFilter: FilterClassEnum.Yellow,
    cardShadowFilter: FilterClassEnum.Orange,
    textColor: '!text-black',
  },
  {
    text: 'We had James for swimming lessons, and I cannot say enough good things about him. He was prompt every single day...',
    person: { name: 'Raja J', city: 'Atlanta', bgColor: 'bg-yellow' },
    cardBgSrc: curveCard3,
    cardFilter: FilterClassEnum.Blue,
    cardShadowFilter: FilterClassEnum.LightBlue,
    textColor: '!text-white',
  },
];

type Props = {
  withAutoplay?: boolean;
};

const ReviewsSlider: React.FC<Props> = ({ withAutoplay }) => {
  return (
    <div>
      <div className='flex flex-col text-center gap-[5px]'>
        <h3 className='text-offBlack'>
          Thousands of Five Star <br /> Reviews and counting!
        </h3>
        <h4 className='text-offBlack'>
          Rated 4.9/5 Stars From Over over 4000+ <br /> Sunsational Swim School
          Reviews
        </h4>
      </div>
      <div
        className='bg-top bg-no-repeat'
        style={{
          backgroundImage: ` url(${starBg.src})`,
        }}
      >
        <CardSlider cards={cardsData} withAutoplay={withAutoplay} />
      </div>
    </div>
  );
};

export default ReviewsSlider;
