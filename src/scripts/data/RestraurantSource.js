import API_ENDPOINT from '../global/api-endpoint';
import checkStatusFetchRequest from '../utils/checkStatusFetchRequest';

class RestaurantSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    checkStatusFetchRequest({
      response,
      errorMessage: 'Failed to getting list restaurant, please try again later',
    });
    
    return response.json();
  }
  
  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    checkStatusFetchRequest({
      response,
      errorMessage: 'Failed to getting detail restaurant, please try again later',
    });
    
    return response.json();
  }
  
  static async postReviewRestaurant(data) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    checkStatusFetchRequest({
      response,
      errorMessage: 'Failed to post review restaurant',
    });
    
    return response.json();
  }
}

export default RestaurantSource;
