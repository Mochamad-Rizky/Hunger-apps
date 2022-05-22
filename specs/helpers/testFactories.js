import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.getElementById('likeButtonContainer'),
    favoriteRestaurant: FavRestaurantIdb,
    data: {
      restaurant,
    },
  });
};

export { createLikeButtonPresenterWithRestaurant };
