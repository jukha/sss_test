import {
  calendar,
  curveCard1,
  curveCard2,
  curveCard3,
  fiveStar,
  poolStairs,
  starBg,
  waterBg,
  yellowCoin,
  yellowLike,
} from '@/assets';
import AbsoluteLogo from '@/components/AbsoluteLogo';
import RegistrationFormWrapper from './RegistrationFormWrapper';
import DropDownBlock from '@/components/DropDownBlock';
import { DropDownType } from '@/types/dropdown.type';
import '../../styles/registration-styles.css'
import { CardType } from '@/types/card.type';
import { FilterClassEnum } from '@/enum/filter-class.enum';
import CardSlider from './CardSlider';
import SmallCardSlider from './SmallCardSlider';

const cardsData: CardType[] = [
  {
    text: 'Christine has been great! My kids enjoy swim ming with her and she is very easy to work with...',
    person: { name: 'Joselyn K', city: 'Las Vegas', bgColor: 'bg-lightBlue' },
    cardBgSrc: curveCard1,
    cardFilter: FilterClassEnum.DarkBlue,
    cardShadowFilter: FilterClassEnum.Blue,
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
    cardFilter: FilterClassEnum.LightBlue,
    cardShadowFilter: FilterClassEnum.ExtraLightBlue,
    textColor: '!text-white',
  },
];

const additionalCardsData = [
  { text: 'Thousands of 5-star reviews ', image: fiveStar },
  { text: '1# rated swim school in America', image: yellowLike },
  { text: 'Get final quote before checkout', image: yellowCoin },
  { text: 'Personalized swim lesson plans', image: poolStairs },
  { text: 'Flexible Scheduling', image: calendar },
];

const dropDownData: DropDownType[] = [
  {
    header: 'How long does it take to learn how to swim with private lessons?',
    textArticles: [
      'We require that a parent or guardian be present during all lessons. Parents can supervise lessons, either from inside the house, or from the pool deck. If your child starts acting out, we would recommend watching the lessons out of their sight, since young children perform better if there is only one authority figure to focus on at a time.',
      'For children under 2 years we recommend a parent is in the water for the child to be the most comfortable. Children 2 years and older get the most out of lessons without the parent in the water and often with the parent out of direct sight (preschoolers often act up when the parent is in view).',
    ],
  },
  {
    header: 'Where is your pool located?',
    textArticles: [
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
  {
    header: 'What happens if I don’t have a pool at home?',
    textArticles: [
      'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.',
      'Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.',
    ],
  },
  {
    header: 'What qualifications do your instructors have?',
    textArticles: [
      'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.',
      'Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.',
    ],
  },
  {
    header: 'What is your Learn to Swim Guarantee?',
    textArticles: [
      'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.',
      'Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.',
    ],
  },
  {
    header: 'What is the cost and how many lessons are typically required?',
    textArticles: [
      'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.',
      'Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.',
    ],
  },
  {
    header: 'When can I register? How?',
    textArticles: [
      'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.',
      'Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.',
    ],
  },
];

type Props = {
  databaseId: string;
  secret: string;
  formId: string;
};

const RegistrationPageLayout: React.FC<Props> = ({
  databaseId,
  secret,
  formId,
}) => {
  return (
    <div
      className='flex items-stretch bg-yellow min-h-screen w-full bg-no-repeat bg-size-[100%] laptop:bg-size-[50%_100%]'
      style={{
        backgroundImage: `linear-gradient(180deg,rgba(255, 255, 255, 0) 0%, rgba(3, 61, 154, 1) 50%), url(${waterBg.src})`,
      }}
    >
      <div className='max-w-[1440px] m-auto h-full'>
        <AbsoluteLogo />
        <div className='flex gap-24 laptop:gap-16 desktop:gap-40 flex-wrap laptop:p-0 laptop:flex-nowrap laptop:overflow-hidden laptop:max-h-[1150px]'>
          {/* ----------- left side ---------- */}
          <div className='flex-1/2 flex flex-col gap-[50px] pt-8 sm:p-8 laptop:pt-[100px] overflow-y-scroll overflow-x-hidden no-scrollbar'>
            <div className='flex flex-col gap-[14px] px-[20px] w-[70%] z-1'>
              <h2 className='text-yellow'>Register Now</h2>
              <h3 className='text-white'>
                for At-home Swim Lessons with Sunsational
              </h3>
            </div>

            <RegistrationFormWrapper
              databaseId={databaseId}
              secret={secret}
              formId={formId}
            />
          </div>

          {/* ----------- right side ---------- */}
          <div className='flex-1/2 flex flex-col items-center pt-16 px-8 sm:pb-8 bg-yellow overflow-y-scroll overflow-x-hidden no-scrollbar'>
            <div className='flex flex-col text-center gap-[5px]'>
              <h3 className='text-darkBlue'>
                Thousands of Five Star <br /> Reviews and counting!
              </h3>
              <h4 className='text-darkBlue'>
                Rated 4.9/5 Stars From Over over 4000+ <br /> Sunsational Swim
                School Reviews
              </h4>
            </div>
            <div
              className='bg-top bg-no-repeat'
              style={{
                backgroundImage: ` url(${starBg.src})`,
              }}
            >
              <CardSlider cards={cardsData} />
              <SmallCardSlider cards={additionalCardsData} />
            </div>
            <div className='pt-[50px] laptop:pt-[100px] flex flex-col gap-[30px] items-center'>
              <h2>FAQ</h2>
              <DropDownBlock dropDownBlocks={dropDownData} />
            </div>
          </div>
        </div>

        {/* <FilteredImage
          src={wavyBorder}
          filter={FilterClassEnum.None}
          className={clsx(
            'hidden absolute laptop:left-[-20px] laptop:top-0 laptop:h-full laptop:block'
          )}
        /> */}
      </div>
    </div>
  );
};

export default RegistrationPageLayout;
