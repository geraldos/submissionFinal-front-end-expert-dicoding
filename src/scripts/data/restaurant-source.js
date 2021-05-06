import API_ENDPOINT from '../config/api-endpoint'

class RestauranSource {
  static async restaurantList () {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT)
    const responseJson = await response.json()
    console.log(responseJson.restaurants)
    return responseJson.restaurants
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id))
    const responseJson = await response.json()
    return responseJson.restaurant
  }
}

export default RestauranSource
