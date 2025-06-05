import createUnservicedLeads from '@/actions/data/unserviced_leads/create.unserviced-leads';
import withAutoRetry from '@/utils/with-auto-retry';

export const unservicedLeadsServerApi = {
  create: createUnservicedLeads
}

export const unservicedLeadsClientApi = {
  create: withAutoRetry(createUnservicedLeads)
}
