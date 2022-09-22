const input1=document.querySelector(".search-box");
const kelvin=273
const API={
    key:"d9da0c5fce6513a0fadda3d42ebc2f23",
    baseurl:"https://api.openweathermap.org/data/2.5/weather?q"
}


input1.addEventListener('keypress',setQuery)

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(input1.value)
        // console.log(input1.value);
    }
}


function getResults(query){
    fetch(`${API.baseurl}=${query}&appid=${API.key}`).then(weather=>{
        return weather.json();
    }).then(displayData)
    // console.log()

}


 function displayData(weather){
    console.log(weather)
    let city = document.querySelector('.location .city')
    // console.log(weather)
    city.innerText=`${weather.name} , ${weather.sys.country} `
    

    let date1 = document.querySelector(".location .date2")
     let d=new Date()
     let date0=d.getDate()
     let month=d.getMonth()+1
     let year=d.getFullYear()
     let second=d.getSeconds()
     let minit=d.getMinutes()
     let hours =d.getHours()
     date1.innerText=` ${hours}:${second}:${minit}  ${date0}/${month}/${year}`
    //  console.log(year)

  
    
    let current1=document.querySelector('.temp')
    current1.innerText=Math.floor(weather.main.temp-kelvin)+"°C"

    let weather1 = document.querySelector('.weather2')
    weather1.innerText=`${weather.weather[0].main}`
    
  let hilow=document.querySelector(".hi-low")
  hilow.innerText=`${ Math.round( weather.main.temp_min-kelvin)
  }°C /  ${Math.round(weather.main.temp_max-kelvin)}°C`;
    
 }


  


