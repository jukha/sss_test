'use client';

import { useEffect, useRef } from 'react';
import clsx from 'clsx';

type Props = {
  outlineColor?: string;
  placeholder: string;
  submitText: string;
  onSubmit?: (value: string) => void;
  maxLength?: number;
  error?: string;
  onErrorReset?: () => void;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
};

const CustomInputForm: React.FC<Props> = (props: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current && props.defaultValue) {
      inputRef.current.value = props.defaultValue;
    }
  }, [props.defaultValue])

  return (
    <div
      className={clsx('relative background-decoration p-1 max-w-max', props.error && 'bg-red')}
      style={{ background: props.outlineColor ? props.outlineColor : '' }}
    >
      {props.error &&
        <span
          className="absolute text-xs top-[5px] left-[18px] lg:top-[8px] lg:left-[22px] lg:text-base text-red z-1"
        >
          {props.error}
        </span>
      }
      <div className='flex justify-between relative items-center background-decoration bg-white gap-2 pt-[9px] pr-[10px] lg:pr-[22px] pb-2'>
        <input
          ref={inputRef}
          type='text'
          placeholder={props.placeholder}
          className='w-[60%] border-none font-medium focus:outline-none text-base lg:text-2xl text-offBlack pl-2 lg:pl-[26px] lg:px-2 lg:py-1 bg-white placeholder-offBlack'
          onChange={(e) => {
            props.onChange?.(e.target.value);
            props.onErrorReset?.()
          }}
          maxLength={props.maxLength}
          defaultValue={props.value ? undefined : props.defaultValue}
          value={props.value}
        />
        <div className='w-[40%] lg:w-max'>
          <button onClick={() => props.onSubmit?.(inputRef.current!.value)}>
            <div className='bg-yellow background-decoration text-center text-base lg:text-2xl font-medium font-primary py-1 lg:py-[10px] px-2 lg:px-5 text-offBlack cursor-pointer'>
              {props.submitText}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomInputForm;
