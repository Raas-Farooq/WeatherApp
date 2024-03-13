const text = document.querySelector('#text');
const logo = document.querySelector('.logo');
const cityName = document.querySelector('.cityName');
const realTemp = document.querySelector('.temp');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.hum');
const btn = document.querySelector('.searchIcon');

let searchCity;

btn.addEventListener('click', e => {
    e.preventDefault();
    if(text.value){
        let name;
        searchCity = text.value;
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=5&appid=46ae2b253b7001375c418a1c1f7b8857`).
        then(response => response.json()).
        then(cityData => {
            if(cityData.length > 0){
                console.log("the Entire Cities: ", cityData);
                let city;
                city = cityData[0];
                name = city.name;
                console.log("Actual Name: ", name);
                // for (i = 0; i < cityData.length;i++){
                   
                    
                //     if(cityData[i].name.toLowerCase() === searchCity.toLowerCase()){
                //         city = cityData[i];
                //         console.log("After Matching: ", cityData[i])
                //     }
                // }
            
                console.log("Thankful In the City: ", city);
                fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${city.lat}&lon=${city.lon}&appid=46ae2b253b7001375c418a1c1f7b8857`).
                    then(response => {
                        if(!(response.ok)){
                            throw new Error ("Network response was not ok'")
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log("Original Data: ", data);
                        let windSpeed = data.wind.speed;
                        const getHumidity = data.main.humidity;
                        let temp = (data.main.temp);
                        // temp = temp.toFixed(2);
                        cityName.textContent = name;
                        console.log("humidity text: ",humidity.textContent)
                        console.log("Wind text: ",wind.textContent);
                        logo.textContent = data.weather[0].main;
                        wind.textContent = windSpeed + 'km/h';
                        humidity.textContent = getHumidity + '%';
                        temp = Math.round(temp);
                        console.log('TEMP: ', temp);
                        realTemp.textContent = temp + 'C';
                        
                        console.log("humidity text: ",humidity.textContent)
                        console.log("Wind text: ",wind.textContent)
                    })
                    .catch(err =>
                        console.log("There is an Error", err))

                        text.value = ''
            }
        
            else
                {
                    alert("Write Correct Name");
                }
        })
    }
    else{
        alert("Enter the City Name")
    }
})
        
    



// const game = {
//     play:'Game Play',
//     stop:'Game Over'
// }
// const arr = [1, 3, 6,{...game}];



// console.log("New Arr: ",arr)