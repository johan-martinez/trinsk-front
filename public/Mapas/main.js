var map = L.map('map').setView([6.244747, -75.574828], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZmFiaWFuLW9qZWRhIiwiYSI6ImNsMDVxd2hlZDA1bWkzaW56d29mZjZqcjIifQ.Rz31zbVrArZakcIPB0uqzw'
}).addTo(map);

var marker = L.marker([6.257970, -75.591267]).addTo(map);

var circle1 = L.circle([6.236296, -75.579769], {
    color: 'yellow',
    fillColor: 'yellow',
    fillOpacity: 0.5,
    radius: 400
}).addTo(map);

var circle2 = L.circle([6.238819, -75.601767], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
    radius: 300
})

var circle3 = L.circle([6.244291, -75.569782], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
})
var circles = []
circles.push(circle2, circle3)

circles.forEach(element => {
    element.addTo(map);
});

var polygon = L.polygon([
    [6.230933, -75.588497],
    [6.210317, -75.594459],
    [6.208436, -75.589696],
    [6.231556, -75.586141]
],{
    color: 'red',
    fillColor: 'red',
}).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle1.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");