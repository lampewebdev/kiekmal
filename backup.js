var markerzwischenspeicher = new Array;
var markerscount = 0;
var mymarker;
var markers = new Array;
var markernr;
var marker;
var markername = "";
var infowindow = new google.maps.InfoWindow();
var kategorie;
var kates = "";
// map funktionen fuer das editieren und erstellen von markern
function initmapsfunctions(kategorie){
    $(document).ready(function(){
      kategoriedropdownmenu(kategorie);
      mapeventlistern();
    });
}

// kategorien aus rails uebergebn und in ein dropdown menu uerbegeben
function kategoriedropdownmenu(kategorie){
 $.each(kategorie,function( intIndex, objValue ){ kates += '<option value="'+objValue+'">'+objValue+'</option>'});
}

function mapeventlistern(){
  google.maps.event.addListener(window.map, 'click', function(event) {
    infowindow.close();
    addMarker(event.latLng);
  });
  google.maps.event.addListener(infowindow,'closeclick',function(){
    if(marker.getTitle()==null){
    infowindow.setContent(infowindowcontent);
    infowindow.open(map,marker);
    }
  });
  google.maps.event.addListener(marker, 'dblclick', function(event) {
    this.setMap(null);
    $('#'+markername).remove()
    markerzwischenspeicher.splice(markerzwischenspeicher.indexOf(marker),1);
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
                        '<input style="display:block" type="button" id="setmarkertitle" value="Speichern" onclick="setMarkerTitle(marker)">'+
                        '</form></div>';
  infowindow.setContent(infowindowcontent);
  infowindow.open(map,marker);
  markerzwischenspeicher.push(marker)
  markerscount +=1;
}




function setMarkerTitle(marker){
  marker.setTitle($('#'+markername+'form').val());
  $('#sortable').append('<li id=kat'+markername+'>'+ $('#'+markername+'form').val() + $('#kates').val() + '</li>');
  $('#setmarkertitle').attr('onclick','').unbind('click');
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






//Suche 
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
                //map.panTo(erg);
                map.zoomIn();
                map.zoomOut();
                map.zoomIn();
                map.zoomIn();
            } 
            else {
                alert("Not found: " + status); 
            } 
        }
    );
};