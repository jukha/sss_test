import { prismaClient } from '@/prisma';
import { RecordSequenceEnum } from '@/enum/record-sequence.enum';

const getSequenceByName = (sequence: RecordSequenceEnum) => {
  return prismaClient.sequence.findUnique({
    where: {
      name: sequence
    }
  });
}

const createSequenceIfNotExists = async (sequence: RecordSequenceEnum) => {
  const existingSequence = await getSequenceByName(sequence);

  if (existingSequence) return;

  return await prismaClient.sequence.create({ data: { name: sequence } });
}

const incrementSequence = async (sequence: RecordSequenceEnum) => {
  await createSequenceIfNotExists(sequence);

  await prismaClient.$executeRaw `UPDATE sequences SET val=last_insert_id(val+1) WHERE name = ${sequence}`;
  return (await getSequenceByName(sequence))!;
}

export default incrementSequence;
