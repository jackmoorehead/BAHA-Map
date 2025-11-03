mapboxgl.accessToken = 'pk.eyJ1IjoiamFja21vb3JlaGVhZCIsImEiOiJja3VnMGZhemUwaGx6Mm9udGhkeHUxZTFlIn0.Q8IHHn3_AScuPE7ehUBk_g';
const map = new mapboxgl.Map({
        container: 'map',  // this is the container ID that we set in the HTML
        style: 'mapbox://styles/jackmoorehead/ckwy75rdm00ha14n1lahpkxfg', // Your Style URL goes here
        center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
        zoom: 11  // starting zoom, again you can choose the level you'd like.
    });

map.on('load', function() { // When the map object (map) has an event (on) where it has loaded (load), then run these pieces of code (function)
    map.addSource('points-data', { // Adding a source to the map
        type: 'geojson', // data type
        data: 'https://raw.githubusercontent.com/jackmoorehead/BAHA-Map/refs/heads/main/data/183data.geojson' // link to geodata
    });

    map.addLayer({ // Function for creating a marker layer for each data point on the map
        id: 'points-layer',
        type: 'circle',
        source: 'points-data',
        paint: {
            'circle-color': '#4264FB',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
        }
    });

    // Add click event for popups

    map.on('click', 'points-layer', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const properties = e.features[0].properties;

      // Create popup content using the actual data properties

      const popupContent = `
        <div>
          <h3>${properties.Landmark}</h3>
          <p><strong>Address:</strong> ${properties.Address}</p>
          <p><strong>Architect & Date:</strong> ${properties.Architect_Date}</p>
          <p><strong>Designated:</strong> ${properties.Designated}</p>
        </div>

      `;

      new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(popupContent)
          .addTo(map);

    });

     // Change cursor to pointer when hovering over points
    map.on('mouseenter', 'points-layer', () => {
        map.getCanvas().style.cursor = 'pointer';

    });

    // Change cursor back when leaving points
    map.on('mouseleave', 'points-layer', () => {
        map.getCanvas().style.cursor = '';
    
  });

});