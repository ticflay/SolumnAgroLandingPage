import { getIsReviewEnabled, getIsServicesEnabled } from '@/flags'
import Nav from './Nav'

export default async function NavWrapper() {
  const [isServicesEnabled, isReviewEnabled] = await Promise.all([
    getIsServicesEnabled(),
    getIsReviewEnabled(),
  ])
  return <Nav isServicesEnabled={isServicesEnabled} isReviewEnabled={isReviewEnabled} />
}
