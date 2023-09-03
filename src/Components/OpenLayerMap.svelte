<script>
    import { onMount } from 'svelte';
    import 'ol/ol.css';
    import TileLayer from 'ol/layer/Tile.js';
    import { Map, View } from 'ol';

    import { OSM, Vector as VectorSource } from 'ol/source';
    import VectorLayer from 'ol/layer/Vector';
    import { GeoJSON } from 'ol/format';
    import { Style, Fill } from 'ol/style';
  
    let map;
  
    onMount(() => {
      const raster = new TileLayer({
        source: new OSM(),
      });
  
      // Fetch GeoJSON data and add as a Vector layer
      fetch('/data/countries.geojson')
  .then(response => {
     console.log(response);
     return response.json();
  })
        .then(geojsonData => {
          const vector = new VectorLayer({
            source: new VectorSource({
              features: new GeoJSON().readFeatures(geojsonData),
            }),
            style: new Style({
              fill: new Fill({
                color: 'rgba(0, 106, 78, 0.75)', // #006a4e with 0.75 opacity
              }),
            }),
          });
  
          map = new Map({
            target: 'map',
            layers: [raster, vector],
            view: new View({
              center: [0, 0],
              zoom: 2,
            }),
          });
        });
    });
  </script>
  
  <style>
    #map {
      width: 100vw;
      height: 100vh;
      position: absolute;
    }
  </style>
  
  <div id="map"></div>
  