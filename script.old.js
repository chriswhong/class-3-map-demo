mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN3aG9uZ21hcGJveCIsImEiOiJjbDl6bzJ6N3EwMGczM3BudjZmbm5yOXFnIn0.lPhc5Z5H3byF_gf_Jz48Ug';

const mapOptions = {
    container: 'map-container',
    style: 'mapbox://styles/mapbox/standard', // Use the standard style for the map
    projection: 'globe', // display the map as a globe
    zoom: 17, // initial zoom level, 0 is the world view, higher values zoom in
    center: [-73.98836, 40.73632], // center the map on this longitude and latitude
    bearing: 28.75,
    pitch: 20,
    config: {
        basemap: {
            showPlaceLabels: false,
            showPointOfInterestLabels: false,
            showRoadLabels: false,
            showTransitLabels: false,
            theme: "monochrome"
        }
    },
}

const map = new mapboxgl.Map(mapOptions);
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());


const markerScale = 0.6


// create the popup
const popup1 = new mapboxgl.Popup({
    offset: 25,
    closeOnClick: false,
    closeButton: false,
}).setText(
    'This is NYU Wagner\'s 17th Street building'
);


const marker1 = new mapboxgl.Marker({
    color: 'red',
    scale: markerScale
})
    .setLngLat([-73.98836, 40.73632])
    .setPopup(popup1)
    .addTo(map)
    .togglePopup();

// barnes and noble
const marker2 = new mapboxgl.Marker({
    color: 'purple',
    scale: markerScale
})
    .setLngLat([-73.98960, 40.73693])
    .addTo(map);

