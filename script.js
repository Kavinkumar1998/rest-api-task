var ser = document.querySelector(".row");
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
ser.innerHTML +=`
<div class="col col-lg-3 col-md-6 col-sm-12">
    <div class="card" >
    <div class="card-header">
 <h3><span style:"color:black;">${name}</span></h3>
 </div>
 <img src="${flag}" class="card-img-top">
 <div class="card-body">
 <p><span>Capital :</span> ${ capital}</p>
 <p><span>Country code :</span> ${ countrycode}</p>
<p><span>Region :</span> ${ region }</p>
<p><span>Population :</span> ${ poplation }</p>
 <p><span>Lattitude :</span> ${ lattitude}</p>
 <p><span>Longitude :</span> ${ longitude}</p>
 <a><button onclick="getWeather(${lattitude},${longitude})" class="btn">click for weather</button></a>
 </div>
 </div>
 </div>
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
