var APIkey = "73761c0b9996cb9b9d5264d11876f11a"
var city;
var searchInput = document.querySelector("#searchInput")
var searchBtn =document.querySelector(("#searchBtn"))
var weatherURL;
var recentcitiesArr;

searchBtn.addEventListener('click', function(){
    city = searchInput.value
    console.log(city)
    weatherURL ="https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey + "&units=imperial"; 
    fetchweather()
    handleLocalStorage()
    getHistory()
})

function fetchweather(){
    
    fetch(weatherURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log();

            document.querySelector('#city').textContent = data.city.name
        
            document.querySelector('#dayofweek').textContent = dayjs().format("dddd")
            document.querySelector('#temp').textContent = data.list[0].main.temp
            document.querySelector('#humidity').textContent = data.list[0].main.humidity
            document.querySelector('#wind').textContent = data.list[0].wind.speed
            document.querySelector('#cast').src = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png"

            document.querySelector('#dayofweek1').textContent = dayjs().add(1, 'day').format("dddd")
            document.querySelector('#temp1').textContent = data.list[7].main.temp
            document.querySelector('#humidity1').textContent = data.list[7].main.humidity
            document.querySelector('#wind1').textContent = data.list[7].wind.speed
            document.querySelector('#cast1').src = "https://openweathermap.org/img/wn/" + data.list[7].weather[0].icon + "@2x.png"

            document.querySelector('#dayofweek2').textContent = dayjs().add(2, 'day').format("dddd")
            document.querySelector('#temp2').textContent = data.list[15].main.temp
            document.querySelector('#humidity2').textContent = data.list[15].main.humidity
            document.querySelector('#wind2').textContent = data.list[15].wind.speed
            document.querySelector('#cast2').src = "https://openweathermap.org/img/wn/" + data.list[15].weather[0].icon + "@2x.png"

            document.querySelector('#dayofweek3').textContent = dayjs().add(3, 'day').format("dddd")
            document.querySelector('#temp3').textContent = data.list[23].main.temp
            document.querySelector('#humidity3').textContent = data.list[23].main.humidity
            document.querySelector('#wind3').textContent = data.list[23].wind.speed
            document.querySelector('#cast3').src = "https://openweathermap.org/img/wn/" + data.list[23].weather[0].icon + "@2x.png"

            document.querySelector('#dayofweek4').textContent = dayjs().add(4, 'day').format("dddd")
            document.querySelector('#temp4').textContent = data.list[31].main.temp
            document.querySelector('#humidity4').textContent = data.list[31].main.humidity
            document.querySelector('#wind4').textContent = data.list[31].wind.speed
            document.querySelector('#cast4').src = "https://openweathermap.org/img/wn/" + data.list[31].weather[0].icon + "@2x.png"
    });}

    var historyEl = document.querySelector('#history')


function handleLocalStorage(){
    recentcitiesArr = JSON.parse(localStorage.getItem('recentcities')) || [];
    if(!city){console.log('please enter a city'); return}
    recentcitiesArr.push(city)
    localStorage.setItem('recentcities', JSON.stringify(recentcitiesArr))
}

function getHistory(){
    console.log(recentcitiesArr.length)
    const listContainer = document.querySelector('#history');
    const ulElement = document.createElement('ul');
    for(var i = 0; i < 5; i++){
        const liElement = document.createElement('li');
        liElement.textContent = recentcitiesArr[i];
        ulElement.appendChild(liElement);
        liElement.addEventListener('click', function(){
            city = liElement.textContent
            weatherURL ="https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey + "&units=imperial";
            fetchweather()
        })
    };
    listContainer.appendChild(ulElement);
    }



