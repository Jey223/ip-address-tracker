const secret_api = 'at_195J7m6CJAebuL2MminR1H7ygvvTE';
const api_url = 'https://geo.ipify.org/api/';
const version_api = 'v2';

//form elements
const enteredIp = document.getElementById('ip-address');
const searchBtn = document.getElementById('search-btn');

//elements to update
let current_ip = document.getElementById('current-ip');
let current_location = document.getElementById('current-location');
let current_zone = document.getElementById('current-zone');
let current_isp = document.getElementById('current-isp');



//create map leaflet
let map = L.map('display-map', {
    'center' : [0,0],
    'zoom' : 0,
    'layers' : [
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})
    ]
})

//create my customIcon marker
let customIcon = L.icon({
    iconUrl : './images/icon-location.svg',
    iconSize : [30, 35],
    iconAnchor : [15, -10]
})

//update Marker
const updateMarker = (update_marker = [34.04915, -118.09462]) => {
    map.setView(update_marker, 13)
    L.marker(update_marker, {
        icon : customIcon
}).addTo(map)
}


const getIpDetails = (default_ip) => {
    if(default_ip == undefined) {
        var ip_url = `${api_url}${version_api}/country,city?apiKey=${secret_api}`;
    }
    else {
        var ip_url = `${api_url}${version_api}/country,city?apiKey=${secret_api}&ipAddress=${default_ip}`;
    }

    fetch(ip_url)
    .then(response => response.json())
    .then(data => {
        current_ip.innerHTML = data.ip
        current_location.innerHTML = `${data.location.city}, ${data.location.country} ${data.location.postalCode}`;
        current_zone.innerHTML = data.location.timezone;
        current_isp.innerHTML = data.isp;

        updateMarker([data.location.lat, data.location.lng]);
    })
    .catch(error => console.log("Oops!! Something went wrong"))
}

getIpDetails();

document.addEventListener('load', updateMarker());
searchBtn.addEventListener('click', e => {
    e.preventDefault()

    if(enteredIp.value !== '' && enteredIp !== null) {
        getIpDetails(enteredIp.value);
        return
    }
    alert("Please Enter a valid Ip Address");
})