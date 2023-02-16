document.getElementById("mybtn").onclick = ()=>{
let getCity = document.getElementById("myid").value;


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getCity}&units=metric&appid=74207557a3e7faf798ec20b0e35f5773`)

.then(data =>{
    return data.json()
}).then(data2 =>{

     //console.log(data2);
    // console.log(data2.name);
    // console.log(data2.main.temp);
    // console.log(data2.wind.speed);
    // console.log(data2.main.humidity);
    // console.log(data2.weather[0].description);

    document.getElementById('info').innerHTML = `
                      <ul class = "list-group mt-4">
                          <li class="list-group-item bg-light">City Name : <strong> ${data2.name} </strong> </li>
                          <li class="list-group-item bg-light">Temp in Celcius : <strong> ${data2.main.temp} </strong></li>
                          <li class="list-group-item bg-light">Humidity : <strong> ${data2.main.humidity} </strong></li>
                          <li class="list-group-item bg-light">Wind : <strong> ${data2.wind.speed} </strong></li>
                          <li class="list-group-item bg-light">Description : <strong> ${data2.weather[0].description} </strong> </li>
                      </ul>
                    `
})



}