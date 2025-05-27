import { StaticImageData } from 'next/image';
import ThreeStareSlim from '../decoration/ThreeStareSlim';

type VideoFrameProps = {
  posterImage?: StaticImageData;
  src: string;
};

const VideoFrame = ({ posterImage, src }: VideoFrameProps) => {
  // Render if src is provided; posterImage is optional
  if (!src) return null;
  return (
    <div className='relative flex flex-col justify-center items-center gap-10'>
      <div className=' flex justify-center items-center horizontal-card bg-yellow py-[10px] px-5 md:px-16 md:py-8'>
        <div className='flex justify-center items-center horizontal-card bg-lightYellow py-5 px-10 md:px-24 md:py-16'>
          <video className='w-full h-full' controls poster={posterImage?.src}>
            <source src={src} type='video/mp4' />
          </video>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 z-10 w-10 md:w-30'>
        <ThreeStareSlim />
      </div>
      <div className='absolute top-30 md:25 right-0 z-10 w-10 md:w-30 scale-x-[-1]'>
        <ThreeStareSlim />
      </div>
    </div>
  );
};

export default VideoFrame;
