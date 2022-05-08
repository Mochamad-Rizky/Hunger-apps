import CONFIG from './config';

const API_ENDPOINT = {
  FOOD_NEWS: (newsCategory, count) =>`${CONFIG.BASE_URL_BING}/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
};

export default API_ENDPOINT;