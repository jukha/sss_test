'use client';
import Link from 'next/link';
import React from 'react';

type Props = {
  /** The text to display on the button. */
  text: string;
  /** The URL the button should link to. If not provided, it defaults to '#'. */
  link?: string;
  /** Whether to display a shadow effect for the button. Defaults to false. */
  shadow?: boolean;
  /** Additional CSS classes for the main button element. */
  buttonClasses?: string;
  /** Additional CSS classes for the shadow element, if shadow is true. */
  shadowClasses?: string;
};
// when adding hover effects: use group-hover:className

/**
 * Button component that can render as a link with optional shadow.
 *
 * @param props - The props for the Button component.
 * @returns A React functional component.
 */
const Button: React.FC<Props> = (props) => {
  const buttonContent = (
    <div className={`relative group`}>
      <div
        className={`py-3 lg:py-4 px-3  lg:px-7 button  flex items-center justify-center duration-300   ${
          props.buttonClasses ?? 'bg-brightYellow text-black'
        } `}
      >
        <span className='relative text-base lg:text-lg font-bold '>
          {props.text}
        </span>
      </div>
      {props.shadow && (
        <div
          className={`absolute z-[-1] h-full w-full button bottom-[-6px] left-[-4px] duration-300 ${
            props.shadowClasses ?? 'bg-orange'
          }`}
        ></div>
      )}
    </div>
  );

  if (props.link) {
    return (
      <Link href={props.link} className='block'>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button type='button' className='block w-full'>
      {buttonContent}
    </button>
  );
};

export default Button;

/*
Example usage:

1. Basic button:
<Button text="Click Me" />

2. Button with a link:
<Button text="Go to Google" link="https://google.com" />

3. Button with shadow:
<Button text="Shadow Button" shadow={true} />

4. Button with custom classes:
<Button text="Custom Style" buttonClasses="bg-blue-500 text-white" />

5. Button with shadow and custom shadow classes:
<Button text="Custom Shadow" shadow={true} shadowClasses="bg-gray-700" />

6. Button with all props:
<Button
  text="Learn More"
  link="/about"
  shadow={true}
  buttonClasses="bg-green-500 hover:bg-green-600 text-white"
  shadowClasses="bg-green-700"
/>
*/
