// Add console.log to check to see if our code is working
console.log('Working');

// Create the map object with a center and zoom level
//let map = L.map('mapid').setView([40.7, -94.5], 4);
let map = L.map('mapid',{
    center: [34.0522, -118.2437],
    zoom: 14
});
// We create the tile layer that will be the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',{
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributers, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery @ <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: mapbox_API_key
});
// Then we add our 'greymap' tile layer to the map.
streets.addTo(map);

// Add a marker to the map for Los Angeles, California
L.circleMarker([34.0522, -118.2437],{
    radius: 300,
    color: '#000000',
    fillColor: '#ffffa1'
}).addTo(map);

