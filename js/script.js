var one = document.getElementById('one');
var two = document.getElementById('two');
// var img = document.getElementById('img-here');
// var map = L.map("map").setView([40.7, -74.1], 10)
var map = L.map("map").setView([7.80000, 15.80000], 11)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// var imageUrl = '', imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
var imageUrl = '', imageBounds = [[7.75350, 15.92240], [7.83360, 15.84230]];

one.onclick = function(){
    imageUrl = "images/Frontend_1.png";
    L.imageOverlay(imageUrl, imageBounds).addTo(map);
    one.classList.add('active')
    if(two.classList.contains('active')){
        two.classList.remove('active');
    }
}
two.onclick = function(){
    imageUrl = "images/Frontend_2.png";
    L.imageOverlay(imageUrl, imageBounds).addTo(map);
    two.classList.add('active')
    if(one.classList.contains('active')){
        one.classList.remove('active');
    }
}



// L.imageOverlay(imageUrl, imageBounds).addTo(map);