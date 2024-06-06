var cityname=document.getElementById('text')
var submit=document.getElementById('submit')
var name1=document.getElementById('name')
var temp=document.getElementById('temp')
var region=document.getElementById('region')
var country=document.getElementById('country')
document.get

submit.addEventListener('click',()=>{

    var city=cityname.value
    document.get
    console.log(city)
    fetch(`http://api.weatherapi.com/v1/current.json?key=a0bb9acb3ee5451a888142208240306&q=${city}&aqi=no`)
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        console.log(data)
        // const markup1 = `<h3>${data.location.name}</h3>`;
        // const markup = `<h3>${data.location.lat}</h3>`;
        // document.querySelector('form').insertAdjacentHTML("beforeend",markup1)
        // document.querySelector('h3').insertAdjacentHTML("afterend",markup)
        name1.innerHTML=data.location.name
        temp.innerHTML=data.location.lat
        region.innerHTML=data.location.region
        country.innerHTML=data.location.country
    })
    .catch(error=> {
        console.error("Result Not Found...!")
        name1.innerHTML="Not found..!"
        console.log(name1.innerHTML)
        if(name1.innerHTML==="Not fount..!"){
            temp.style.visibility="hidden" 
        }
        // if(error==error){

        //     temp.style.visibility="hidden"
        // }
    })
})