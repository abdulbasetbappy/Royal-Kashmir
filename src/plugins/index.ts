import router from '../router'
import type { App } from 'vue'
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCartShopping, faPhone, faBars,faArrowRightToBracket, faHome, faStar  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faInstagram,faTwitter,faTiktok,faGooglePlusG, faFacebookF, faGithub, faLinkedinIn   } from '@fortawesome/free-brands-svg-icons';


library.add(faCartShopping,faPhone,faFacebook, faInstagram, faTwitter, faTiktok ,faBars,faArrowRightToBracket,faGooglePlusG,faFacebookF,faGithub,faLinkedinIn,faHome, faStar );

const pinia = createPinia();

export function registerPlugins (app: App) {
  app
    .use(pinia)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)

}