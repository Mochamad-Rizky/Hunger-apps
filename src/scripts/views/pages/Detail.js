const Detail = {
  async render() {
    return `
      <div class="detail">
        <h1>Detail</h1>
        <p>
          This is the detail page.
        </p>
      </div>
    `;
  },
  
  async afterRender() {
    console.log('Detail.afterRender');
  },
};

export default Detail;
