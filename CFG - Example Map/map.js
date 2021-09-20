const firstX = 52.325;
const firstY = 17.565;
const firstZoom = 13;
const map = L.map('map').setView([firstX, firstY], firstZoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

fetch('https://panszelescik.github.io/Strona2/CFG%20-%20Example%20Map/markers.json')
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        const err = new Error('Response is not ok');
        err.response = response;
        throw err;
    })
    .then((array) => {
        array.forEach((object) => {
            L.marker(object.coords)
                .addTo(map)
                .bindPopup(`<b>${object.name}</b><br>${object.description}`);
        })
    })
    .catch(console.error);

map.locate({setView: true, maxZoom: 16});

map.on('locationfound', (e) => {
    const radius = e.accuracy;

    L.marker(e.latlng)
        .addTo(map)
        .bindPopup("Jesteś w zasięgu " + radius + " metrów od tego punktu.")
        .openPopup();

    L.circle(e.latlng, radius)
        .addTo(map);
});

/*map.on('click', (e) => {
    const coord = e.latlng;
    const lat = coord.lat;
    const lng = coord.lng;
    console.log(`You clicked the map at latitude: ${lat} and longitude: ${lng}`);
});*/