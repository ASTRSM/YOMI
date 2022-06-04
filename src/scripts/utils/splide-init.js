import Splide from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'

function isMobileWidth() {
  return $('#mobile-indicator').is(':visible');
}

const splideConfig = {
  perPage: 3,
  cover: true,
  type: 'loop',
  height: '30rem',
  lazyLoad: 'nearby',
  breakpoints: {
    height: '6rem'
  },
  autoScroll: {
    speed: 2,
  },
}

if (isMobileWidth()) {
  splideConfig['direction'] = 'ttb';
}

const fireSplide = () => {
  new Splide('.splide', splideConfig).mount({ AutoScroll })
}

export default fireSplide
