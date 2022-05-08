import API_ENDPOINT from "../global/api-endpoint";
import CONFIG from "../global/config";

class FoodNewsResource {
  static async getFoodNews(newsCategory, count) {
    const res = await fetch(API_ENDPOINT.FOOD_NEWS(newsCategory, count), {
      headers: CONFIG.HEADERS_BING,
    });

    return res.data;
  }
}

export default FoodNewsResource;