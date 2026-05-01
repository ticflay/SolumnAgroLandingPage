import { getIsServicesEnabled } from '@/flags'
import Nav from './Nav'

export default async function NavWrapper() {
  const isServicesEnabled = await getIsServicesEnabled()
  return <Nav isServicesEnabled={isServicesEnabled} />
}
