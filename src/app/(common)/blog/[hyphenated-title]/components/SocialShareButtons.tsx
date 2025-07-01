'use client';

import { FacebookIcon, InstaIcon, LinkedInIcon } from '@/components/icons';
import { ReactElement } from 'react';

type SocialPlatform = {
  key: string;
  icon: ReactElement;
  shareUrl?: string;
  onClick?: () => unknown;
};

export const SocialShareButtons = ({
  url,
  title,
  description,
}: {
  url: string;
  title: string;
  description: string;
}) => {
  const fullUrl = `${window.location.origin}${url}`;
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const encodedUrl = encodeURIComponent(fullUrl);

  const socialPlatforms: SocialPlatform[] = [
    {
      key: 'facebook',
      icon: <FacebookIcon />,
      shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      key: 'linkedin',
      icon: <LinkedInIcon />,
      shareUrl: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
    },
    {
      key: 'instagram',
      icon: <InstaIcon />,
      onClick: () => {
        navigator.clipboard.writeText(fullUrl);
        alert('Link copied to clipboard! Share it on Instagram');
      },
    },
  ];

  const handleShare = (platform: (typeof socialPlatforms)[0]) => {
    if (platform.onClick) {
      platform.onClick();
    } else {
      window.open(platform.shareUrl, '_blank', 'width=600,height=400,left=100,top=100');
    }
  };

  return (
    <div className='flex gap-4'>
      {socialPlatforms.map((platform) => (
        <button
          key={platform.key}
          onClick={() => handleShare(platform)}
          className='h-[31px] w-[31px] hover:opacity-80 transition-opacity'
          aria-label={`Share on ${platform.key}`}
        >
          {platform.icon}
        </button>
      ))}
    </div>
  );
};
