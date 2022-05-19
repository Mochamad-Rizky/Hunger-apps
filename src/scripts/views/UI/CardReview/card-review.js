const cardReview = (review) => `
  <article>
    <h3>${review.name}</h3>
    <date>${review.date}</date>
    <p>${review.review}</p>
  </article>
`;

export default cardReview;
