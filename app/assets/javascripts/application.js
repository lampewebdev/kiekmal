//= require_tree .
//= require jquery
//= require jquery_ujs
//= require jquery-ui



var map;
var kates = "";
var marker;
var markerscount = 0;

var bool="true";
var markername = "";
var infoboxoptions = {
                
                disableAutoPan: false
                ,maxWidth: 0
                ,pixelOffset: new google.maps.Size(0, -50)
                ,zIndex: null
                ,boxStyle: { 
                  background: "#fff no-repeat"
                  ,opacity: 0.90
                  ,width: "280px"
                 }
                ,closeBoxMargin: "0px 0px 0px 0px"
                ,closeBoxURL: ""
                ,infoBoxClearance: new google.maps.Size(1, 1)
                ,isHidden: false
                ,pane: "floatPane"
                ,enableEventPropagation: false
};
var infowindow = new InfoBox(infoboxoptions); 
//init the map for the hole site
function initialize() {
  var myOptions = {
    zoom: 14,
    center: new google.maps.LatLng(53.566822,10.005798),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControl: true,
    zoomControlOptions:{
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
    disableDefaultUI:true
  }
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions)
}

function createeditmaps(kategorie){
  $(document).ready(function() {
    kategoriedropdownmenu(kategorie);
    mapeventlistern(true)
  });
}

function mapeventlistern(){
    google.maps.event.addListener(map, 'click', function(event) {
      checkmarkertitle(event.latLng)
    });
}
function addMarker(location) {
  markername = "marker"+markerscount
    marker = new google.maps.Marker({
      position: location,
      map: map,
      draggable: false,
      visible: true,
     });
  infowindowcontent = '<div id="titleform">'+
                      '<form> Title: <br><input id="'+markername+'form" name="title" type="text" size="30" maxlength="30">'+kates+
                      '<input style="display:block;z-index:150" type="button" id="setmarkertitle" value="Speichern" onclick="setMarkerTitle(marker)">'+
                      '</form></div>';
  infowindow.setContent(infowindowcontent);
  infowindow.open(map,marker);
    bool="false";
  markerscount+=1
}



//////helper methoden//////

// kategorien aus rails uebergebn und in ein dropdown menu uerbegeben
function kategoriedropdownmenu(kategorie){
 $.each(kategorie,function( intIndex, objValue ){ kates += '<option value="'+objValue+'">'+objValue+'</option>'});
  kates += '<select id="kates">'+ kates +'</select>'
}

function checkmarkertitle(el){
      if (bool=="true") {
        addMarker(el);
      }else{
        $(function() {
          $( "#dialog-message" ).dialog({
            modal: true,
            buttons: {Ok: function(){$( this ).dialog( "close" );}},
            closeText: 'hide'
          });
        });
      }
}

function setMarkerTitle(marker){
  marker.setTitle($('#'+markername+'form').val());
  $('#markerlist').append('<li id=kat'+markername+'>'+ $('#'+markername+'form').val() + $('#kates').val() + '</li>');
  $('#setmarkertitle').attr('onclick','').unbind('click');
  bool="true";
}