// eslint-disable-next-line no-undef
Feature('Unliking Restaurants')

// eslint-disable-next-line no-undef
Before((I) => {
  I.amOnPage('/')
})

// eslint-disable-next-line no-undef
Scenario('tidak menyukai one restaurant', async (I) => {
  I.seeElement('.post-item_title a')

  // eslint-disable-next-line no-undef
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.post-item_title a').first()
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/like-restaurant')
  I.seeElement('.posts')
  I.seeElement('.post-item_title a')
  I.click('.post-item_title a')
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/like-restaurant')
  I.seeElement('.restaurant_not_found')
  I.grabTextFrom('.restaurant_not_found')
})
