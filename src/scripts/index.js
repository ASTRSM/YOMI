/* eslint-disable no-undef */
import '@splidejs/splide/css'
import renderPage from './app'
import '../styles/style.css'
import '../styles/responsive.css'

$(function () {
  $(window).on('hashchange', function () {
    renderPage()
  })

  renderPage()
})


