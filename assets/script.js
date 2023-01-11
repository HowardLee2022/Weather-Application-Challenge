
var cardContainer = document.getElementById('cardContainer');
var dayDisplay =document.getElementById('Day0');
var part1 = 'https://api.openweathermap.org/data/2.5/forecast?q=';
var part2 = '&cnt=80&appid=a842e4fb8b3e05b9ed611924287b14a1';
var button1=document.getElementById('searchButton');
var cityVal=document.getElementById('cityName');
var search = document.getElementById('allbutton');
var getCity = localStorage.getItem("usercity");
var parCity = JSON.parse((getCity)) || [];
var savCity = parCity;

button1.addEventListener('click', hello);
function hello(){

    console.log(cityVal.value);
    var saveCity = savCity;
    saveCity.push(cityVal.value);
    //saves city to local Storage
    localStorage.setItem("usercity", JSON.stringify(saveCity));

    // urlData= part1+cityVal.value+part2;
    getWeather(cityVal.value);
    // fetch(urlData)
    // .then(function(response){
    //     return response.json();
    // })
    // .then(function(data){
    //     console.log(data.list);
    //     //icon
    //     console.log(data.list[0].weather[0].main);
    //     //wind Speed
    //     console.log(data.list[0].wind.speed);
    //     //Day
    //     console.log(data.list[0].dt_txt);
    //     //Temp
    //     console.log(data.list[0].main.temp);
    //     console.log();
    //     dayDisplay.textContent="";
    //     var day0Date=document.createElement("h1");
    //     var day0Temp=document.createElement("h5");
    //     var day0Wind=document.createElement("h5");
    //     var day0Humi=document.createElement("h5");

    //     day0Date.textContent=cityVal.value+"\xa0"+dayjs(data.list[0].dt_txt).format("M/DD/YYYY");
    //     day0Temp.textContent="Temp: " +data.list[0].main.temp+ " F";
    //     day0Wind.textContent="Wind: " +data.list[0].wind.speed + " MPH";
    //     day0Humi.textContent="Humidity: " +data.list[0].main.humidity + " %";

    //     dayDisplay.appendChild(day0Date);
    //     dayDisplay.appendChild(day0Temp);
    //     dayDisplay.appendChild(day0Wind);
    //     dayDisplay.appendChild(day0Humi)
    //     var count = 7

    //     for(i=0; i<=4; i++){
    //         var day1Date=document.createElement("h5");
    //         var day1Temp=document.createElement("p");
    //         var day1Wind=document.createElement("p");
    //         var day1Humi=document.createElement("p");
    //         day1Date.textContent=dayjs(data.list[count].dt_txt).format("M/DD/YYYY");
    //         day1Temp.textContent="Temp: " +data.list[count].main.temp+ " F";
    //         day1Wind.textContent="Wind: " +data.list[count].wind.speed + " MPH";
    //         day1Humi.textContent="Humidity: " +data.list[count].main.humidity + " %";
    //         cardContainer.children[i].children[0].appendChild(day1Date);
    //         cardContainer.children[i].children[0].appendChild(day1Temp);
    //         cardContainer.children[i].children[0].appendChild(day1Wind);
    //         cardContainer.children[i].children[0].appendChild(day1Humi);
    //         count = count + 7
    // }
    // });
}





