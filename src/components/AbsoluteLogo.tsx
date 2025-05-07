'use client';

import { logo } from '@/assets';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const AbsoluteLogo = () => {
  const router = useRouter();
  const goToMainPage = () => {
    router.push('/');
  };

  return (
    <div
      onClick={goToMainPage}
      className='inline-block max-w-[35%] pl-[30px] pt-[20px] cursor-pointer'
    >
      <Image src={logo} alt='logo' />
    </div>
  );
};

export default AbsoluteLogo;
