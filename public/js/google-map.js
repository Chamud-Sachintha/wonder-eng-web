var google;function init(){for(var e={zoom:7,center:new google.maps.LatLng(6.912631738993953,79.84957472883573),scrollwheel:!1,styles:[{featureType:"administrative.country",elementType:"geometry",stylers:[{visibility:"simplified"},{hue:"#ff0000"}]}]},o=document.getElementById("map"),n=new google.maps.Map(o,e),a=["Sri Lanka"],t=0;t<a.length;t++)$.getJSON("http://maps.googleapis.com/maps/api/geocode/json?address="+a[t]+"&sensor=false",null,(function(e){var o=e.results[0].geometry.location,a=new google.maps.LatLng(o.lat,o.lng);new google.maps.Marker({position:a,map:n,icon:"images/loc.png"})}))}google.maps.event.addDomListener(window,"load",init);