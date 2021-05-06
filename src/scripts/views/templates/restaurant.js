import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import CONFIG from '../../config/config'

const createRestaurantItemTemplate = (restaurant) => `
  <article class="post-item">
      <img class="post-item_thumbnail lazyload"
            src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}"
            alt="Gambar Makanan">
    <div class="post-item_content">
        <h1 class="post-item_title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
        <p class="post-item_description">📃${
          restaurant.description.length > 350 ? restaurant.description.substr(0, 250) + '...' : restaurant.description
        }</p>
        <p class="post-item_description_subs"><strong>City:</strong> 🏙${restaurant.city}</p>
        <p class="post-item_description"><strong>Rating:</strong> ⭐️${restaurant.rating}</p>
    </div>
  </article>
`

const createRestaurantDetailTemplate = (restaurant) => `
<h1 class="restaurant_title">${restaurant.name}</h1>
  <picture>
  <img class="restaurantposter lazyload" src="${CONFIG.BASE_IMAGE_URL_LARGE}${restaurant.pictureId}" alt="${restaurant.name}" />
  </picture>
  <div class="restaurant_info">
  <h3 style="font-size: 22px;">Information</h3>
    <h4>City: 🏙${restaurant.city}</h4>
    <h4>Address: 🏠${restaurant.address}</h4>
    <h4>Rating: ⭐️${restaurant.rating}</h4>
    <h4>Category: 🔎${restaurant.categories.map(restaurant => restaurant.name)}</h4>
    <h4>Food: 🍔${restaurant.menus.foods.map(menu => menu.name)}</h4>
    <h4>Drink: 🍹${restaurant.menus.drinks.map(menu => menu.name)}</h4>
  </div>
  <div class="restaurant_description" style="margin-top: 15px;">
    <h3 style="font-size: 22px;">Description</h3>
    <p>📃${restaurant.description}</p>
  </div>
  <div class="restaurant_description" style="margin-top: 15px;">
    <h3 style="font-size: 22px;">Customer Review</h3>
    <p>${restaurant.customerReviews.map(customer => 'Nama: ' + customer.name + '<br>' + 'Review: ' + customer.review + '<br>' + 'Tanggal Review: ' + customer.date)}</p>
  </div>
  `
const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate
}
