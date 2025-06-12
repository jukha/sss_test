import { LessonPackageEntity } from './lesson-package.entity';

export type GroupedLessonsPricingEntity = Record<string, Record<string, Record<string, LessonPackageEntity>>>;
