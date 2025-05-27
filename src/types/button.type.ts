export type ButtonType = {
  text: string;
  icon?: React.ReactElement;
  iconBackgroundColor?: string;
  shadow?: boolean;
};

export type ArrowButtonType = {
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