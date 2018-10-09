//search by artist
var artist_id;

function search_by_artist(artist_name){

    var queryURL="https://api.songkick.com/api/3.0/search/artists.json?apikey=4s4kGBz0WjJ4Yk6O&query="+artist_name;
    
    var temp_id = "";
   
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
      //console.log(response);
      
      console.log(response.resultsPage.results);
      console.log("artist id: "+response.resultsPage.results.artist[0].id);
     
      artist_id=response.resultsPage.results.artist[0].id;
      search_similar_artist(artist_id);

      up_coming_event(artist_id);
      temp_id = artist_id;
      console.log("inside .ajax "+temp_id);

    })
    .then(function() {
        console.log("promise", artist_id)
    });
  
   
};

//search by artist and data range  e.g. data format: min_date=2009-10-01 & max_date:2009-10-30

function search_by_artist_datarange(artist_name, min_date, max_date)
{
    var artist_name;
    var min_date;
    var max_date;

    var queryQuery="https://api.songkick.com/api/3.0/events.json?apikey=4s4kGBz0WjJ4Yk6O&artist_name="+artist_name+"&min_date="+min_date+"+&max_date="+max_date;

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
      console.log(response);
      
      });


}
// search by similar artist
//"https://api.songkick.com/api/3.0/artists/{artist_id}/similar_artists.json?apikey=4s4kGBz0WjJ4Yk6O"
function search_similar_artist(artist_id)
{
    var queryURL="https://api.songkick.com/api/3.0/artists/"+artist_id+"/similar_artists.json?apikey=4s4kGBz0WjJ4Yk6O";
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
      console.log(response);
      
      });

};

//search by venue
function search_by_venue(venue_name){
    var venue_name;
    
    var queryURL = "https://api.songkick.com/api/3.0/search/venues.json?query="+venue_name+"&apikey=4s4kGBz0WjJ4Yk6O";
 
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
      console.log(response);
      
      });

};

//search by event
//"https://api.songkick.com/api/3.0/events/{event_id}.json?apikey=4s4kGBz0WjJ4Yk6O"
function displayVenueInfo(venue_id){
    var venue_id;
    var queryURL ="https://api.songkick.com/api/3.0/venues/"+venue_id+".json?apikey=4s4kGBz0WjJ4Yk6O";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
      console.log(response);
      
      });

};

//search by location (lat, long)
function search_by_lat_long(latitude, longitude){
    var latitude;
    var longitude;

    var queryURL ="https://api.songkick.com/api/3.0/search/locations.json?location=geo:"+latitude+","+longitude+"&apikey=4s4kGBz0WjJ4Yk6O";
 
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
      console.log(response);
      
      });

};

//search for venue name e.g. London
function search_by_venueName(venueName){
    var venueName;

    var queryURL ="https://api.songkick.com/api/3.0/search/locations.json?query="+venueName+"&apikey=4s4kGBz0WjJ4Yk6O";
 
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
       
      
      });

};

function search_by_metroArea(metroName){

    var queryURL ="https://api.songkick.com/api/3.0/metro_areas/{metro_area_id}/calendar.json?apikey=4s4kGBz0WjJ4Yk6O";
}


function up_coming_event(artist_id){

    var queryURL = "https://api.songkick.com/api/3.0/artists/"+artist_id+"/calendar.json?apikey=4s4kGBz0WjJ4Yk6O";
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
       
      
      });

}

//$(document).ready(function(){
var band_name = "Mariah Carey";
artist_id= search_by_artist(band_name);

console.log(" in the main  artist id  "+artist_id);

//});


var venue_name="San Diego"
//search_by_venueName(venue_name);
