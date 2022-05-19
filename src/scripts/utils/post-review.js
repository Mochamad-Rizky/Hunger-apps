import RestaurantSource from '../data/RestraurantSource';
import cardReview from '../views/UI/CardReview/card-review';

const postReview = async ({ url, name, review }) => {
  const userInputData = {
    id: url,
    name,
    review,
  };
  
  try {
    const reviewContainer = document.querySelector('.detail__overview-body-reviews__container');
    const data = await RestaurantSource.postReviewRestaurant(userInputData);
    reviewContainer.innerHTML = data.customerReviews.map((reviewData) => cardReview(reviewData)).join('');
  } catch (error) {
    alert(error.message);
  }
};

export default postReview;
