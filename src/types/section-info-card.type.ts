import { Property } from 'csstype';
import { ReactNode } from 'react';

type SectionInfoCardListItemType = {
  itemBulletIcon?: ReactNode /* This can be a SVG icon element or step number like 1, 2, 3, 4 */;
  itemBulletIconSize?: number /* This controls the dimension of SVG icon element */;
  itemBulletBg?: Property.BackgroundColor /* This controls the IconFrame background color */;
  itemHeader?: string /* List header */;
  itemDescription?: string /* List description */;
};

type DecorationElementType = {
  decorationElement?: ReactNode /* SVG icon element */;
  decorationElWrapperClasses?: string /* Applies to the element that wrap the SVG icon element. It can be used to control svg css properties */;
};

export type SectionInfoCardType = {
  listItems: SectionInfoCardListItemType[];
  wrapperClasses?: string /* Card parent HTML element. More likely this will need padding and background TW classes from the outside */;
  decorations?: DecorationElementType[] /* All the decorations SVG icon elements for the Card parent HTML element */;
  listItemBulletIconAlignment?: Property.AlignItems /* This controls vertical alignment of bullet(SVG or Number) with the description */;
  useListIdxAsIcon?: boolean /* This allows us to use map idx as text for numbered list */;
};
