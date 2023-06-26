window.getWeather = function () {

    let cityName = document.querySelector("#cityName").value;
   
     axios.get(`weather/${cityName}`)
    .then(function (response) {
      // handle success
      console.log(response.data)
      
      let currentTime = moment().format('MMMM Do hh:mm A');
      let currentTemperature = response.data.temp 
      let highTemp = response.data.high
      let lowTemp = response.data.low
      
      



      document.querySelector(".city").innerHTML = cityName;
      document.querySelector(".time").innerHTML = currentTime;
      document.querySelector(".curtemp").innerHTML = `${currentTemperature}°C`;
      
      
     
    })
    .catch(function (error) {
      // handle error
      console.log(error.data);
    })

}