function getWeather(input){
    var fetchUrl1 = part1+input+part2;

    fetch(fetchUrl1)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.list);
        //icon
        console.log(data.list[0].weather[0].main);
        //wind Speed
        console.log(data.list[0].wind.speed);
        //Day
        console.log(data.list[0].dt_txt);
        //Temp
        console.log(data.list[0].main.temp);
        console.log();
        dayDisplay.textContent="";
        var day0Date=document.createElement("h1");
        var day0Img=document.createElement("img");
        var day0Temp=document.createElement("h5");
        var day0Wind=document.createElement("h5");
        var day0Humi=document.createElement("h5");

        day0Date.textContent=input+"\xa0"+dayjs(data.list[0].dt_txt).format("M/DD/YYYY");
        day0Img.setAttribute("src","http://openweathermap.org/img/wn/"+ data.list[0].weather[0].icon+".png");
        day0Temp.textContent="Temp: " +data.list[0].main.temp+ " F";
        day0Wind.textContent="Wind: " +data.list[0].wind.speed + " MPH";
        day0Humi.textContent="Humidity: " +data.list[0].main.humidity + " %";

        dayDisplay.appendChild(day0Date);
        dayDisplay.appendChild(day0Img);
        dayDisplay.appendChild(day0Temp);
        dayDisplay.appendChild(day0Wind);
        dayDisplay.appendChild(day0Humi)
        var count = 7
        
        for(i=0; i<=4; i++){
            cardContainer.children[i].children[0].textContent = "";
            var dayDate=document.createElement("h5");
            var dayImg=document.createElement("img");
            var dayTemp=document.createElement("p");
            var dayWind=document.createElement("p");
            var dayHumi=document.createElement("p");
            dayDate.textContent=dayjs(data.list[count].dt_txt).format("M/DD/YYYY");
            dayImg.setAttribute("src","http://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon+".png");
            dayTemp.textContent="Temp: " +data.list[count].main.temp+ " F";
            dayWind.textContent="Wind: " +data.list[count].wind.speed + " MPH";
            dayHumi.textContent="Humidity: " +data.list[count].main.humidity + " %";
            cardContainer.children[i].children[0].appendChild(dayDate);
            cardContainer.children[i].children[0].appendChild(dayImg);
            cardContainer.children[i].children[0].appendChild(dayTemp);
            cardContainer.children[i].children[0].appendChild(dayWind);
            cardContainer.children[i].children[0].appendChild(dayHumi);
            count = count + 7
    }
    addsaveButton();
    });
    

}

function addsaveButton(){
    search.textContent="";
    for(i=0; i<savCity.length; i++){
    var newbutton=document.createElement("button");
    newbutton.textContent=savCity[i];
    newbutton.setAttribute('class','btn btn-block btn-warning w-100')
    newbutton.setAttribute('id','button');
    search.appendChild(newbutton);
    urlData= part1+savCity[i]+part2;
    // newbutton.addEventListener('click', getWeather(urlData))
    }
}


addsaveButton();

var allButton = document.getElementById('button');
search.addEventListener('click',function(event){
    console.log(event.target.textContent);
    getWeather(event.target.textContent);

});

// var urltest3 = part1+"seattle"+part2;
// console.log(part3);

// var testUrl1 = 'https://api.openweathermap.org/data/2.5/forecast?q=Seattle&cnt=50&appid=a842e4fb8b3e05b9ed611924287b14a1';




// fetch(testUrl1)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data.list);
//         //icon
//         console.log(data.list[0].weather[0].main);
//         //wind Speed
//         console.log(data.list[0].wind.speed);
//         //Day
//         console.log(data.list[0].dt_txt);
//         //Temp
//         console.log(data.list[0].main.temp);
//         console.log();

//         var day0Date=document.createElement("h1");
//         var day0Temp=document.createElement("h5");
//         var day0Wind=document.createElement("h5");
//         var day0Humi=document.createElement("h5");

//         day0Date.textContent=dayjs(data.list[0].dt_txt).format("M/DD/YYYY");
//         day0Temp.textContent="Temp: " +data.list[0].main.temp+ " F";
//         day0Wind.textContent="Wind: " +data.list[0].wind.speed + " MPH";
//         day0Humi.textContent="Humidity: " +data.list[0].main.humidity + " %";

//         dayDisplay.appendChild(day0Date);
//         dayDisplay.appendChild(day0Temp);
//         dayDisplay.appendChild(day0Wind);
//         dayDisplay.appendChild(day0Humi)
//         var count = 7

//         for(i=0; i<=4; i++){
//             var day1Date=document.createElement("h5");
//             var day1Temp=document.createElement("p");
//             var day1Wind=document.createElement("p");
//             var day1Humi=document.createElement("p");
//             day1Date.textContent=dayjs(data.list[count].dt_txt).format("M/DD/YYYY");
//             day1Temp.textContent="Temp: " +data.list[count].main.temp+ " F";
//             day1Wind.textContent="Wind: " +data.list[count].wind.speed + " MPH";
//             day1Humi.textContent="Humidity: " +data.list[count].main.humidity + " %";
//             cardContainer.children[i].children[0].appendChild(day1Date);
//             cardContainer.children[i].children[0].appendChild(day1Temp);
//             cardContainer.children[i].children[0].appendChild(day1Wind);
//             cardContainer.children[i].children[0].appendChild(day1Humi);
//             count = count + 7
//     }
//     });