import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../ruotes/url-parser';
import routes from '../ruotes/routes';

class App {
  constructor({ button, drawer, content, skipLink }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._skipLink = skipLink;
    
    this._initialAppShell();
  }
  
  _initialAppShell() {
    this._initialDrawer();
    this._initialSkipLink();
  }
  
  _initialDrawer() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  _initialSkipLink() {
    this._skipLink.addEventListener('click', () => {
      this._content.tabIndex = 0;
      this._content.focus();
    });
  }
  
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
