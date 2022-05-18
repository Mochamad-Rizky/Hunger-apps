const Favorite = {
  async render() {
    return `
      <div class="favorite">
        <h1>Favorite</h1>
        <p>
          This is the Favorite page.
        </p>
      </div>
    `;
  },
  
  async afterRender() {
    console.log('favorite page');
  },
};

export default Favorite;
