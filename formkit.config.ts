import { createLocalStoragePlugin } from '@formkit/addons'
import { de } from '@formkit/i18n'
import { defaultConfig } from '@formkit/vue'

const config = defaultConfig({
  plugins: [
    createLocalStoragePlugin({
      prefix: 'vuemastery',
      maxAge: 1000 * 60 * 60 * 4, // 4 hours
      debounce: 500,
    }),
  ],
  locales: { de },
  locale: 'de',
})

export default config
