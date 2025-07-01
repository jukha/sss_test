'use client';

import ReactMarkdown from 'react-markdown';
import Typography from '../semantics/Typography';
import DynamicHeading from './DynamicHeading';

type MarkdownTypographyProps = {
  content: string;
  className?: string;
};

const MarkdownTypography = ({ content, className = '' }: MarkdownTypographyProps) => {
  return (
    <div className={`font-primary w-fit max-w-[1100px ] prose ${className}`}>
      <ReactMarkdown
        components={{
          h1: ({ children, ...props }) => (
            <Typography
              variant='custom'
              className='text-5xl md:text-8xl text-black font-bold font-primary leading-[115%] md:leading-[100%]'
              {...props}
            >
              {children}
            </Typography>
          ),
          h2: ({ children, ...props }) => (
            <DynamicHeading level={2} {...props}>
              {children}
            </DynamicHeading>
          ),
          h3: ({ children, ...props }) => (
            <DynamicHeading level={3} {...props}>
              {children}
            </DynamicHeading>
          ),
          h4: ({ children, ...props }) => (
            <DynamicHeading level={4} {...props}>
              {children}
            </DynamicHeading>
          ),
          p: ({ children, ...props }) => (
            <Typography variant='custom' {...props}>
              {children}
            </Typography>
          ),
          ul: ({ children, ...props }) => (
            <ul className='list-disc pl-5 my-4' {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className='list-decimal pl-5 my-4' {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li className='mb-2' {...props}>
              {children}
            </li>
          ),
          img: ({ src, alt, ...props }) => (
            <div className='my-4'>
              <img src={src ?? ''} alt={alt ?? ''} className='rounded-lg max-w-full h-auto' {...props} />
            </div>
          ),
          blockquote: ({ children, ...props }) => (
            <blockquote className='border-l-4 border-gray-300 pl-4 italic my-4' {...props}>
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => {
            // Check if the link is a YouTube URL
            const youtubeRegex =
              /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
            const match = href?.match(youtubeRegex);

            if (match) {
              const videoId = match[1];
              return (
                <div className='my-6 aspect-w-16 aspect-h-9'>
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                    className='w-full h-[500px] rounded-lg'
                  />
                </div>
              );
            }

            // Default link rendering for non-YouTube links
            return (
              <a
                className='text-blue-600 hover:underline'
                target='_blank'
                rel='noopener noreferrer'
                href={href}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownTypography;
