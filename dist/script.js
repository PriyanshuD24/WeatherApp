// button selections

// your weather
let button1=document.querySelector("#button1")
button1.addEventListener('click',function(){
  document.querySelector("#infoDiv").classList.add("hidden")
  document.querySelector('input').value="";
    document.querySelector("#button1").setAttribute("class","bg-slate-400 px-3 py-2 rounded-xl");
    document.querySelector("#button2").setAttribute("class","px-3 py-2");
    document.querySelector("#searchBar").classList.remove("flex");
    document.querySelector("#searchBar").classList.add("hidden");


    
     function geoLocation(){
        
        navigator.geolocation.getCurrentPosition(function(pos){
            var lat,lon;
            lat=pos.coords.latitude;
            lon= pos.coords.longitude
            console.log(pos.coords.accuracy);
            let input=lat+","+lon;
        async function getWeather(){
            let cont= await fetch('https://api.weatherapi.com/v1/current.json?key=0171055b6af94321b2884922241902&q='+input);
           let content=await cont.json();
            return content;
          
          }
          let con=getWeather();
          con.then((val)=>{
           
            document.querySelector("#infoDiv").classList.remove("hidden")
            document.querySelector("#infoDiv").classList.add("flex")
            document.querySelector(".cityName").innerText=val.location.name+" , "+val.location.region+" , "+val.location.country;
            document.querySelector(".info").innerText=val.current.condition.text;
            document.querySelector(".temp").innerText=val.current.temp_c+" °C";
            document.querySelector(".windspeed").innerText=val.current.wind_kph+" km/h";
            document.querySelector(".humidity").innerText=val.current.humidity+"%";
            document.querySelector(".clouds").innerText=val.current.cloud+"%";
            let s="https:"+val.current.condition.icon;
            document.querySelector(".imageIcon").setAttribute("src",s)
        
        
          }).catch(err=> alert('Location not found'));

        });
       
       
    }
   let pos=geoLocation();

 
//    q=48.8567,2.3508


});


//search weather
let button2=document.querySelector("#button2")
button2.addEventListener('click',function(){
    document.querySelector("#button1").setAttribute("class","px-3 py-2");
    document.querySelector("#button2").setAttribute("class","bg-slate-400 px-3 py-2 rounded-xl");
    document.querySelector("#searchBar").classList.remove("hidden");
    document.querySelector("#searchBar").classList.add("flex");
    document.querySelector("#infoDiv").classList.remove
    document.querySelector("#infoDiv").classList.remove("flex")
    document.querySelector("#infoDiv").classList.add("hidden")

})


//search button
let searchButton=document.querySelector('.fa');

document.querySelector("input")
    .addEventListener("keyup", function(e) {
    e.preventDefault();
    if (event.keyCode === 13) {
        searchButton.click();
    }
});

searchButton.addEventListener('click',function(){
    let input=document.querySelector('input').value;
    async function getWeather(){
        let cont= await fetch('https://api.weatherapi.com/v1/current.json?key=0171055b6af94321b2884922241902&q='+input);
       let content=await cont.json();
        return content;
      
      }
      let con=getWeather();
      con.then((val)=>{

    
        document.querySelector(".cityName").innerText=val.location.name+" , "+val.location.region+" , "+val.location.country;
        document.querySelector(".info").innerText=val.current.condition.text;
        document.querySelector(".temp").innerText=val.current.temp_c+" °C";
        document.querySelector(".windspeed").innerText=val.current.wind_kph+" km/h";
        document.querySelector(".humidity").innerText=val.current.humidity+"%";
        document.querySelector(".clouds").innerText=val.current.cloud+"%";
        let s="https:"+val.current.condition.icon;
        document.querySelector(".imageIcon").setAttribute("src",s)
        document.querySelector("#infoDiv").classList.remove("hidden")
        document.querySelector("#infoDiv").classList.add("flex")
    
      }).catch(err=> alert('Location not found'));

})
