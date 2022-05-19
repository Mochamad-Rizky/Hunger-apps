import './Footer.scss';

class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <hr/>
      <p>Copyright © 2022 - Made with ❤ by Hunger Apps</p>
    `;
  }
}

customElements.define('footer-component', Footer);
