import API_ENDPOINT from '../global/api-endpoint';
import CONFIG from '../global/config';
import checkStatusFetchRequest from '../utils/checkStatusFetchRequest';

class FoodNewsResource {
  static async getFoodNews(newsCategory, count) {
    const response = await fetch(API_ENDPOINT.FOOD_NEWS(newsCategory, count), {
      headers: CONFIG.HEADERS_BING,
    });
  
    checkStatusFetchRequest({
      response,
      errorMessage: 'Error to getting list food news, please try again later',
    });
    
    return response.json();
  }
}

export default FoodNewsResource;
