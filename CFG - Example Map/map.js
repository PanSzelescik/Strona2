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
        const markers = array.map((object) => {
            const marker = L.marker(object.coords).addTo(map);
            marker.bindPopup(`<b>${object.name}</b><br>${object.description}`);
            return marker;
        })
    })
    .catch(console.error);

/*map.on('click', (e) => {
    const coord = e.latlng;
    const lat = coord.lat;
    const lng = coord.lng;
    console.log(`You clicked the map at latitude: ${lat} and longitude: ${lng}`);
});*/