var heatmapData = [
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
    new google.maps.LatLng(42.3528418,-71.0552038),
];

var boston = new google.maps.LatLng(42.3561685,-71.0580716);


function initialize() {
    var mapOptions = {
        zoom: 13,
        center: boston,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var pointArray = new google.maps.MVCArray(heatmapData);

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: pointArray
    });

    heatmap.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
