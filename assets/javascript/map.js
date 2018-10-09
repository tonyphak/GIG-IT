

function initMap() {

//   function category(prop) {
      
//     if(prop === "house" ){
//     this.iconImage = "<i class='fas fa-home'></i>"}

//     if(prop === "coffee"){
//         this = "<i class='fas fa-coffee'></i>"
//     }
//     if(prop === "theater"){
//        this = "<i class='fas fa-theater-masks'></i>"
//    }
//    if(prop === "amptheater"){
//        this = "<i class='fas fa-microphone'></i>"
//    }
//    if(prop === "bar"){
//        this = "<i class='fas fa-beer'></i>"
//    }
//    if(prop === "venue"){
//        this = "<i class='fas fa-music'></i>"
//    }
// };


  function geoCoding(){



    database.ref("Event").on("child_added", function(snapShot) {
      let snap = snapShot.val()
    let location = snap.location;
    let eventInput = snap.eventName;
    let bandName = snap.bandName;
    let date = snap.eventDate;
    let time = snap.eventTime;
    // let locationType = snap.locationType;
    // let artistPhotos = "";
    let address = "";
  //   let locationType = $(".btn").click(function() {
  //     var fired_button = $(".btn").val();
  
  //     locationType = fired_button
  // });
  
    let userEvents = [{
      coords: {
          lat:0 ,
          lng:0
      },
      content: "" ,
      title: ""
  
    }]
  
  
   
  
  
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params:{
        address:location,
        key:'AIzaSyCPCxRMUtugy5OvXKJupUilkrVY1QPgqsw'
      }
    }).then(function(response){
      console.log(response)
  
      let results = response.data.results[0]
  
      let lat = results.geometry.location.lat;
  
      let lng = results.geometry.location.lng;
  
      address = results.formatted_address
  
      let contentString = '<div class=contentWindow>' + '<h1 class="windowVenue">'+ eventInput +'</h1>' + '<div class=EventInfoWindow>' +
      '<p class="windowCity"> Date: ' + date + ' @ ' + time + '</p>' +
      '<p class="windowCity"> City: ' + address + '</p>' +
      '<p class="windowCity"> Line Up: ' + bandName + '</p>' + '</div>'
      + '</div>' ;
  
    
      console.log(lat);
  
      console.log(lng);
       
      userEvents = [{
        coords: {
          lat: lat,
          lng: lng
        },
        content:contentString ,
        title: eventInput,
      }]
  
      
      console.log(userEvents);
  
      for(let i = 0; i < userEvents.length; i++){
        addMarker(userEvents[i]);
    }
  
    }).catch(function(error){
      console.log(error)
    })
  
     
    function addMarker(prop){
   
      let marker = new google.maps.Marker(
          {
              position: prop.coords,
              // icon: prop.iconImage,
              map: map,
              title: prop.title
          });
           let infowindow = new google.maps.InfoWindow({
          content: prop.content
          
          
        });
  
          marker.addListener('click',function(){
              infowindow.open(map,marker);
          });
  
        };
  
  }
    )};

    geoCoding();

    let options = {
        zoom: 8,
        center:{lat: 32.715736 ,lng:-117.161087},
        styles:[
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ebe3cd"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#523735"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f1e6"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#c9b2a6"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f24862"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#dcd2be"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#ae9e90"
                }
              ]
            },
            {
              "featureType": "administrative.province",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#45f1f5"
                },
                {
                  "visibility": "on"
                },
                {
                  "weight": 8
                }
              ]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#93817c"
                }
              ]
            },
            {
              "featureType": "poi.attraction",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "poi.attraction",
              "elementType": "labels.text",
              "stylers": [
                {
                  "color": "#dcd2be"
                },
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "poi.business",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#a5b076"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#447530"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f1e6"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#6875cc"
                },
                {
                  "weight": 1
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#84a4b0"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#49fe14"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#393337"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#65d6dc"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#e95047"
                }
              ]
            },
            {
              "featureType": "road.local",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#806b63"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8f7d77"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#ebe3cd"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#b9d3c2"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#92998d"
                }
              ]
            }
          ]

    };
 
 
 let map = new
 google.maps.Map(document.getElementById('map'), options);


 let marks = [{
 }];
 
 for(let i = 0; i < marks.length; i++){
     addMarker(marks[i]);
 }
 
 //  Function for creating a marker
 
 function addMarker(prop){
 
    let marker = new google.maps.Marker(
        {
            position: prop.coords,
            icon: prop.iconImage,
            map: map,
            title: prop.title
        });
         let infowindow = new google.maps.InfoWindow({
        content: prop.content
        
        
      });

        marker.addListener('click',function(){
            infowindow.open(map,marker);
        });

 
//  Make sure their is customization for  icons
 
//          if(prop.iconImage){
 
//  // set the icon if the is one established
 
//          prop.setIcon(mark.iconImage);
//          }
         
//  // Check for content information
 
//          if(prop.content){
 
//  //  Populate information as a pop up
 
//          let infoWindow = new google.maps.InfoWindow({
//                  content: prop.content
 
// //   When Icon is clicked on it will display the pop up infoWindow to the user with local artist information
 
 
//         //  }
//     })
// }
// }
// }

// GEOCODING 
$("#submitEvent").on('click', function (){






geoCoding();


});


// Adds the function in for handling the markers when you search an artist , populates upcoming date anywhere between a week and month 

$("#submit").on('click', function (){

  function displayArtistEventMarkers(artist, date) {
    //bands in town API
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=3c23ec0eb335a5c10b8f6691c2121940&date=" + date;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      //displays artist page from bandinstown
      var artistInfo = response[0].url;
      var a = $("<a>").text("Artist's BandsInTown Page");
      var aOne = a.attr("href", artistInfo);
      $("#artistPage").append(aOne);
      //ajax to assess object value to display on map Venue location(latitude and physical address),
      for (i = 0; i < response.length; i++) {
        //console log venue, city, lat and long)
        console.log(response[i]);
        let lineUp = response[i].lineup
        var venue = response[i].venue.name;
        var city = response[i].venue.city;
        var latitude = response[i].venue.latitude;
        var longitude = response[i].venue.longitude;
        var dateEvent = response[i].datetime;
        var prettyDateEvent = moment(dateEvent).format("MM/DD/YY @ hh:mm a");
        var bands = $("<div>");
        var v = $("<p>").text(venue);
        bands.append(v);
        var c = $("<p>").text("City: " + city);
        bands.append(c);
        var d = $("<p>").text("Date: " + prettyDateEvent);
        bands.append(d);
        console.log("Venue: " + venue);
        console.log("Latitude: " + latitude);
        console.log("Longitude: " + longitude);
        console.log("--------------------------------------");

// creates input for Info window also adds classes for styling

         let contentString = '<div class=contentWindow>' + '<h1 class="windowVenue">'+ venue +'</h1>' + '<div class=EventInfoWindow>' +
         '<p class="windowCity"> City:' + city + '</p>' +
         '<p class="windowDate"> Date:' + prettyDateEvent + '</p>' +
         '<p class="windowLineup"> Line Up:' +lineUp +  '</p>' + '</div>'
         + '</div>';

  
  //  creates object for submit location data
         let searchEvents = [{
          coords: {
            lat: 0,
            lng: 0
          },
          content:"" }]
  
          let userICon = "";
        
         
          let searchEventsArray = []
        
          // fills location data
           searchEvents = [{
              coords: {
                // must parse float to turn string into number
                lat: parseFloat(latitude),
                lng: parseFloat(longitude)
              },
              content:contentString,
              title: venue }]

              
              searchEventsArray.push(searchEvents)
        
            
            console.log(searchEvents);
        
            for(let i = 0; i < searchEvents.length; i++){
              addMarker(searchEvents[i]);
          }
        
          //   add marker with parameters of the object we are placing in as a property
          function addMarker(prop){
         
            let marker = new google.maps.Marker(
                {
                    position: prop.coords,
                    icon: prop.iconImage,
                    map: map,
                    title: prop.title
                });
                 let infowindow = new google.maps.InfoWindow({
                content: prop.content
                
                
              });
        
                marker.addListener('click',function(){
                    infowindow.open(map,marker);
                });
        
              };
        
      

        
      }
    })
  };

  displayArtistEventMarkers(artist, date);


  
  });





}
}