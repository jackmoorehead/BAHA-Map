mapboxgl.accessToken = 'pk.eyJ1IjoiamFja21vb3JlaGVhZCIsImEiOiJja3VnMGZhemUwaGx6Mm9udGhkeHUxZTFlIn0.Q8IHHn3_AScuPE7ehUBk_g';

const map = new mapboxgl.Map({
  style: 'mapbox://styles/jackmoorehead/ckwy75rdm00ha14n1lahpkxfg', // Your Style URL goes here
  container: 'map', // this is the container ID that we set in the HTML
  center: [-122.2730, 37.8715], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 11 // starting zoom, again you can choose the level you'd like.
    });