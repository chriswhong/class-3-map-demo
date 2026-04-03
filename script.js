mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN3aG9uZ21hcGJveCIsImEiOiJjbDl6bzJ6N3EwMGczM3BudjZmbm5yOXFnIn0.lPhc5Z5H3byF_gf_Jz48Ug';

const mapOptions = {
    container: 'map-container',
    style: 'mapbox://styles/mapbox/standard', // Use the standard style for the map
    projection: 'globe', // display the map as a globe
    zoom: 13, // initial zoom level, 0 is the world view, higher values zoom in
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

// Color palette for different programs
const programColors = {
    'Instructor': '#2E7D32',
    'MUP': '#1976D2',
    'MPA': '#D32F2F',
    'A3SR': '#F57C00',
    'CUSP': '#7B1FA2'
};

const pizzaData = [
    {
        "student_name": "Chris Whong",
        "pizza_place": "Ledo Pizza",
        "longitude": -73.990263,
        "latitude": 40.754294,
        "program": "Instructor",
    },
    {
        "student_name": "New",
        "pizza_place": "Emily's West Village",
        "longitude": -74.00386839,
        "latitude": 40.72948003,
        "program": "MUP",
    },
    {
        "student_name": "Seth",
        "pizza_place": "Leo's Pizza",
        "longitude": -73.9569872,
        "latitude": 40.7125481,
        "program": "MUP",
    },
    {
        "student_name": "Jules",
        "pizza_place": "Lp Pizzeria",
        "longitude": -73.93365964,
        "latitude": 40.69832594,
        "program": "MUP",
    },
    {
        "student_name": "Joey",
        "pizza_place": "Gino's Pizza",
        "longitude": -73.9630856,
        "latitude": 40.67524774,
        "program": "MUP",
    },
    {
        "student_name": "Mylene",
        "pizza_place": "Eddie And Sam's N.Y Pizza",
        "longitude": -82.4592579,
        "latitude": 27.9487278,
        "program": "MUP",
    },
    {
        "student_name": "Ryan",
        "pizza_place": "Johnny's Pizzeria",
        "longitude": -73.83949,
        "latitude": 40.91779,
        "program": "MPA",
    },
    {
        "student_name": "Paul",
        "pizza_place": "Ungaro Coal Fired Pizza Cafe",
        "longitude": -74.13319645,
        "latitude": 40.62625321,
        "program": "MUP",
    },
    {
        "student_name": "Brant",
        "pizza_place": "Tony's Pizza",
        "longitude": -73.91879,
        "latitude": 40.69923,
        "program": "MUP",
    },
    {
        "student_name": "Ruby S",
        "pizza_place": "Rocco Pizza",
        "longitude": -73.94584,
        "latitude": 40.69217,
        "program": "A3SR",
    },
    {
        "student_name": "Johanna",
        "pizza_place": "Best Pizza",
        "longitude": -73.95349549,
        "latitude": 40.71572512,
        "program": "MUP",
    },
    {
        "student_name": "Lula Feifei Yang",
        "pizza_place": "Lombardi's",
        "longitude": -73.99681673,
        "latitude": 40.72398245,
        "program": "CUSP",
    },
    {
        "student_name": "Sophia",
        "pizza_place": "Pizza House",
        "longitude": -83.7348,
        "latitude": 42.2743,
        "program": "MPA",
    },
    {
        "student_name": "Sarah",
        "pizza_place": "Hot's Pizza",
        "longitude": -73.98917213,
        "latitude": 40.71414361,
        "program": "MUP",
    },
    {
        "student_name": "Ruby F",
        "pizza_place": "Julie's Pizzeria",
        "longitude": -73.90722986,
        "latitude": 40.70439921,
        "program": "MUP",
    },
    {
        "student_name": "Laura",
        "pizza_place": "La Pizzeria de Lermit",
        "longitude": -75.1770331,
        "latitude": 4.423909764,
        "program": "MUP",
    },
    {
        "student_name": "Allison",
        "pizza_place": "99¢ Pizza",
        "longitude": -73.98556949,
        "latitude": 40.73254642,
        "program": "MUP",
    },
    {
        "student_name": "Zoe",
        "pizza_place": "L'Industrie Pizza",
        "longitude": -73.95780227,
        "latitude": 40.71163157,
        "program": "MUP",
    },
    {
        "student_name": "Maggie",
        "pizza_place": "Joe & Sal's Pizza",
        "longitude": -73.95868804,
        "latitude": 40.66927766,
        "program": "MUP",
    },
    {
        "student_name": "Angie",
        "pizza_place": "Artichokes",
        "longitude": -74.0018897,
        "latitude": 40.729949,
        "program": "MUP",
    },
    {
        "student_name": "Eva",
        "pizza_place": "Freddy's Pizza Astoria",
        "longitude": -73.92716666,
        "latitude": 40.76294603,
        "program": "MUP",
    },
    {
        "student_name": "Sharon",
        "pizza_place": "Sally's Apizza",
        "longitude": -73.51460606,
        "latitude": 41.09499509,
        "program": "MPA",
    }
]


pizzaData.forEach((studentData) => {
    const marker = new mapboxgl.Marker({
        color: programColors[studentData.program] || '#999999'
    })
        .setLngLat([studentData.longitude, studentData.latitude])
        .setPopup(
            new mapboxgl.Popup({ offset: 25 })
                .setText(`${studentData.student_name} likes to eat pizza at ${studentData.pizza_place}.`)
        )
        .addTo(map);
})

// Create legend
const legend = document.createElement('div');
legend.className = 'legend';
legend.innerHTML = '<h4>Programs</h4>';

Object.entries(programColors).forEach(([program, color]) => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `
        <span class="legend-circle" style="background-color: ${color}"></span>
        <span class="legend-label">${program}</span>
    `;
    legend.appendChild(item);
});

document.body.appendChild(legend);

// Create header
const header = document.createElement('div');
header.className = 'header';
header.innerHTML = `
    <h1>🍕 Web Mapping Class Pizza Map 🗺️</h1>
    <p class="description">This map was crowdsourced in class to show students' favorite pizza places around NYC and beyond!</p>
    <p class="call-to-action">👆 Click the markers to learn about each student's pizza preferences</p>
`;

document.body.appendChild(header);