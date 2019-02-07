// TODO: Write your JS code in here
import { mapBuilder } from './plugins/init_mapboxgl';

const token = 'pk.eyJ1IjoiZ2Vvcmdlc2JhbGxhcmQiLCJhIjoiY2pycjVwN3MzMXcxeDQ5bnp5em1vZmtkZCJ9.gouJDqfAkJ3_x6HpQFD_Ug';
const submitAddress = document.querySelector('.btn');

const handleClick = (event) => {
  event.preventDefault();
  const address = document.querySelector('#your-address').value;
  const baseUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=`;

  fetch(`${baseUrl}${token}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const dataHash = data.features[0].center;
      console.log(dataHash);
      const latitude = dataHash[0];
      const longitude = dataHash[1];
      console.log(longitude);
      console.log(latitude);
      mapBuilder(token, longitude, latitude);
    });
};

submitAddress.addEventListener("click", handleClick);
