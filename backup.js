
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
  });




function showmap(marker){
  var data = JSON.parse(marker);
  $("#content").append("<div id='mardisplay'></div>")
  var length = 0;
  var waypts = [];
  for(property in data ){if(data.hasOwnProperty(property)){length++;}}
  var c = 0;
  var start;
  var end;
  $(document).ready(function() {
    $.each(data, function() {
    if(c==0){start = new google.maps.LatLng(this.lat,this.lng)}
    else if(c==length-1){end =  new google.maps.LatLng(this.lat,this.lng);}
    else if(!(c==0)||!(c==length-1)){ 
      mar = new google.maps.LatLng(this.lat,this.lng);
      waypts.push({location: mar});
         //waypts.push(new google.maps.LatLng(this.lat,this.lng));
    }
     c++; 
  });




      <% if current_user %>
      Moin Moin <%= current_user.name %>
      <%= link_to "Abmelden", signout_path %>
    <% else %>
      <%= link_to "Anmelden mit Facebook", "/auth/facebook" %>
    <% end %>

    
    
    <input type="text" id="search_address" value=""/>
    <button onclick="search();">Auf der Karte Suchen</button>