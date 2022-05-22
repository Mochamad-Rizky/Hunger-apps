Feature('Favorite Restaurant');

const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const favoriteEmptyMessage = 'U DON\'T HAVE ANY FAVORITE RESTAURANT';

Scenario('show empty favorite Restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see(favoriteEmptyMessage, '.error-message');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(favoriteEmptyMessage, '.error-message');
  
  I.amOnPage('/');
  
  I.seeElement('.card-item__description a');
  const firstCard = locate('.card-item__description a').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);
  
  I.seeElement('#likeButton');
  I.click('#likeButton');
  
  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-card-item');
  const likedCardTitle = await I.grabTextFrom('.card-item__description a');
  
  assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(favoriteEmptyMessage, '.error-message');
  
  I.amOnPage('/');
  
  I.seeElement('.card-item__description a');
  const firstCard = locate('.card-item__description a').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);
  
  I.seeElement('#likeButton');
  I.click('#likeButton');
  
  I.amOnPage('/#/favorite');
  I.seeElement('.card-item__description a');
  const likedCardTitle = await I.grabTextFrom('.card-item__description a');
  
  assert.strictEqual(firstCardTitle, likedCardTitle);
  
  I.click(likedCardTitle);
  
  I.seeElement('#likeButton');
  I.click('#likeButton');
  
  I.amOnPage('/#/favorite');
  I.seeElement('.error-message');
  const noFavoriteRestaurant = await I.grabTextFrom('.error-message');
  
  assert.strictEqual(favoriteEmptyMessage, noFavoriteRestaurant);
});

Scenario('customer review', async ({ I }) => {
  I.see(favoriteEmptyMessage, '.error-message');
  
  I.amOnPage('/');
  
  I.seeElement('.card-item__description a');
  I.click(locate('.card-item__description a').first());
  
  I.seeElement('.detail__overview-body-reviews__form');
  
  const textReview = 'Test for e2e testing';
  const outputTextReview = 'Test for e2e testing';
  I.fillField('input', 'Rizky');
  I.fillField('textarea', textReview);
  
  I.click('button[type="submit"]');
  
  const lastReview = locate('article p').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  
  assert.strictEqual(outputTextReview, lastReviewText);
});
