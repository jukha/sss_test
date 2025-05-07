import { fiveStar, starBg, waterBg, yellowLike } from '@/assets';
import AbsoluteLogo from '@/components/AbsoluteLogo';
import RegistrationFormWrapper from './sss/[id]/[secret]/widgets/RegistrationFormWrapper';
import CardSlider from '@/components/CardSlider';
import DropDownBlock from '@/components/DropDownBlock';
import { DropDownType } from '@/types/dropdown.type';
import SmallCardSlider from '@/components/SmallCardSlider';
import './registration-styles.css'

const cardsData = [
  {
    text: 'Christine has been great! My kids enjoy swimming with her and she is very easy to work with...',
    person: { name: 'Joselyn K', city: 'Las Vegas' },
  },
  {
    text: 'So good. My children like this classes so much, special thanks to John',
    person: { name: 'Mike E', city: 'New York' },
  },
];

const additionalCardsData = [
  { text: 'Thousands of 5-star reviews ', image: fiveStar },
  { text: '1# rated swim school in America', image: yellowLike },
];

const dropDownData: DropDownType[] = [
  {
    header: 'First Header',
    textArticles: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
  },
  {
    header: 'Second Header',
    textArticles: [
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
  {
    header: 'Third Header',
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
              formId={formId}
              databaseId={databaseId}
              secret={secret}
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
