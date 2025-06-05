'use server';

import { prismaClient } from '@/prisma';
import { InstructorEntityBuilder } from '@/entity_builders/instructor.entity-builder';

const getFeaturedInstructors = async () => {
  const r = await prismaClient.instructor.findMany();
  const dtoBuilder = new InstructorEntityBuilder();
  return dtoBuilder.buildMany(r);
}

export default getFeaturedInstructors;
