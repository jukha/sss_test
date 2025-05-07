import React from 'react';
import { stickerStamp } from '@/assets';
import Image from 'next/image';


const StampSticker = () => {
    return (
        <div className='relative'>
            <Image className='absolute bottom-4 right-4' src={stickerStamp} alt='' />
        </div>
    );
};

export default StampSticker;
