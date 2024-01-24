import router from '../router'
import type { App } from 'vue'
import { createPinia } from 'pinia';

const pinia = createPinia();

export function registerPlugins (app: App) {
  app
    .use(pinia)
    .use(router)
}