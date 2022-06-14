/* eslint-disable no-undef */
import '@splidejs/splide/css'
import renderPage from './app'
import '../styles/style.css'
import '../styles/responsive.css'
import 'tippy.js/dist/tippy.css';
import { initFirebaseAuth } from './utils/google-auth';

$(function () {
  $(window).on('hashchange', function () {
    renderPage()
    initFirebaseAuth()
  })
  
  renderPage()
  initFirebaseAuth()
})