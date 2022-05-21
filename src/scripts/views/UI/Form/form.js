import './form.scss';

const form = () => `
  <form class="detail__overview-body-reviews__form">
    <div class="detail__overview-body-reviews__form-item">
      <label for="name">Name</label>
      <input type="text" name="name" placeholder="Name" class="input-name__review" />
    </div>
    
    <div class="detail__overview-body-reviews__form-item">
      <label for="review">Review</label>
      <textarea type="text" name="review" placeholder="Review" class="input-description__review"></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
`;

export default form;
