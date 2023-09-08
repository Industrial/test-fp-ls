import type { EmotionCache } from '@emotion/cache'
import createCache from '@emotion/cache'

export default (): EmotionCache => {
  return createCache({ key: 'css' })
}
