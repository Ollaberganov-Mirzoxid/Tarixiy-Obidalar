// O'zbekistonning markaziy koordinatalari
var map = L.map('map').setView([41.2995, 69.2407], 6); // Toshkent

// OpenStreetMap yordamida xaritani yaratish
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Obidalar ma'lumotlarini saqlash (100+ obida)
var obidalar = [
  {
    name: "Xivaki Qal'asi",
    lat: 41.3785,
    lon: 60.2754,
    image: "assets/img/xiva.jpg"
  },
  {
    name: "Bukhoro Minorasi",
    lat: 39.7775,
    lon: 64.4212,
    image: "assets/img/xiva.jpg"
  },
  {
    name: "Registon Maydoni",
    lat: 39.6558,
    lon: 66.9693,
    image: "assets/img/xiva.jpg"
  },
  // Ko'proq obidalarni shu yerga qo'shish mumkin
];

// Obidalarni xaritaga qo'shish
obidalar.forEach(function(obida) {
  var marker = L.marker([obida.lat, obida.lon]).addTo(map);
  
  // Pop-up oynasini yaratish
  var popupContent = '<span class="popup-title">' + obida.name + '</span>';
  popupContent += '<br><img src="' + obida.image + '" alt="' + obida.name + '" style="width: 100%; height: auto; border-radius: 5px;">';

  marker.bindPopup(popupContent);
});
