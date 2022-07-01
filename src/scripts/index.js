/* eslint-disable no-undef */
import '@splidejs/splide/css'
import renderPage from './app'
import '../styles/style.css'
import '../styles/responsive.css'
import 'tippy.js/dist/tippy.css';
import { initFirebaseAuth } from './utils/google-auth';
import { cycleLevel } from './utils/cycle-level';

$(function () {
  $(window).on('hashchange', function () {
    renderPage()
    initFirebaseAuth()
  })

  cycleLevel()
  
  renderPage()
  initFirebaseAuth()
})