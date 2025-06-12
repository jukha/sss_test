'use server';

import { prismaClient } from '@/prisma';
import { UnservicedLeadsEntity } from '@/entities/unserviced-leads.entity';

const createUnservicedLeads = (data: Omit<UnservicedLeadsEntity, 'id'>) => {
  return prismaClient.unservicedLeads.create({data: {...data, timestamp: new Date()}});
}

export default createUnservicedLeads;
