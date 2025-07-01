import { Primitive } from '@/utils/convert-prisma-types-to-primitives';
import { FaqRecord } from '@/__generated__/prisma';

export type FaqEntity = Primitive<FaqRecord>;
