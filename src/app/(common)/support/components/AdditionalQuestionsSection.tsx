import {
  ClassIcon,
  TimerIcon,
  FAQIcon,
  ProtectIcon,
  ContactDetailsIcon,
  HelpingHandIcon,
  OutdoorSwimmingPoolIcon,
  TrustIcon,
  PopularIcon,
} from '@/components/icons';
import Container from '@/components/layout/Container';
import QuestionCard from '@/components/shapes/QuestionCard';

export type SupportQuestion = {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  articlesCount: number;
};

const AdditionalQuestionsSection = () => {
  const questions: SupportQuestion[] = [
    {
      icon: <ClassIcon />,
      title: 'Billing',
      category: 'billing',
      description:
        'Find answers to your questions about billing for your private at-home swimming lesson',
      articlesCount: 2,
    },
    {
      icon: <TimerIcon />,
      title: 'Cancellations & Resceduling',
      category: 'cancellations-and-rescheduling',
      description:
        'Find answers to your questions about billing for your private at-home swimming lesson',
      articlesCount: 2,
    },
    {
      icon: <FAQIcon />,
      title: 'General Questions',
      category: 'general-questions',
      description:
        'Find answers to your questions about billing for your private at-home swimming lesson',
      articlesCount: 2,
    },
    {
      icon: <ProtectIcon hasWhiteBg={true} />,
      title: 'Guarantees',
      category: 'guarantees',
      description:
        'Find answers to your questions about billing for your private at-home swimming lesson',
      articlesCount: 2,
    },
    {
      icon: <ContactDetailsIcon />,
      title: 'Instructors and Service Area',
      category: 'instructors-and-service-area',
      description:
        'Find answers to your questions about billing for your private at-home swimming lesson',
      articlesCount: 2,
    },
    {
      icon: <HelpingHandIcon />,
      title: 'Matching Process',
      category: 'matching-process',
      description:
        'Find answers to your questions about billing for your private at-home swimming lesson',
      articlesCount: 2,
    },
    {
      icon: <OutdoorSwimmingPoolIcon />,
      title: 'Pool Questions',
      category: 'pool-questions',
      description:
        'Find answers to your questions about billing for your private at-home swimming lesson',
      articlesCount: 2,
    },
    {
      icon: <TrustIcon />,
      title: 'Special Needs',
      category: 'special-needs',
      description:
        'Find answers to your questions about billing for your private at-home swimming lesson',
      articlesCount: 2,
    },
    {
      icon: <PopularIcon />,
      title: 'Student Questions',
      category: 'student-questions',
      description:
        'Find answers to your questions about billing for your private at-home swimming lesson',
      articlesCount: 2,
    },
  ];

  return (
    <Container className='pt-[138px] pb-[116px]'>
      <ul className='flex gap-x-6 gap-y-14 flex-wrap justify-center mb-16'>
        {questions.map((question, i) => (
          <QuestionCard key={i} question={question} index={i} />
        ))}
      </ul>
    </Container>
  );
};

export default AdditionalQuestionsSection;
