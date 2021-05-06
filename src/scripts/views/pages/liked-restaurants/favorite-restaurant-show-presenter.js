class FavoriteRestaurantShowPresenter {
  constructor ({ view, favoriteRestaurants }) {
    this._view = view
    this._favoriteRestaurants = favoriteRestaurants

    this._showFavoriteRestaurants()
  }

  async _showFavoriteRestaurants () {
    const restaurants = await this._favoriteRestaurants.getAARestaurants()
    this._displayRestaurants(restaurants)
  }

  _displayRestaurants (restaurants) {
    this._view._showFavoriteRestaurants(restaurants)
  }
}

export default FavoriteRestaurantShowPresenter
