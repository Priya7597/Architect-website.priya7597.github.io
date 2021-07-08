
function myMap() {  

var mapOptions = {  

    center: new google.maps.LatLng(51.5, -0.12),  

    zoom: 5,  

    mapTypeId: google.maps.MapTypeId.ROADMAP  

}  

var map = new google.maps.Map(document.getElementById("map"), mapOptions);  
var marker = new google.maps.Marker({position:myCenter});
marker.setMap(map);
}  

