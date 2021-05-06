import FavoriteRestaurantIdb from '../../data/favoriterestaurant-db'
import { createRestaurantItemTemplate } from '../templates/restaurant'

const LikeRestaurant = {
  async render () {
    return `
    <section class="content">
      <div class="contents">
          <h1 class="content_label" id="maincontent">List Favorite Restaurant</h1>
          <div class="posts" id="listFavorite"></div>
      </div>
    </section>
    `
  },

  async afterRender () {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants()
    const restaurantsContainer = document.querySelector('#listFavorite')
    const restaurantTitle = document.querySelector('#maincontent')
    if (!restaurants.length) {
      restaurantTitle.innerHTML += '<div class="restaurant_not_found">Tidak ada restaurant untuk ditampilkan</div>'
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant)
      })
    }
  }
}

export default LikeRestaurant
