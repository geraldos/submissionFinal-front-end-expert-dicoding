const assert = require('assert')

// eslint-disable-next-line no-undef
Feature('Liking Restaurants')

// eslint-disable-next-line no-undef
Before((I) => {
  I.amOnPage('/')
})

// eslint-disable-next-line no-undef
Scenario('menyukai satu restaurant', async (I) => {
  I.seeElement('.post-item_title a')

  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.post-item_title a').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/like-restaurant')
  I.seeElement('.post-item')
  const likedRestaurantTitle = await I.grabTextFrom('.post-item_title')

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)
})
