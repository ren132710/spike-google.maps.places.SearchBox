/*
 * spike
 *  - understand how SearchBox works
 *  - with and without async, defer attributes
 *  - with and without callback param
 *  - test with parcel
 */
const placeResult = document.querySelector('[data-place-result]')
const placeSearch = document.querySelector('[data-place-search]')
console.log(placeSearch)
const searchBox = new google.maps.places.SearchBox(placeSearch)
searchBox.addListener('places_changed', () => {
  // get the first place returned from the search
  const place = searchBox.getPlaces()[0]
  if (place == null) return
  placeResult.textContent = JSON.stringify(place, null, 2)
  const lat = place.geometry.location.lat()
  const long = place.geometry.location.lng()
  const location = place.address_components[0].long_name
  const maps_place_id = place.place_id
  console.log('params: ', lat, long, maps_place_id, location)
})

function initMap() {
  console.log('hello')
}
