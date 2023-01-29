document.addEventListener('DOMContentLoaded', function () {
  var map = L.map('map', {
    center: [-6.376694, 106.12],
    zoom: 9,
  });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker1 = L.marker([-6.7156, 105.71]).addTo(map);
  const marker2 = L.marker([-6.907833, 106.1734]).addTo(map);
  const marker3 = L.marker([-6.376694, 105.92]).addTo(map);
  const marker4 = L.marker([-6.308, 106.102]).addTo(map);
  const marker5 = L.marker([-6.156485, 106.418242]).addTo(map);
  const marker6 = L.marker([-6.569224, 106.411325]).addTo(map);
  const marker7 = L.marker([-6.37346, 106.302]).addTo(map);
  const marker8 = L.marker([-6.0606777, 106.130694]).addTo(map);
  const marker9 = L.marker([-6.024102, 106.32961]).addTo(map);
  const marker10 = L.marker([-6.0647, 106.53]).addTo(map);

});