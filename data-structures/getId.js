const places = [
  { id: 1, name: "Restaurant", location: "Poznan" },
  { id: 2, name: "Gym", location: "Krakow" },
  { id: 3, name: "Museum", location: "Poznan" },
];


function getPlaceId(places, name) {
    return places.find(place => place.name === name).id;
}

console.log(getPlaceId(places, "Gym"));