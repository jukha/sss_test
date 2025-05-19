import { ArrowIcon } from '@/components/icons';
import Link from 'next/link';
import React from 'react';

interface Props {
  /** The URL the button should link to. If not provided, it defaults to '/'. */
  link?: string;
  /** The color of the arrow icon. */
  iconColor?: string;
  /** The text to display on the button. */
  text: string;
  /** Additional CSS classes for the main button element. */
  buttonClasses?: string;
  /** Additional CSS classes for the shadow element, if shadow is true. */
  shadowClasses?: string;
  /** Whether to display a shadow effect for the button. Defaults to false. */
  shadow?: boolean;
  /** Additional CSS classes for the icon's background/span element. */
  IconClasses?: string;
}

/**
 * ArrowButton component that renders a button with text and an arrow icon,
 * optionally with a link and shadow.
 *
 * @param props - The props for the ArrowButton component.
 * @returns A React functional component.
 */
const ArrowButton = (props: Props) => {
  const buttonContent = (
    <div
      className={`relative flex items-center justify-center font-semibold md:font-bold text-base md:text-[24px] group `}
    >
      <div
        className={`flex relative z-10 justify-center items-center gap-4 arrow-button px-3 lg:px-5 py-[10px]  ${
          props.buttonClasses ?? 'bg-brightYellow text-black'
        } duration-300`}
      >
        <span className={`relative z-10 `}>{props.text}</span>
        {/* icon background */}

        <span
          className={`inline-block h-[33px] w-[33px] md:h-[55px] md:w-[55px] p-2 md:p-4 icon-background ${
            props.IconClasses ?? 'bg-offBlack'
          }`}
        >
          <ArrowIcon iconColor={props.iconColor || '#000000'} />
        </span>
      </div>
      {props.shadow && (
        <div
          className={`absolute left-[-6px] bottom-[-8px] arrow-button w-full h-full opacity-100 ${
            props.shadowClasses ?? 'bg-orange'
          } duration-300`}
        ></div>
      )}
    </div>
  );

  if (props.link) {
    return (
      <Link href={props.link} className="">
        {buttonContent}
      </Link>
    );
  }

  return (
    <button type="button" className="block text-left">
      {buttonContent}
    </button>
  );
};

export default ArrowButton;

/*
Example usage:

1. Basic arrow button:
<ArrowButton text="Learn More" />

2. Arrow button with a link:
<ArrowButton text="View Details" link="/details" />

3. Arrow button with shadow:
<ArrowButton text="Get Started" shadow={true} />

4. Arrow button with custom icon color:
<ArrowButton text="Next Step" iconColor="text-white" />

5. Arrow button with custom button classes:
<ArrowButton text="Submit" buttonClasses="bg-blue-500 text-white" />

6. Arrow button with custom icon background classes:
<ArrowButton text="Explore" IconClasses="bg-red-500" />

7. Arrow button with shadow and custom shadow classes:
<ArrowButton text="Proceed" shadow={true} shadowClasses="bg-gray-700" />

8. Arrow button with all props:
<ArrowButton
  text="Discover More"
  link="/discover"
  shadow={true}
  iconColor="text-yellow-300"
  buttonClasses="bg-purple-600 hover:bg-purple-700 text-white"
  shadowClasses="bg-purple-800"
  IconClasses="bg-purple-900"
/>
*/
