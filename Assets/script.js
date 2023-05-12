// function updateTense (){
//     var hour= dayjs().hour()
//     var day= dayjs()
//     $('.time-block').each(function)
//     var currentHour= parseInt($(this).attr("id").split(""))
// }

// element variables
var button = document.getElementById("click")
var searchBar = document.getElementById("searchbar")
var newEl = document.getElementById("city-name")
var tempEl = document.getElementById("Temperature")

function getWeather (coordinates) {
    // enter link to weather api in fetch function to receive weather data
  
    var cityName = coordinates[0]
    var queryURL= (`https://api.openweathermap.org/data/2.5/forecast?lat=${cityName.lat}&lon=${cityName.lon}&units=standard&appid=1c05203dcfdad272df4919f336da0e2e`)
    fetch(queryURL)
    .then(function (response){
        return response.json()
    }) 
    .then(function (data){
        console.log(data)
        // create element with city name
        var cityNameEl = document.createElement("p")
        cityNameEl.textContent = data.city.name;
        console.log(cityNameEl )
        newEl.appendChild(cityNameEl)
        // create element with temperature and append it to tempEl on line 12
        var tempNameEL = document.createElement("p")
        tempNameEL.textContent = data.list[0].main.temp
        tempEl.appendChild(tempNameEL);
        // review or google how javascript "objects" work and how to use object properties to access their values
    })
}


function getLatLon() {
    var currentSearch = searchBar.value
    
    // template literal string lets you plug in variables into a string need to use backticks `` instead of quotes ""
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${currentSearch}&appid=1c05203dcfdad272df4919f336da0e2e`)
    .then(function (response){
        return response.json()
    })
    .then(function(data){
       getWeather(data);
    })
}

function start(){
    var userInput= input.value
    console.log(userInput)
}

button.addEventListener('click',getLatLon);




//make a function to create elements to plug weather data into 
