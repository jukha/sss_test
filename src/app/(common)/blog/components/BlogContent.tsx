import { blogImg } from '@/assets';
import { FacebookIcon, InstaIcon, LinkedInIcon } from '@/components/icons';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';
import React from 'react';
import BlogInfoBlock from './BlogInfoBlock';

const content = {
  contentHeading:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac enim quis tellus consequat aliquam non eget nulla.',
  contentDescription:
    'Etiam ac enim quis tellus consequat aliquam non eget nulla. Cras feugiat nec justo nec ullamcorper. Etiam sit amet magna non justo dignissim tincidunt. Nunc condimentum velit semper lobortis rhoncus. Donec mi mauris, blandit sed augue sed, consequat venenatis massa. Sed quis dictum turpis. Ut gravida eros ut libero tristique consectetur. Vivamus quis pellentesque magna. Fusce vel justo luctus nibh imperdiet venenatis. Integer varius, ipsum vitae facilisis porttitor, leo ligula tempor erat, quis consequat diam justo et dui. Suspendisse egestas placerat dolor, eget feugiat mi. Vestibulum ultricies rutrum sem non lobortis. In magna mi, fringilla nec lacus sed, venenatis aliquam diam.',
  points: [
    {
      header: 'Lessons at Your Home, on Your Schedule',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac enim quis tellus consequat aliquam non eget nulla. Cras feugiat nec justo nec ullamcorper. Etiam sit amet magna non justo dignissim tincidunt. Nunc condimentum velit semper lobortis rhoncus. Donec mi mauris, blandit sed augue sed, consequat venenatis massa.',
    },
    {
      header: 'Lessons at Your Home, on Your Schedule',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac enim quis tellus consequat aliquam non eget nulla. Cras feugiat nec justo nec ullamcorper. Etiam sit amet magna non justo dignissim tincidunt. Nunc condimentum velit semper lobortis rhoncus. Donec mi mauris, blandit sed augue sed, consequat venenatis massa.',
    },
    {
      header: 'Lessons at Your Home, on Your Schedule',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac enim quis tellus consequat aliquam non eget nulla. Cras feugiat nec justo nec ullamcorper. Etiam sit amet magna non justo dignissim tincidunt. Nunc condimentum velit semper lobortis rhoncus. Donec mi mauris, blandit sed augue sed, consequat venenatis massa.',
    },
  ],
  socialMediaIcon: [
    <FacebookIcon key='facebook' />,
    <InstaIcon key='instagram' />,
    <LinkedInIcon key='linkedin' />,
  ],
};

const BlogContent = () => {
  return (
    <section>
      <Container className='flex flex-col gap-6 justify-start items-center '>
        <Typography
          variant='h4'
          className='font-primary font-bold leading-[110%] text-start max-w-[818px]'
        >
          {content.contentHeading}
        </Typography>
        <Typography
          variant='custom'
          className='text-base md:text-xl font-secondary font-medium max-w-[818px] leading-[120%] md:leading-[200%]'
        >
          {content.contentDescription}
        </Typography>
        <Image src={blogImg} alt='test' className='my-10' />
        <Typography
          variant='h3'
          className='font-primary font-bold leading-[110%] text-start max-w-[818px] w-full'
        >
          How to do Flutter Kicks
        </Typography>
        <ul className='flex flex-col gap-9 mb-16'>
          {content.points.map((step, idx) => (
            <BlogInfoBlock
              key={idx}
              idx={idx}
              heading={step.header}
              description={step.description}
            />
          ))}
        </ul>
        <Typography
          variant='h4'
          className='font-primary font-bold leading-[110%] text-start max-w-[818px]'
        >
          {content.contentHeading}
        </Typography>
        <Typography
          variant='custom'
          className='text-base md:text-xl font-secondary font-medium max-w-[818px] leading-[120%] md:leading-[200%]'
        >
          {content.contentDescription}
        </Typography>
        <div className='flex justify-between items-center max-w-[818px] w-full'>
          <Typography
            variant='custom'
            className='text-[18px] font-secondary font-bold md:text-[24px] '
          >
            Share on socials
          </Typography>
          <div className='flex items-center justify-around  gap-4 '>
            {content.socialMediaIcon.map((icon) => {
              return (
                <span key={icon.key} className='h-[31px] w-[31px]'>
                  {icon}
                </span>
              );
            })}
          </div>
        </div>
        <div className='w-full max-w-[800px] border-t-2 border-yellow mb-16'></div>
      </Container>
    </section>
  );
};

export default BlogContent;
