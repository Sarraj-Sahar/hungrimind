import siteMetadata from '@/data/siteMetadata'
import Plausible from './Plausible'

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  return <>{isProduction && siteMetadata.analytics.plausibleDataDomain && <Plausible />}</>
}

export default Analytics
