import RestaurantSource from '../../data/restaurant-source'
import { createRestaurantItemTemplate } from '../templates/restaurant'

const ListRestaurant = {
  async render () {
    return `
    <section class="content">
      <div class="contents">
          <h1 class="content_label" id="maincontent">List Makanan</h1>
          <div class="posts" id="listMakanan"></div>
      </div>
    </section>
    `
  },

  async afterRender () {
    const restaurants = await RestaurantSource.restaurantList()
    const restauransContainer = document.querySelector('#listMakanan')
    restaurants.forEach((restaurant) => {
      restauransContainer.innerHTML += createRestaurantItemTemplate(
        restaurant
      )
    })
    console.log(restaurants)
  }
}

export default ListRestaurant
