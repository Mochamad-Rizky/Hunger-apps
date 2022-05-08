import './Promotion.scss';

class Promotion extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <hr/>
      <div class="promotion">
        <h2 class="promotion__title">
          Get a 50% discount at all registered restaurants just by following the instructions below
        </h2>
        <p class="promotion__paragraph">
          First of all, you have to be able to finish food by providing
           photos with the food you eat. And after that you can send the 
           evidence by sending it on your insta story and tagging the 
           official hunger apps instagram account.
        </p>
        <p class="promotion__paragraph">
          After doing this, you just have to wait for confirmation 
          from the admin and get a discount code that can be used in 
          all restaurants. Let's join the challenge.
        </p>
        <a class="promotion__link" href="https://www.instagram.com">Post on Instagram NOW</a>
      </div>
    `;
  }
}

customElements.define('promotion-component', Promotion);