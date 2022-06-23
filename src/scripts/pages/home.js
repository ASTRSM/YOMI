import { authInit } from '../utils/google-auth'

const home = {
  render () {
    return `
    <div class="home">
      <section class='hero'>
        <h1>YOMI</h1>
        <h2>Memorize Hiragana The Easy Way</h2>
        <p>
        There's no better time than now to begin studying this important Japanese writing system. Learning the Hiragana is the first step on the road to fluency, and you can do it in a few easy steps. You can easily master the Japanese alphabet and it only takes a few minutes each day. This website will give you a well-designed lesson plan that will allow you to master the Hiragana in no time! <span>And login if you want to sync your progress for all your devices.</span>
        </p>
        <div class='hero-buttons'>
          <a href='#/level-list' id='start-button'>START</a>
          <button id='login-button'>LOGIN</button>
        </div>
      </section>
      <section class='reason'>
        <h3>Why Learn Japanese?</h3>
        <div class='reason-detail'>
          <div class='nihongo'>
            <h4>日本語</h4>
          </div>
          <div class='reason-detail__right'>
            <p>
              Have you ever see the news about new advancement of technology and economic development? and we frequently see Japan as the country that is in it. It would be a great opporturnity to participate in that. But, Japan is one of country that is kind of closed to the outside world. In fact that English proficiency is not that high in Japan because the people won't even bother to learn one. Hearing that, the only thing that we can do is to learn Japanese. But you know that's not the main reason people learn Japanese. The main reason is...
            </p>
            <section class="splide" aria-label="Splide Basic HTML Example">
              <div class="splide__track">
                <ul class="splide__list">
                  <li class="splide__slide">
                    <img src="./images/manga/ajin.jpg" alt="Ajin manga slide">
                  </li>
                  <li class="splide__slide">
                    <img src="./images/manga/glt.jpg" alt="Ajin manga slide">
                  </li>
                  <li class="splide__slide">
                    <img src="./images/manga/berserk.jpg" alt="Ajin manga slide">
                  </li>
                  <li class="splide__slide">
                  <img src="./images/manga/jojo.jpg" alt="Ajin manga slide">
                </li>
                <li class="splide__slide">
                  <img src="./images/manga/yotsuba.jpg" alt="Ajin manga slide">
                </li>
                <li class="splide__slide">
                  <img src="./images/manga/vagabond.jpg" alt="Ajin manga slide">
                </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section class='hiragana'>
        <h3>HIRAGANA /// 平仮名 /// ひらがな</h3>
        <p>
          Why do we learn hiragana first if you want to be proficient in Japanese? The answer to that is because it's the first writing system that Japanese kids learn. And because of that, a lot of books for kids is written in hiragana. Hiragana is consist of 46 characters.
          Although one could theoretically write an entire language in hiragana, it is usually only used for the grammatical endings of verbs, nouns, and adjectives, as well as for particles, and some other native Japanese words.
        </p>
        <div class='thin-underline'></div>
      </section>
      <section id='about-me'>
        <h3>About Me</h3>
        <div class='about-me-detail'>
          <div class='about-me-detail__left'>
            <h2>Creator details</h2>
            <p>
              I'm a web engineer who is passionate about learning new things. I'm currently studying Information System at the Gunadarma University. I'm also a fan of Japanese culture and still trying to learn the language.
            </p>
          </div>
          <div class='about-me-detail__right'>
            <h2>Contact me</h2>
            <p>
              You can contact me through the following links:
            </p>
            <div class='contact-me'>
              <a href='mailto:ddefrito84@gmail.com' id='email'>
                <img src='./images/icons/email.svg' alt='email logo' height='20px'>
                Email
              </a>
              <a href='https://www.linkedin.com/in/dhafad/' id='linkedin'>
                <img src='./images/icons/linkedin.svg' alt='linkedin logo' height='20px'>
                LinkedIn
              </a>
              <a href='https://github.com/ASTRSM' id='github'>
                <img src='./images/icons/github.svg' alt='github logo' height='20px'>                
                Github
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    `
  },

  afterRender () {
    if (sessionStorage.getItem('user')) {
      $('#login-button').hide()
    } else {
      $('#login-button').show()
    }

    $('#login-button').on('click', () => {
      authInit()
    })
  }
}

export default home