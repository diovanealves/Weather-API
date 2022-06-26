if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude
        var longitude = position.coords.longitude;
 
        let url = `https://weather.contrateumdev.com.br/api/weather?lat=${latitude}&lon=${longitude}`
        fetch(url).then(function (response) {
            response.json().then(function (dados) {
                mostrarClima(dados)
            })
        })
    })
 }
 
 document.getElementById("campo").onkeypress = function (e) {
    if (e.keyCode == 13) {
        localizacaoInput()
        e.preventDefault()
    }
 }
 
 document.getElementById("botao").onclick = function (e) {
    localizacaoInput()
    e.preventDefault()
 }
 
 function localizacaoInput() {
    var inputUsuario = document.getElementById("campo").value
 
    let urlInput = `https://weather.contrateumdev.com.br/api/weather/city/?city=${inputUsuario}`
    fetch(urlInput).then(function (response) {
        response.json().then(function (dados) {
            mostrarClima(dados)
        })
    })
 
 }
 
 function mostrarClima(dados) {
    document.getElementById("nomeCidade").innerHTML = dados.name + ", " + dados.sys.country
    document.getElementById("clima").innerHTML = dados.main.temp + " °C"
    document.getElementById("status").innerHTML = dados.weather[0].description
 
    let iconName = dados.weather[0].icon;
    statusimg.innerHTML = `<img src="./icons/${iconName}.png">`
 }
