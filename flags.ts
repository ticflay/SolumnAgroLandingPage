import { flag } from 'flags/next';
import { vercelAdapter } from '@flags-sdk/vercel';

export const getIsReviewEnabled = flag<boolean>({
  key: 'ENABLE_REVIEW_PAGE',
  adapter: vercelAdapter(),
});

export const getIsServicesEnabled = flag<boolean>({
  key: 'ENABLE_SERVICES_PAGE',
  adapter: vercelAdapter(),
});
