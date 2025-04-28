const key = "f6df01c93623b0d964c8700ba23280fe";

function writeSreen(dados) {
    console.log(dados)
    
    document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name
    document.querySelector('.temp').innerHTML = Math.floor(dados['main']['temp']) + "ºC"
    document.querySelector('.txt-previsao').innerHTML = dados['weather'][0]['description']
    document.querySelector('.umidade').innerHTML = "Umidade: " + dados['main']['humidity'] + "%"
    document.querySelector('.img-previsao').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"

}

async function searchCity(city) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());
  writeSreen(dados);
}

function cityInput() {
  let city = document.querySelector("#cityInput").value;
  console.log(city);
  searchCity(city);
}

 fetch('https://api.unsplash.com/photos/random?query=landscape&client_id=gdb5makbOn_Z8c3ztYvSM0htnQDtSBdN4yJ1K3ZUfZA')
    .then(response => response.json())
    .then(data => {
      document.body.style.backgroundImage = `url(${data.urls.full})`;
    })
    .catch(error => console.error('Erro ao carregar imagem:', error));
