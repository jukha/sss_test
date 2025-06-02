'use client';

import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

const ModalLayout = ({children}: Props) => {
  return createPortal(
    (
      <div className="fixed top-0 left-0 w-full h-full bg-black/80 z-9999">
        <div className="bg-white top-[50%] left-[50%] relative min-w-[200px] min-h-[200px] max-w-[800px] max-h-[800px] w-fit translate-x-[-50%] translate-y-[-50%] rounded-[10px] p-[20px]">
          {children}
        </div>
      </div>
    ), document.body
  );
}

export default ModalLayout;
