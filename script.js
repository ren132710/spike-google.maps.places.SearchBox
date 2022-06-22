/*
 * spike
 *  - understand how SearchBox works
 *  - async: works if present or not
 *  - defer: works if present or not
 *  - type="text/javascript": works if present or not
 *  //TODO: callback: 'initMap is not a function' error
 *      if I add function initMap () with a console.log, the url calls the function and prints the console.log
 *      however then receive 'ReferenceError: google is not defined' and SearchBox no longer works
 */

//this below is currently working both via Live Server and Parcel
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
