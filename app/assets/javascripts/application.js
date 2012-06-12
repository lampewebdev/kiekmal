// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require_tree .

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
var map;
var markerzwischenspeicher = new Array;
var markerscount = 0;
var mymarker;
var markers = new Array;
var markernr;
var marker;
var markername = ""
var infowindow = new google.maps.InfoWindow();
var kategorie;
var kates = "";
google.maps.event.addListener(infowindow,'closeclick',function(){
  if(marker.getTitle()==null){
  infowindow.setContent(infowindowcontent);
  infowindow.open(map,marker);
  }
});


function initialize() {
  var myOptions = {
    zoom: 14,
    center: new google.maps.LatLng(53.566822,10.005798),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
    disableDefaultUI:true
  }
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

function initmapsfunctions(kate){
  kategorie = kate
    $(document).ready(function(){
      $.each(kategorie,function( intIndex, objValue ){ kates += '<option value="'+objValue+'">'+objValue+'</option>'});
      $('#form1').append('<select id="katesmap">'+ kates +'</select>');
      google.maps.event.addListener(window.map, 'click', function(event) {
        infowindow.close();
        addMarker(event.latLng);});
    });
}
function addMarker(location) {
    markername = "marker"+markerscount
    marker = new google.maps.Marker({
    position: location,
    map: map,
    draggable: false,
    visible: true
  });
  $('#directionsPanel').append('<div id=marker'+markerscount+'></div>');
  infowindowcontent = '<div id="titleform" >'+
                        '<form> Title: <br><input id="'+markername+'form" name="title" type="text" size="30" maxlength="30">'+
                        '<select id="kates">'+ kates +'</select>'+
                        '<input style="display:block" type="button" name="setmarkertitle" value="Naam" onclick="setMarkerTitle(marker)">'+
                        '</form></div>';
  infowindow.setContent(infowindowcontent);
  infowindow.open(map,marker);
  google.maps.event.addListener(marker, 'dblclick', function(event) {
    this.setMap(null);
   $('#'+markername).remove()
    markerzwischenspeicher.splice(markerzwischenspeicher.indexOf(marker),1);
  });
  markerzwischenspeicher.push(marker)
  markerscount +=1;
}

function setMarkerTitle(marker){
  $('#'+markername).append($('#'+markername+'form').val());
  marker.setTitle($('#'+markername+'form').val());
  $('#'+markername).append('<div id=kat'+markername+'>' + $('#kates').val() + '</div>');
}

function jsonfiemarker(marker){
  for(var i=0,len=marker.length; value=marker[i], i<len; i++) {
    var werte='{"title": "'+ value.getTitle() +'", "lat": "'+ value.getPosition().lat()+'","lng": "'+value.getPosition().lng()+'","kategorie": "'+ $('#katmarker'+i).text().toString() +'"}';
    var js1 = JSON.parse(werte);
    var str ='"marker'+i+'" :' + werte;
    markers.push(str);
  };
  mymarker='{"markers":{' + markers + '},"katesmap":"'+ $('#katesmap').val() +'", "mapname":"'+ $('#mapname').val() +'"}'
    alert(mymarker)
  mymarker= JSON.parse(mymarker);
};

function savemap(){
  $(document).ready(function() {   
    $("#saveme").click(function () {
      if(markerzwischenspeicher[0] == "[object Object]"){
      jsonfiemarker(markerzwischenspeicher);
      alert(mymarker);
        $.ajax({
          type: "PUT",
          url: "/map/getmarker/",
          data : mymarker,
          dataType: 'json',
          async:false,
          error: function(msg) { alert( "Error:") },
          success: function(strData){window.location.replace("/map/show/"+strData.id)}
        });      
      }else{
        alert('Bitte Fuegen sie Punkte hinzu');
        return false;
      }
    });
  });
};

function showmap(marker){
  var data = JSON.parse(marker);
  $("#content").append("<div id='mardisplay'></div>")
  $(document).ready(function() {
    $.each(data, function() {
      var pos = new google.maps.LatLng(this.lat,this.lng)
      var image = new google.maps.MarkerImage(this.markerbild,
      // This marker is 20 pixels wide by 32 pixels tall.
      new google.maps.Size(32, 40),
      // The origin for this image is 0,0.
      new google.maps.Point(0,0),
      // The anchor for this image is the base of the flagpole at 0,32.
      new google.maps.Point(0, 32));
      marker = new google.maps.Marker({
        position: pos,
        map: map,
        draggable: false,
        visible: true,
        icon: image
      });
      $('#'+this.name).click(function(){ map.setCenter(pos); });
    });
  });
}

var addressField = document.getElementById('search_address');
var geocoder = new google.maps.Geocoder();
function search() {
    geocoder.geocode(
        {'address': document.getElementById('search_address').value}, 
        function(results, status) { 
            if (status == google.maps.GeocoderStatus.OK) { 
                var loc = results[0].geometry.location;
                // use loc.lat(), loc.lng()
                var erg = new google.maps.LatLng(loc.lat(),loc.lng());
                map.setCenter(erg);
            } 
            else {
                alert("Not found: " + status); 
            } 
        }
    );
};