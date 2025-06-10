import Link from 'next/link';
import React from 'react';
import Typography from '../semantics/Typography';
import clsx from 'clsx';
import { SupportQuestion } from '@/app/(common)/support/components/AdditionalQuestionsSection';

const QuestionCard = ({
  question,
  index,
}: {
  question: SupportQuestion;
  index: number;
}) => {
  return (
    <li
      className={clsx(
        'group lg:w-[calc(33%_-25px)] bg-lightBlue py-11 px-14 transition-colors duration-300 hover:bg-offBlack',
        (index + 1) % 3 === 0 ? 'question-card-bg' : 'question-card-bg-flipped'
      )}
    >
      <Link href={`#`}>
        <span className='inline-block w-[60px] h-[60px] text-offBlack'>
          {question.icon}
        </span>

        <Typography
          variant='h6'
          className='font-secondary font-bold text-2xl text-offBlack leading-[125%] mt-9 mb-2 transition-colors group-hover:text-white'
        >
          {question.title}
        </Typography>

        <Typography
          variant='custom'
          className='font-secondary font-medium text-xl text-offBlack leading-[120%] mb-2 transition-colors group-hover:text-white'
        >
          {question.description}
        </Typography>

        <Typography
          variant='caption'
          className='font-secondary font-bold text-sm text-orange'
        >
          {question.articlesCount} ARTICLES
        </Typography>
      </Link>
    </li>
  );
};

export default QuestionCard;
