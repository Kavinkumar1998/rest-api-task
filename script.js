var row = document.querySelector(".row");
fetch("https://restcountries.com/v3.1/all")
.then((response)=>response.json())
.then((data)=>{
    data.forEach(element=>{
        const countryrequired={
            ...element,
            name: element.name.common,
            flag: element.flags.png,
            population: element.population,
            region: element.region,
            capital: element.capital,
            lattitude: element.latlng[0],
            longitude: element.latlng[1],
            countrycode: element.cca3,
        }
        Country(element.name.common,element.flags.png,element.population,element.region,element.capital,element.latlng[0],element.latlng[1],element.cca3)
       
    });
})
.catch((err)=>console.log(err))

function Country(name,flag,poplation,region,capital,lattitude,longitude,countrycode){
row.innerHTML +=`
<div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
    <div class="card">
    <div class="card-header">
 <H1 id="title" class="text-center"><span style:"color:black;">${name}</span></H1>
 </div>
 <img src="${flag}" class="card-img-top" alt="flag">
 <div class="card-body">
 <div class="card-text">
 <div><span>Capital :</span> ${ capital}</div>
 <div><span>Country code :</span> ${ countrycode}</div>
<div><span>Region :</span> ${ region }</div>
<div><span>Population :</span> ${ poplation }</div>
 <div><span>Lattitude :</span> ${ lattitude}</div>
 <div><span>Longitude :</span> ${ longitude}</div>
 <div><button onclick="getWeather(${lattitude},${longitude})" class="btn">click for weather</button></div>
 </div>
 </div>
 </div>
 </div>.
    `   
}

function getWeather(lat,lon){
    console.log(lat,lon);
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d11682ccc7fb55ab9b2f12551fd45c26`)
       .then((response) => response.json())
       .then((data)=>{
           document.querySelector(".btn").innerText = data.main.temp;
           console.log(data.main.temp);
       })

       .catch((err)=>console.log(err))
}
