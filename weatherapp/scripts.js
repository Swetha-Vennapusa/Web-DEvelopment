const card=document.querySelector(".card");
const searchButton=document.querySelector(".search button");
const weatherBox=document.querySelector(".weather-box");
const weatherDetails=document.querySelector(".weather-details");
const error404=document.querySelector(".not-found");
const cityHide=document.querySelector(".city-hide");




let newData = null;
searchButton.addEventListener('click',()=>{
    const APIKey="ac55da9a20a92de0a1c58326f9ae4844"
    const city=document.getElementById("cityName").value;
    if(city==''){
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response=>response.json())
    .then(data => {
        newData = data;
        console.log(newData);
        console.log("data successfully giving output");
        if (newData.cod === '404') {
            cityHide.textContent=city;
            card.style.height = '400px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active'); // Make sure the error section is displayed
            return;
        }
        
        

        const image=document.querySelector('.weather-box img');
        const temperature=document.querySelector('.weather-box .temperature');
        const description=document.querySelector('.weather-box .description');
        const humi=document.querySelector('.humid');
        const windy=document.querySelector('.winds');
        const location =document.querySelector(".city-hide");
        if(cityHide.textContent==city){
            return;
        }else{
            cityHide.textContent=city;
            cityHide.classList.add("city-hide")
            card.style.height='555px';
            card.classList.add('active');
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            error404.classList.remove('active');
            switch(newData.weather[0].main){
                case 'Clear':
                    image.src="clear.png";
                    break;
                case 'Rain':
                    image.src="rain.png";
                    break;
                case 'Snow':
                    image.src="snow.png";
                    break;
                case 'Clouds':
                    image.src="cloud.png";
                    break;
                case 'Mist':
                    image.src="mist.png";
                    break;
                case 'Haze':
                    image.src="mist.png";
                    break;
                default:
                    image.src='cloud.png';
            }

                temperature.innerHTML = `${parseInt(newData.main.temp)}<span>°C</span>`;
                description.innerHTML = `${newData.weather[0].description}`;
                location.innerHTML = `${newData.name}`;
                humi.innerHTML = `${newData.main.humidity}`;
                windy.innerHTML = `${newData.wind.speed}`;
        }
    })
        
})