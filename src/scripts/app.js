import UrlParser from './routes/url-parser';
import routes from './routes/routes';
import fireSplide from './utils/splide-init';

const renderPage = () => {
  const url = UrlParser.parseActiveUrlWithCombiner();
  const page = routes[url];
  $('main').html(page.render());
  if (url === '/') {
    fireSplide();
  }
  page.afterRender();
};

export default renderPage;