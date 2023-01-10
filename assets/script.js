// var testUrl = 'api.openweathermap.org/data/2.5/forecast';


// var testUrl2 = 'api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=a842e4fb8b3e05b9ed611924287b14a1';



var part1 = 'https://api.openweathermap.org/data/2.5/forecast?q=';
var part2 = '&cnt=20&appid=a842e4fb8b3e05b9ed611924287b14a1';

var part3 = part1.concat("portland",part2);
console.log(part3);

var testUrl1 = 'https://api.openweathermap.org/data/2.5/forecast?q=Seattle&cnt=20&appid=a842e4fb8b3e05b9ed611924287b14a1';
fetch(part3)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        //icon
        console.log(data.list[0].weather[0].main);
        //wind Speed
        console.log(data.list[0].wind.speed);
        //Day
        console.log(data.list[0].dt_txt);
        //Temp
        console.log(data.list[0].main.temp);
        console.log(data.list[0].main.humidity);
    });







    var hello="hello";
    var world="world";

    var helloWorld = hello.concat("1",world);

    console.log(helloWorld);


    // var part1 = 'https://api.openweathermap.org/data/2.5/forecast?q=';
    // var part2 = '&cnt=20&appid=a842e4fb8b3e05b9ed611924287b14a1';

    // var part3 = part1.concat("seattle",part2);
    // console.log(part3);