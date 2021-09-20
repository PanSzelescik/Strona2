const firstX = 52.325;
const firstY = 17.565;
const firstZoom = 13;
const map = L.map('map').setView([firstX, firstY], firstZoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([52.32770097964147, 17.57949829101563]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
marker.on('click', console.log)

/*map.on('click', e => {
    const coord = e.latlng;
    const lat = coord.lat;
    const lng = coord.lng;
    console.log(`You clicked the map at latitude: ${lat} and longitude: ${lng}`);
});*/