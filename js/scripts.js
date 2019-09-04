function initMap(){
    var directionsDisplay = new google.maps.DirectionsRenderer
    var directionsService = new google.map.DirectionsService
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat:1.2921, lng:36.8219}
    })
    directionsDisplay.setMap(map)
    directionsDisplay.setPanle(document.getElementById('right-panel'))

    var control = document.getElementById('floatinf-panel')
    control.style.display = 'block'
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(control)

    var onChangeHandler = function(){
        calculateAndDisplayRoute(directionsService, directionsDisplay)
    }
    document.getElementById('start').addEventListener('change', onChangeHandler)
    document.getElementById('end').addEventListener('change', onChangeHandler)
}
function calculateAndDisplayRoute(directionsService, directionsDisplay){
    var start = document.getElementById('start').Value()
    var end = document.getElementById('end').value()
    directionsService.calculateAndDisplayRoute({
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    }, function(response, status){
        if (status === 'OK'){
            directionsDisplay.setDirections(response)
        }else{
            window.alert('Directions request failed due to' + status)
        }
    })
}