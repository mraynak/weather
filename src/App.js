import "./App.css";
import React, {useState, useEffect} from "react";
const axios = require("axios")

function App() {
  const api_url = "https://api.openweathermap.org/data/2.5/forecast?q=denver&&appid=8619064b2b3ba7a744994c5d45834916"
  useEffect(getWeather, [])
  const [weather, setWeather] = useState([])

function getWeather() {
    axios.get(api_url).then((response) => {
    setWeather(response.data.list)
  });
}

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const tomorrow = new Date()
    tomorrow.setDate(new Date().getDate())
    let dayOfWeek1 = tomorrow.getDay()
    let day1 = tomorrow.toISOString().substring(0,10)
    console.log(dayOfWeek1)

    tomorrow.setDate(new Date().getDate() + 1)
    let dayOfWeek2 = tomorrow.getDay()
    let day2 = tomorrow.toISOString().substring(0,10)
    console.log(dayOfWeek2)

    tomorrow.setDate(new Date().getDate() + 2)
    let dayOfWeek3 = tomorrow.getDay()
    let day3 = tomorrow.toISOString().substring(0,10)
    console.log(dayOfWeek3)

    tomorrow.setDate(new Date().getDate() + 3)
    let dayOfWeek4 = tomorrow.getDay()
    let day4 = tomorrow.toISOString().substring(0,10)
    console.log(dayOfWeek4)

    tomorrow.setDate(new Date().getDate() + 4)
    let dayOfWeek5 = tomorrow.getDay()
    let day5 = tomorrow.toISOString().substring(0,10)
    console.log(dayOfWeek5)

// const today = new Date()
// console.log(today)

  const weatherDayOne = weather.filter((day) => {
    return day.dt_txt.includes(day1)
  })
  const weatherDayTwo = weather.filter((day) => {
    return day.dt_txt.includes(day2)
  })
  const weatherDayThree = weather.filter((day) => {
    return day.dt_txt.includes(day3)
  })
  const weatherDayFour = weather.filter((day) => {
    return day.dt_txt.includes(day4)
  })
  const weatherDayFive = weather.filter((day) => {
    return day.dt_txt.includes(day5)
  })
  console.log(weatherDayOne)

  const dayOne = weatherDayOne.map((date) => {
    function image() {
      if(date.weather[0].main === "Clouds") {
        return "http://openweathermap.org/img/wn/03d.png"
      }
      if(date.weather[0].main === "Snow") {
        return "http://openweathermap.org/img/wn/13d.png"
      }
      if(date.weather[0].main === "Clear") {
        return "http://openweathermap.org/img/wn/01d.png"
      }
    }
    return (
      <div>
        <p className="card-text text-center">Time: {date.dt_txt.substring(11, 16)}</p>
        <div className="text-center">
          <img src={image()} alt="Not Responsive" /> 
        </div>
        <p className="card-text text-center">{Math.round(date.main.temp_max - 200)} &#8457; / {Math.round(date.main.temp_min - 200)} &#8457;</p>
      </div>
    )
  })

  const dayTwo = weatherDayTwo.map((date) => {
    function image() {
      if(date.weather[0].main === "Clouds") {
        return "http://openweathermap.org/img/wn/03d.png"
      }
      if(date.weather[0].main === "Snow") {
        return "http://openweathermap.org/img/wn/13d.png"
      }
      if(date.weather[0].main === "Clear") {
        return "http://openweathermap.org/img/wn/01d.png"
      }
    }
    return (
      <div>
        <p className="card-text text-center">Time: {date.dt_txt.substring(11, 16)}</p>
        <div className="text-center">
          <img src={image()} alt="Not Responsive" /> 
        </div>
        <p className="card-text text-center">{Math.round(date.main.temp_max - 200)} &#8457; / {Math.round(date.main.temp_min - 200)} &#8457;</p>
      </div>
    )
  })

  const dayThree = weatherDayThree.map((date) => {
    function image() {
      if(date.weather[0].main === "Clouds") {
        return "http://openweathermap.org/img/wn/03d.png"
      }
      if(date.weather[0].main === "Snow") {
        return "http://openweathermap.org/img/wn/13d.png"
      }
      if(date.weather[0].main === "Clear") {
        return "http://openweathermap.org/img/wn/01d.png"
      }
    }
    return (
      <div>
        <p className="card-text text-center">Time: {date.dt_txt.substring(11, 16)}</p>
        <div className="text-center">
          <img src={image()} alt="Not Responsive" /> 
        </div>
        <p className="card-text text-center">{Math.round(date.main.temp_max - 200)} &#8457; / {Math.round(date.main.temp_min - 200)} &#8457;</p>
      </div>
    )
  })

  const dayFour = weatherDayFour.map((date) => {
    function image() {
      if(date.weather[0].main === "Clouds") {
        return "http://openweathermap.org/img/wn/03d.png"
      }
      if(date.weather[0].main === "Snow") {
        return "http://openweathermap.org/img/wn/13d.png"
      }
      if(date.weather[0].main === "Clear") {
        return "http://openweathermap.org/img/wn/01d.png"
      }
    }
    return (
      <div>
        <p className="card-text text-center">Time: {date.dt_txt.substring(11, 16)}</p>
        <div className="text-center">
          <img src={image()} alt="Not Responsive" /> 
        </div>
        <p className="card-text text-center">{Math.round(date.main.temp_max - 200)} &#8457; / {Math.round(date.main.temp_min - 200)} &#8457;</p>
      </div>
    )
  })

  const dayFive = weatherDayFive.map((date) => {
    function image() {
      if(date.weather[0].main === "Clouds") {
        return "http://openweathermap.org/img/wn/03d.png"
      }
      if(date.weather[0].main === "Snow") {
        return "http://openweathermap.org/img/wn/13d.png"
      }
      if(date.weather[0].main === "Clear") {
        return "http://openweathermap.org/img/wn/01d.png"
      }
    }
    return (
      <div>
        <p className="card-text text-center">Time: {date.dt_txt.substring(11, 16)}</p>
        <div className="text-center">
          <img src={image()} alt="Not Responsive" /> 
        </div>
        <p className="card-text text-center">{Math.round(date.main.temp_max - 200)} &#8457; / {Math.round(date.main.temp_min - 200)} &#8457;</p>
      </div>
    )
  })
  return (
    <div className="m-4">
      <h1>Weather App</h1>
      <div className="row">
        <div className="card m-2 bg-info" style={{"width": "18rem"}}>
            <div className="card-body">
              <h5 className="text-center">{daysOfWeek[dayOfWeek1]}</h5>
              {dayOne}
            </div>
        </div>
        <div className="card m-2 bg-secondary" style={{"width": "18rem"}}>
            <div className="card-body">
              <h5 className="text-center">{daysOfWeek[dayOfWeek2]}</h5>
              {dayTwo}
            </div>
        </div>
        <div className="card m-2 bg-secondary" style={{"width": "18rem"}}>
            <div className="card-body">
              <h5 className="text-center">{daysOfWeek[dayOfWeek3]}</h5>
              {dayThree}
            </div>
        </div>
        <div className="card m-2 bg-secondary" style={{"width": "18rem"}}>
            <div className="card-body">
              <h5 className="text-center">{daysOfWeek[dayOfWeek4]}</h5>
              {dayFour}
            </div>
        </div>
        <div className="card m-2 bg-secondary" style={{"width": "18rem"}}>
            <div className="card-body">
              <h5 className="text-center">{daysOfWeek[dayOfWeek5]}</h5>
              {dayFive}
            </div>
        </div>
      </div>
    </div>
  )
}

export default App;

//api.openweathermap.org/data/2.5/weather?q=denver&appid=8619064b2b3ba7a744994c5d45834916