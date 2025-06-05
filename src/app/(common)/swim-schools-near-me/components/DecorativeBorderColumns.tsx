import RedColumnBorder from '@/components/decoration/RedColumnBorder';
import OrangeColumnBorder from '@/components/decoration/OrangeColumnBorder';
import YellowColumnBorder from '@/components/decoration/YellowColumnBorder';
import BlueColumnBorder from '@/components/decoration/BlueColumnBorder';

const DecorativeBorderColumns = ({ index }: { index?: number }) => {
  switch (index) {
    case 0:
      return <RedColumnBorder />;
    case 1:
      return <OrangeColumnBorder />;
    case 2:
      return <YellowColumnBorder />;
    default:
      return <BlueColumnBorder />;
  }
};

export default DecorativeBorderColumns;
