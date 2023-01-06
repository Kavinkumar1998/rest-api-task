var row = document.querySelector(".row");
fetch("https://restcountries.com/v3.1/all")
.then((response)=>response.json())
.then((data)=>{
    for(var i=0; i<data.length;i++){
        row.innerHTML +=`
        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="card h-100">
            <div class="card-header">
         <H1 id="title" class="text-center"><span style:"color:black;">${data[i].name.common}</span></H1>
         </div>
         <img src="${data[i].flags.png}" class="card-img-top" alt="flag">
         <div class="card-body">
         <div class="card-text">
         <div><span>Capital :</span> ${ data[i].capital}</div>
         <div><span>Country code :</span> ${ data[i].cca3}</div>
        <div><span>Region :</span> ${ data[i].region }</div>
        <div><span>Population :</span> ${ data[i].population }</div>
         <div><span>Lattitude :</span> ${ data[i].latlng[0]}</div>
         <div><span>Longitude :</span> ${ data[i].latlng[1]}</div>
         <div class="weather" id="index-${i}"></div>
         <div ><button onclick="getWeather('${data[i].latlng[0]}','${data[i].latlng[1]}','index-${i}')" class="btn">click for temprature</button></div>
         </div>
         </div>
         </div>
         </div>
            `   
    }
})
.catch((err)=>console.log(err))

function getWeather(lat,lon,id){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d11682ccc7fb55ab9b2f12551fd45c26`)
       .then((response) => response.json())
       .then((data)=>{
        let weatherData= document.getElementById(id);
        let temprature =(`Temperature: ${(parseInt(data.main.temp)- 273)} C Sky:${data.weather[0].main}`);
           weatherData.append(temprature);
       })

       .catch((err)=>console.log(err))
}

