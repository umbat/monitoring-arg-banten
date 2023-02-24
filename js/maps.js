document.addEventListener('DOMContentLoaded', function () {
  var map = L.map('map', {
    center: [-6.376694, 106.12],
    zoom: 8,
  });
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  var legend = L.control({
    position: 'bottomleft',
  });

  legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'legend');
    div.innerHTML += '<h4>Curah Hujan</h4>';
    div.innerHTML += '<i style="background: #477AC2"></i><span>Tidak Hujan</span><br>';
    div.innerHTML += '<i style="background: #448D40"></i><span>1 - 5 mm/jam</span><br>';
    div.innerHTML += '<i style="background: #E6E696"></i><span>5 - 10 mm/jam</span><br>';
    div.innerHTML += '<i style="background: #E8E6E0"></i><span>10 - 20 mm/jam</span><br>';
    div.innerHTML += '<i style="background: #FFFFFF"></i><span>> 20 mm/jam</span><br>';
    return div;
  };
  legend.addTo(map);

  const marker1 = L.marker([-6.7156, 105.71]).addTo(map).bindPopup('<b>ID Stasiun: </b><br>Latitude: </b><br>Longitude: </b><br>Hujan 1 jam: </b><br>Hujan 24 jam: </b><br>Status Curah Hujan: </b>');
  const marker2 = L.marker([-6.907833, 106.1734]).addTo(map).bindPopup('<b>ID Stasiun: </b><br>Latitude: </b><br>Longitude: </b><br>Hujan 1 jam: </b><br>Hujan 24 jam: </b><br>Status Curah Hujan: </b>');
  const marker3 = L.marker([-6.376694, 105.92]).addTo(map).bindPopup('<b>ID Stasiun: </b><br>Latitude: </b><br>Longitude: </b><br>Hujan 1 jam: </b><br>Hujan 24 jam: </b><br>Status Curah Hujan: </b>');
  const marker4 = L.marker([-6.308, 106.102]).addTo(map).bindPopup('<b>ID Stasiun: </b><br>Latitude: </b><br>Longitude: </b><br>Hujan 1 jam: </b><br>Hujan 24 jam: </b><br>Status Curah Hujan: </b>');
  const marker5 = L.marker([-6.156485, 106.418242]).addTo(map).bindPopup('<b>ID Stasiun: </b><br>Latitude: </b><br>Longitude: </b><br>Hujan 1 jam: </b><br>Hujan 24 jam: </b><br>Status Curah Hujan: </b>');
  const marker6 = L.marker([-6.611524, 105.95678]).addTo(map).bindPopup('<b>ID Stasiun: </b><br>Latitude: </b><br>Longitude: </b><br>Hujan 1 jam: </b><br>Hujan 24 jam: </b><br>Status Curah Hujan: </b>');
  const marker7 = L.marker([-6.37346, 106.302]).addTo(map).bindPopup('<b>ID Stasiun: </b><br>Latitude: </b><br>Longitude: </b><br>Hujan 1 jam: </b><br>Hujan 24 jam: </b><br>Status Curah Hujan: </b>');
  const marker8 = L.marker([-6.0606777, 106.130694]).addTo(map).bindPopup('<b>ID Stasiun: </b><br>Latitude: </b><br>Longitude: </b><br>Hujan 1 jam: </b><br>Hujan 24 jam: </b><br>Status Curah Hujan: </b>');
  const marker9 = L.marker([-6.024102, 106.32961]).addTo(map).bindPopup('<b>ID Stasiun: </b><br>Latitude: </b><br>Longitude: </b><br>Hujan 1 jam: </b><br>Hujan 24 jam: </b><br>Status Curah Hujan: </b>');
  const marker10 = L.marker([-6.0647, 106.53]).addTo(map).bindPopup('<b>ID Stasiun: </b><br>Latitude: </b><br>Longitude: </b><br>Hujan 1 jam: </b><br>Hujan 24 jam: </b><br>Status Curah Hujan: </b>');
});
