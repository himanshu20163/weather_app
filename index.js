const SearchInput = document.getElementById("inputbox")
const dynamicHeading = document.getElementById("dynamicHeading")
const skyCondition = document.getElementById("skyCondition")
const windSpeed = document.getElementById("windSpeed")
const temerature = document.getElementById("temerature")

async function func() {
    const location = SearchInput.value
    const streamResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`);
    console.log(streamResponse);
    const data = await streamResponse.json()
    console.log(data);
    dynamicHeading.innerText = `weather of ${location}`
    const box = document.getElementById("cardbox");
    box.setAttribute("style","margin-top:20px;height:30%;width:40%;background-color: rgb(35 94 197)")
    dynamicHeading.style.height = "30px"
    dynamicHeading.style.backgroundColor  = "blue"
    dynamicHeading.style.color ="white"
    dynamicHeading.style.width   = "275px"
    dynamicHeading.style.paddingLeft = "50px"
    skyCondition.innerText = `Sky copndition: ${data.weather[0].description}`
    skyCondition.style.color = "white";
    skyCondition.style.marginLeft="50px"
    skyCondition.style.fontSize  = "20px"
    temerature.innerText = `temperature: ${data.main.temp}`
    temerature.style.fontSize  = "20px"
    temerature.style.color = "white"
    temerature.style.marginLeft ="50px"
    windSpeed.innerText = `windspeed: ${data.wind.speed}`
    windSpeed.style.marginLeft ="50px"
    windSpeed.style.color = "white"
    windSpeed.style.fontSize  = "20px"
}