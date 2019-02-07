import mapboxgl from 'mapbox-gl';

// const token = 'pk.eyJ1IjoiZ2Vvcmdlc2JhbGxhcmQiLCJhIjoiY2pycjVwN3MzMXcxeDQ5bnp5em1vZmtkZCJ9.gouJDqfAkJ3_x6HpQFD_Ug';

const mapBuilder = (token, lat, long) => {
  mapboxgl.accessToken = token;
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [long, lat],
    zoom: 12
  });
  new mapboxgl.Marker()
    .setLngLat([long, lat])
    .addTo(map);
};


export { mapBuilder };
