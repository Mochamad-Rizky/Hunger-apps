import * as TestFactories from './helpers/testFactories';
import FavRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
  
  beforeEach(() => {
    addLikeButtonContainer();
  });
  
  it('should show the like button when the movie has not liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    
    expect(document.querySelector('[aria-label="unlike this restaurant"')).toBeFalsy();
  });
  
  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavRestaurantIdb.getRestaurant(1);
    
    expect(restaurant).toEqual({ id: 1 });
    
    await FavRestaurantIdb.deleteRestaurant(1);
  });
  
  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});
    
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
