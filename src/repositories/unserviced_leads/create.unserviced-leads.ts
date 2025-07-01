'use server';

import { prismaClient } from '@/prisma';
import { UnservicedLeadsEntity } from '@/entities/unserviced-leads.entity';

const createUnservicedLeads = (data: Omit<UnservicedLeadsEntity, 'id'>, sendWebhook = true) => {
  const webhookUrl = process.env.NOTIFY_ME_WEBHOOK_URL;

  if (sendWebhook && webhookUrl) {
    fetch(webhookUrl, {
      method: 'POST',
      body: JSON.stringify({ email: data.email }),
    })
  }

  return prismaClient.unservicedLeads.create({data: {...data, timestamp: new Date()}});
}

export default createUnservicedLeads;
