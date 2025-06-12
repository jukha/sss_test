import { getBaseFaqs } from '@/repositories/faq/base.faq';
import FaqSection from './FaqSection';

type ServerFaqOptions = {
  categoryName: string;
};

export const ServerFaqSection = async ({ categoryName }: ServerFaqOptions) => {
  const data = await getBaseFaqs({ categoryName: categoryName });

  return <FaqSection data={data} />;
};
