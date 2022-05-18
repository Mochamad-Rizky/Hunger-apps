import CONFIG from './config';

const API_ENDPOINT = {
  FOOD_NEWS: (newsCategory, count) => `${CONFIG.BASE_URL_BING}/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
  LIST: `${CONFIG.BASE_URL_RESTAURANT}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL_RESTAURANT}detail/${id}`,
  POST_REVIEW: `${CONFIG.BASE_URL_RESTAURANT}review`,
};

export default API_ENDPOINT;
