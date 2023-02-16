import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  name: 'RUsat - Focus Helper',
  description:
    'A free to use extension which allows the user to customize "soft restrictions" on distracting websites to stay focused.',
  version: '1.0.0',
  manifest_version: 3,
  icons: {
    '72': 'img/icon.png',
  },
  action: {
    default_popup: 'popup.html',
    default_icon: 'img/icon.png',
  },
  options_page: 'options.html',
  background: {
    service_worker: 'src/background/index.ts',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['src/content/index.ts'],
    },
  ],
  web_accessible_resources: [
    {
      resources: ['img/icon.png'],
      matches: [],
    },
  ],
  permissions: ['storage', 'scripting'],
})
