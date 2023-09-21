import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../Geography.scss"
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import {MapContainer,TileLayer,Marker,Popup,} from "react-leaflet"
import { Icon } from 'leaflet';
const Geography = ({ data, Name }) => {
  const [AirQuStage, setAirQuStage] = useState({ type: "good", width: "30" });
  const [dist, setdist] = useState(0);
  const [marginsun, setmarginsun] = useState("");
  let position = [20,-8]
  let a = new Date(data.Weather.days[2].datetime);
  let b = new Date(data.Weather.days[3].datetime);
  const [mapnum, setmapnum] = useState(0);
  let graphParams = { "temp": { InformationUnit: "°C", "InformationTitle": "temprature" }, "windspeed": { InformationUnit: "km/hr", "InformationTitle": "wind speed" }, "humidity": { InformationUnit: "%", "InformationTitle": "humidity" } }
  let typeofair = ["good", "standard", "hazardous"];
  const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
  Array.prototype.reorder = function (index) {
    for (let i = 0; i < index; i++) {
      let a = this.shift();
      this.push(a);
    }
  }
  const setDist=async(i)=>{
    setmapnum(i);
    let d = distanceCalc(i);
    i+=1;
    if(d>200 && i<data.city.length){
      setDist(i);
    }
  }
  const distanceCalc= (i)=>{
    let r = 6371
    let lat1 = data.Geography[0].lat * (Math.PI/180)
    let lat2 = data.city[i].lat * (Math.PI/180)
    let lon1 = data.Geography[0].lon * (Math.PI/180)
    let lon2 = data.city[i].lon * (Math.PI/180)
    let dlon = lon2 - lon1
    let dlat = lat2 - lat1
    let a = Math.sin(dlat/2)**2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2)**2
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) ;
    setdist(c*r)
    return c*r
  } 
  useEffect(() => {
    getAirQuality();
    sunData();
    setDist(0);
  }, []);
  const getAirQuality = () => {
    if (data.AQI.data.aqi <= 100) {
      setAirQuStage({ ...AirQuStage, ["type"]: "good" });
      setAirQuStage({ ...AirQuStage, ["width"]: "80px" });
    }
    else if (data.AQI.data.aqi <= 150) {
      setAirQuStage({ ...AirQuStage, ["type"]: "standard" });
      setAirQuStage({ ...AirQuStage, ["width"]: "120px" });
    }
    else {
      setAirQuStage({ ...AirQuStage, ["type"]: "hazardous" });
      setAirQuStage({ ...AirQuStage, ["width"]: "100%" });
    }
  }
  console.log()
  const iconsImages = {
    "todayWeather": {
      "snow": {
        icon: "fas fa-snowflake",
        image: "https://images.getimg.ai/resize?url=https%3A%2F%2Fimg.getimg.ai%2Fgenerated%2Fimg-bTu6mRLNoe1fA0wHhGtZX.jpeg&type=auto&width=640"
      },
      "rain": {
        icon: "fas fa-cloud-rain",
        image: "https://i.pinimg.com/originals/8c/d6/32/8cd632d1be81bb70020f2e54cacd02fd.gif"
      },
      "fog": {
        icon: "fas fa-smog",
        image: "https://i.pinimg.com/564x/4a/1a/c6/4a1ac67a06739eed3bab639e07812d41.jpg"
      },
      "wind": {
        icon: "fas fa-wind",
        image: "https://i.pinimg.com/originals/57/6b/38/576b38fd2a2a526e5631d2c5d3097602.gif"
      },
      "cloudy": {
        icon: "fa-solid fa-cloud",
        image: "https://images.getimg.ai/resize?url=https%3A%2F%2Fimg.getimg.ai%2Fgenerated%2Fimg-aJJfM6U2cEfRfKDTvRWUr.jpeg&type=auto&width=640"
      },
      "partly-cloudy-day": {
        icon: "fas fa-cloud-sun",
        image: "https://i.pinimg.com/564x/2a/6c/1c/2a6c1c8497697fd82572f2227627e95f.jpg"
      },
      "partly-cloudy-night": {
        icon: "fas fa-cloud-moon",
        image: "https://t3.ftcdn.net/jpg/02/50/85/86/240_F_250858668_6OWz3p3Hnv97xm40C0GBEATOM7FDp0Nm.jpg"
      },
      "clear-day": {
        icon: "fas fa-sun",
        image: "https://i.pinimg.com/originals/f1/8c/0d/f18c0d150bee6c043a35b2a269e4a0b5.gif"
      },
      "clear-night": {
        icon: "fa-solid fa-moon",
        image: "https://i.pinimg.com/originals/96/df/d4/96dfd411ab0e68f8bc1eb47e4eee8771.gif"
      },
    }
  }
  let hour_options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    layout: {
      padding: {
        left: 0
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          stepSize: 1,
          fixedstepSize: 1,
        },
        display: false,
      },
      y: {
        grid: {
          display: false
        },
        display: false
      },
    }
  }
  const [CurrentGraph, setCurrentGraph] = useState({
    "InformationType": "temp",
    "InformationRange": "hours",
    "InformationUnit": "°C",
    "options": { "hours": hour_options }
  });
  let labels = { "hours": ["Morning", "Morning", "Afternoon", "Afternoon", "Evening", "Evening", "Night", "Night"] }
  let daydata = data.Weather.days[0].hours.map((data) => data[CurrentGraph.InformationType])
  daydata.reorder(6)
  console.log(data.Weather.days[0].hours.map((data) => data.datetime))
  const timetosec = (time) => {
    let time1 = time.split(":");
    let sec = parseInt(time1[0]) * 3600 + parseInt(time1[1]) * 60 + parseInt(time1[0])
    console.log(sec);
  }
  const getChart = (Sdata) => {
    let data = []
    let i = 0
    let j = 0
    for (let k of Sdata) {
      if (i < 2) {
        j += k;
        i += 1
      }
      else {
        data.push(j / 3);
        i = 0
        j = 0
      }
    }
    return data
  }
  const [ChartData, setChartData] = useState({
    labels: labels[CurrentGraph.InformationRange],
    datasets: [
      {
        data: getChart(daydata),
        tension: 0.3,
        borderColor: '#FF6384',
        pointBackgroundColor: '#6c25be',
        pointBorderColor:"#6c25be"
      }
    ]
  })
  const changeTab=async (item)=>{   
    await setCurrentGraph({ ...CurrentGraph, ["InformationType"]: item }); 
  }
  const changeData=async(item)=>{
    await changeTab(item);
    daydata = await data.Weather.days[0].hours.map((data) => data[item])
    daydata.reorder(6)
  }
  const setChartD=async(item)=>{
    await changeData(item);
    setChartData({
      labels: labels[CurrentGraph.InformationRange],
      datasets: [
        {
          data: getChart(daydata),
          tension: 0.3,
          borderColor: '#FF6384',
          pointBackgroundColor: '#6c25be',
          pointBorderColor:"#6c25be"
        }
      ]
    }
    )
  }
  const setGraph =async (item)=>{
    await setChartD(item);
  }
  const sunData = () => {
    let today = new Date()
    var time = timetosec(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds())
    let sunrisetime = timetosec(data.Weather.currentConditions.sunrise)
    let sunsettime = timetosec(data.Weather.currentConditions.sunset)
    if (time > sunsettime) {
      setmarginsun("ml-52");
    }
    else if (time < sunrisetime) {
      setmarginsun("mr-52");
    }
    else {
      let perc = (time - sunrisetime) / (sunsettime - sunrisetime)
      if (perc < 50) {
        setmarginsun(`mr-${52 - (52 * (perc / 50 * 100))}`)
      }
    }
  }
  return (
    <div className='flex font-outfit '>
      <div className='  bg-white-A701 rounded-lg  overflow-hidden'>
        <div className='flex align-middle font-outfit w-full mb-6  pt-8 font-semibold bg-gradient-to-r from-[#234AD5] via-blue-300 h-[90px] to-[#a3d0d6] text-2xl font-[1.7rem] px-10 text-white-A701'>
          <span><img src='/images/img_earth.svg' className='mr-4' width={36}></img></span>
          <span className='mt-1'>Geographical Details</span>
        </div>
        <div className='flex align-middle w-full mb-6 font-semibold text-xl px-7 text-black-900'>
          <img src='/images/img_info_weather.svg' className='mr-4 '></img>
          <div className='mt-2 font-outfit'>
            Weather Information
          </div>
        </div>
        <div className='w-full flex md:block'>
          <div className='w-[63%] md:w-full'>
            <div className=''>
              <div className='flex md:block justify-center'>
                <div className="rounded-lg h-[294px] ml-[4.25rem] mr-2  w-[324px] md:w-[70%] md:mx-auto" style={{ "backgroundImage": `url("${iconsImages.todayWeather[data.Weather.days[0].icon].image}")` }}>
                  <div className="bg-[#ffffff4b]" >
                    <div className='flex '>
                      <div className='pl-6 pr-4 pt-7 rounded-[50%]'>
                        {/* <i className={`${iconsImages.todayWeather[data.Weather.days[0].icon].icon} text-white-A701  text-xl`}></i> */}
                        <img src="/images/img_weather_logo.svg"></img>
                      </div>
                      <div className='text-white-A701  '>
                        <div className='pt-6 text-md font-semibold '>Weather Forecast</div>
                        <div className='pt-1 text-[0.7rem]'>Todays weather details</div>
                      </div>
                    </div>
                    <div className='text-black-900  text-3xl  flex'>
                      <div className='pl-8 pr-5 pb-1 pt-7 font-thin'>{Math.floor(data.Weather.currentConditions.temp)}°C</div>
                      <div className='rounded-md bg-white-A701 text-black-900 text-[0.8rem] h-[1.3rem] px-[0.65rem] mt-9 font-bold py-[0.3rem]'>{Math.floor(data.Weather.currentConditions.feelslike)}°C</div>
                    </div>
                    <div className='text-black-900 px-8 pb-3 text-md '>
                      {data.Weather.days[0].conditions}
                    </div>
                    <div className='pt-12 pr-3 pl-3 flex'>
                      <div className='w-[31%] md:w-[31%] '>
                        <div className='rounded-lg px-6 bg-black-900 text-white-A701 h-[64px] justify-center items-center flex'>
                          <div className='text-center'>
                            <div className='text-[0.65rem] font-thin mb-1'>Preesure</div>
                            <div className='text-lg  font-semibold'>{Math.floor(data.Weather.currentConditions.pressure)}mg</div>
                          </div>
                        </div>
                      </div>
                      <div className='w-[33%] mx-2'>
                        <div className='rounded-lg px-6 bg-lime-400 text-black-900 h-[64px] justify-center items-center flex'>
                          <div className='text-center'>
                            <div className='text-[0.65rem] font-thin mb-1'>Visiblity</div>
                            <div className='text-lg  font-semibold'>{data.Weather.currentConditions.visibility}km</div>
                          </div>
                        </div>
                      </div>
                      <div className='w-[31%] '>
                        <div className='rounded-lg px-6 bg-white-A701 text-black-900 h-[64px] justify-center items-center flex'>
                          <div className='text-center'>
                            <div className='text-[0.65rem] font-thin mb-1'>Humidity</div>
                            <div className='text-lg  font-semibold'>{data.Weather.currentConditions.humidity}%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='rounded-lg  ml-6 mr-8 h-[294px]  md:mt-4  w-[324px] md:w-[70%] md:mx-auto' style={{ "backgroundImage": `url("https://i.pinimg.com/564x/7e/23/af/7e23af8c48aef288f32f46c38d1ea59a.jpg")` }} >
                  <div className='bg-[#ffffff43]'>
                    <div className='flex'>
                      <div className='pl-6 pr-4 pt-7 '>
                        <img src="/images/img_air_logo.svg"></img>
                      </div>
                      <div className='text-black-900 '>
                        <div className='pt-6 text-md font-semibold'>Air Quality</div>
                        <div className='pt-1 text-[0.7rem] '>Main pollutan: PM 2.5 </div>
                      </div>
                    </div>
                    <div className='text-black-900  text-3xl  flex'>
                      <div className='pl-8 pr-7  pt-6  font-thin'>{Math.floor(data.AQI.data.aqi)}</div>
                      <div className='rounded-lg bg-lime-300 text-black-900 text-[0.8rem] h-[1.3rem] px-[0.65rem] mt-8 font-bold py-[0.1rem]'>AQI</div>
                    </div>
                    <div className='text-black-900 pl-8 pr-7 pb-3 text-md '>
                      West Wind
                    </div>
                    <div className=' flex justify-center'>
                      <div className='w-[285px] mx-2'>
                        <div className='rounded-lg bg-white-A701 text-black-900 h-[64px] mt-[3.75rem] box-border'>
                          <span className='flex justify-center items-center'>
                            {typeofair.map((item) => {
                              if (item == AirQuStage.type) {
                                return (<div className='text-sm font-bold  rounded-xl px-2'><object data={"/images/airquality" + item + ".svg"} width="89" height="45" ></object></div>)
                              } else {
                                return (<div className='text-[0.7rem] font-bold px-6 rounded-xl capitalize'>{item}</div>)
                              }
                            })}
                          </span>
                          <div className='flex justify-center'>
                            <div className="w-[90%] bg-gray-200 rounded-full h-[8px] dark:bg-gray-700">
                              <div className={`bg-gradient-to-r from-[#CBFF1E] to-[#5D7411] h-[6px] rounded-full w-[100%]`}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex'>
              <div className='text-2xl font-semibold lowercase mt-8 ml-12 w-[30rem]'>
                <span className='capitalize'>How's</span> the
                <br />
                {graphParams[CurrentGraph.InformationType].InformationTitle} today?
              </div>
              <div className='flex mt-12  md:ml-[0%]'>
                {Object.keys(graphParams).map((item) => {
                  if (item == CurrentGraph.InformationType) {
                    return (
                      <div className='p-2  mr-5 md:md:ml-3 bg-lime-300 border-2 h-[33.6px] hover:cursor-pointer transition hover:border-3 hover:scale-[1.15] border-gray-300 rounded-lg'>
                        <img src={`/images/img_${item}_tab.svg`} ></img>
                      </div>)
                  } else {
                    return (
                      <div className='p-2 mr-5 md:md:ml-3 bg-white border-2 h-[33.6px] hover:cursor-pointer transition duration-500 hover:bg-yellow-300 hover:border-3 hover:scale-[1.15]  border-gray-300 rounded-lg ' onClick={()=>{setGraph(item)}}>
                        <img src={`/images/img_${item}_tab.svg`}></img>
                      </div>)
                  }
                })}
              </div>
            </div>
            <div className='mt-8 mb-6 flex md:block'>

              <div className='ml-16 md:ml-10 mr-2  mt-6 w-[441px] md:w-[80%] overflow-scroll'>
                <div className='mt-2 ml-6 flex'>

                </div>
                <div className='overflow-scroll h-[100px]'>
                <Line redraw={true} data={ChartData} options={CurrentGraph.options[CurrentGraph.InformationRange]} height={15}/>
                </div>
                <div className='mt-2 ml-6 flex'>
                  {getChart(daydata).map((val, ind) => { if (ind % 2 == 0) { return (<div className='w-[100px] font-semibold text-xl'>{Math.floor(val)}{graphParams[CurrentGraph.InformationType].InformationUnit}</div>) } })}
                </div>
                <div className='mt-2 ml-6 flex'>
                  {labels.hours.map((val, ind) => { if (ind % 2 == 0) { return (<div className='w-[100px] font-semibold text-sm'>{val}</div>) } })}
                </div>
              </div>
              <div className='w-[216px] h-[220px] md:mt-5 md:mx-auto text-black-900 rounded-lg ml-2  bg-[url(https://i.pinimg.com/564x/9d/e7/fe/9de7fe030f8d509badd75cdd06c4f203.jpg)]' style={{ "backgroundImage": `url("${iconsImages.todayWeather[data.Weather.days[1].icon].image}")` }}>
                <div className='bg-[#ffffff4b] h-full pt-6'>
                  <div className=''>
                    <div className=' mx-6 text-xs  pr-[5.5rem] font-bold'>Tomorrow</div>
                    <div className='text-md mx-6 mt-[0.4rem] font-bold'>Weather Details</div>
                    <div className='mt-14 font-semibold text-2xl ml-6'>
                      {Math.floor(data.Weather.days[1].temp)}°C
                    </div>
                    <div className='mt-2 font-semibold mb-10  text-md ml-6' >
                      {data.Weather.days[1].conditions}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' py-3  ml-[3rem]  w-[312px]  md:block' >
            <div className='flex mt-2'>
              <div className=' px-8 w-1/2'>
                <span className='text-xl font-semibold '>Sun</span>
                <div className='text-sm mt-1'>{data.USN_Rankings.Address.slice(data.USN_Rankings.Address.length - 10, data.USN_Rankings.Address.length)}</div>
              </div>
              <div className='text-3xl pl-16 w-1/2 text-[#FF8F00]'>
                <span className='font-semibold mt-6'>{Math.floor(data.Weather.days[0].temp)}°C</span>
              </div>
            </div>
            <div className='flex justify-center pt-10'>
              <div className="relative flex justify-center items-center w-full h-32">
                <div className="h-[100px] mx-auto border-dashed w-[211px] overflow-hidden border-2 border-[#FF8F00] rounded-tl-full rounded-tr-full ">
                  <div className=''>
                  </div>
                  <div className={'w-[80%] h-full bg-gradient-to-b pt-24 from-[#BED53570] via-[#BFDC0B6E] to-[#FFFFFF33]'}>
                  </div>
                </div>
                <div className='absolute flex justify-start z-30'>
                  <img src='/images/img_orange_point.svg' className='mt-[6.1rem] mr-52'></img>
                </div>
                <div className='absolute flex justify-start z-30'>
                  <img src='/images/img_orange_point.svg' className='mt-[6.1rem] '></img>
                </div>
                <div className='absolute flex justify-start z-30'>
                  <img src='/images/img_black_point.svg' className='mt-[6.1rem] ml-52'></img>
                </div>
                <hr className='border-[#FF8F00] mt-[6.1rem] w-[85%] h-[0.1rem] border bg-[#FF8F00] absolute z-20 block' />
              </div>
            </div>
            <div className='flex'>
              <div className='ml-8'><div className='text-sm font-bold' >Sunrise</div><div className='text-sm text-[#000000] justify-center flex'>{data.Weather.currentConditions.sunrise.slice(0, 5)}</div></div>
              <div className='ml-40'><div className='text-sm font-bold' >Sunset</div><div className='text-sm text-[#000000] justify-center flex'>{data.Weather.currentConditions.sunset.slice(0, 5)}</div></div>
            </div>
            <div className='flex justify-center mt-10'>
              <div className='bg-[#11142DEB] rounded-2xl w-[251px] h-[78px] items-center flex'>
                <img src="/images/img_sun_logo.svg" className='ml-6'></img>
                <div className='text-white-A701 ml-4'><span>{data.Weather.days[0].uvindex} UVI <span className='rounded-lg ml-2 font-bold bg-[#CBFF1E] text-black py-[0.2rem] px-[0.4rem] text-[0.6rem] text-black-900'>Moderate</span></span><div className='text-xs mt-3'>Moderate risk for UV Rays</div></div>
              </div>
            </div>
            <hr className='w-[87%] h-[0.1rem] bg-gray-200 mx-auto mt-8 mb-7' />
            <div className='text-center text-lg font-semibold'>
              Weather Prediction
            </div>
            <div className='mt-8'>
              <div className='rounded-xl mx-auto bg-[#FFFFFFEB] w-[240px] h-[67px] flex'>
                <div className='w-[80px]'>
                  <img src="/images/img_clouds.svg" className='ml-5 mt-3 my-auto'></img>
                </div>
                <div>
                  <div className='text-gray-500 text-xs mt-2'>{a.toLocaleDateString('default', { month: 'long',day:"2-digit"})}</div>
                  <div className=' mt-1 flex'><div className='font-bold text-sm w-[100px]'>Cloudy</div><span className='mt-1 text-xs text-[#F97F29] font-semibold'>{Math.floor(data.Weather.days[2].tempmax)}/{Math.floor(data.Weather.days[2].tempmin)}°C</span></div>
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <div className='rounded-xl mx-auto bg-[#FFFFFFEB] w-[240px] h-[67px] flex'>
                <div className='w-[80px]'>
                  <img src="/images/img_sun_fill.svg" className='ml-5 mt-3 my-auto '></img>
                </div>
                <div>
                  <div className='text-gray-500 text-xs mt-2'>{b.toLocaleDateString('default', { month: 'long',day:"2-digit"})}</div>
                  <div className='  mt-1 flex'><div className='font-bold text-sm w-[100px]'>Bright</div><span className='mt-1 text-xs text-[#F97F29] font-semibold'>{Math.floor(data.Weather.days[3].tempmax)}/{Math.floor(data.Weather.days[3].tempmin)}°C</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='flex align-middle w-full mt-6 mb-4 font-semibold text-xl px-7 text-black-900'>
            <img src='/images/img_info_weather.svg' className='mr-4 '></img>
            <div className='mt-2 font-outfit'>
              Industrial and Crime Rates
            </div>
          </div>
          <div className='flex md:block md:mx-auto'>
            <div className='mt-4 w-[591px] md:w-[80%] md:mx-auto h-[291px] rounded-xl  ml-7  bd-cover mb-4 bg-[url("https://img.freepik.com/free-vector/city-night-skyline-cartoon-background_1441-3319.jpg?w=1380&t=st=1694180247~exp=1694180847~hmac=7ea6f0d88d8aadc744f95b7bfdb7c2f239bd35adc46c4fe694d3907af63b1434")]'>
              <div className='bg-[#00000077] h-full rounded-xl'>
                <div className='flex'>
                  <div className='pl-6 pr-4 pt-7 '>
                    <img src="/images/img_weather_logo.svg"></img>
                  </div>
                  <div className='text-white-A701 '>
                    <div className='pt-6 text-md font-semibold'>Industrial Coverage</div>
                    <div className='pt-1 text-[0.7rem] '>Localities </div>
                  </div>
                </div>
                <div className='flex width-[10rem] text-white-A701 font-semibold '>
                  <div className='mt-12 text-white-A701 font-semibold text-3xl ml-6'>
                    <div>{data.USN_Rankings.Address.split(",")[data.USN_Rankings.Address.split(",").length - 2]}</div>
                    <div>
                      <a href={`https://www.expatistan.com/cost-of-living/${data.USN_Rankings.Address.split(",")[data.USN_Rankings.Address.split(",").length - 2].
                        toLowerCase().replaceAll(" ", "")}`} target='_blank'>
                        <button className='p-3 text-black-900 mt-[3rem] bg-yellow-500 transition duration-500 hover:scale-[1.10] hover:bg-[#b34d85] hover:text-white-A701 flex text-sm w-[12rem] font-semibold rounded-lg '>
                          Cost of Living in {data.USN_Rankings.Address.split(",")[data.USN_Rankings.Address.split(",").length - 2]}
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className=' py-4 mt-[0rem] w-[22rem] flex justify-end'>
                    <div>
                    <div className='text-[#eddb53] text-[1.3rem] leading-5 pb-6'>  
                    Population of {data.USN_Rankings.Address.split(",")[data.USN_Rankings.Address.split(",").length - 2]} is :
                    </div>
                    <div className='flex justify-center font-semibold text-[#f06351] text-2xl'>
                    {data.Population.fields.population}
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-4 w-[372px] md:w-[80%] md:mx-auto h-[291px] rounded-xl  ml-7   mb-4 bg-[url("https://i.pinimg.com/564x/5f/03/44/5f034485e7f40b69082ae8a33032fd58.jpg")]'>
              <div className='bg-[#00000031] h-full rounded-xl'>
                <div className='flex'>
                  <div className='pl-6 pr-4 pt-7 '>
                    <img src="/images/img_crimerate.svg"></img>
                  </div>
                  <div className='text-white-A701 '>
                    <div className='pt-6 text-md font-semibold'>Crime Rate</div>
                    <div className='pt-1 text-[0.7rem] '>Crime Rate Details </div>
                  </div>
                </div>
                <div className='mt-7 text-white-A701 font text-2xl ml-10'>
                  87% Crime Free
                </div>
                <div className='mt-2 text-white-A701 text-xs ml-10' >
                  Any Description here
                </div>
                <div className='mt-5 text-white-A701 text-sm ml-10' >
                  <button className='px-4 py-2 rounded-2xl bg-[#DFDCFF] text-[#0E2474EB] transition duration-500 hover:scale-[1.10] hover:bg-[#654bc4] hover:text-[#DFDCFF] font-semibold'>Safest Place</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex'>
              <div className='pl-8'>
              <div className='text-[#5307B4] mb-2 font-semibold text-lg'>Distance between {data.QS_Rankings.Name} to {data.USN_Rankings.Address.split(",")[data.USN_Rankings.Address.split(",").length - 2]} is {Math.floor(0.621371*dist*100)/100} miles ({Math.floor(dist*100)/100} km).</div>
              <div className='flex'><div className='pt-4'>Click the button to view it in maps</div> <button className='cursor-pointer transition duration-300 hover:scale-125' onClick={()=>{window.open(`https://www.google.com/maps/dir/${data.city[mapnum].lat},${data.city[mapnum].lon}/${data.Geography[0].lat},${data.Geography[0].lon}/`,"_blank")}}><img src="/images/img_maps.svg" className='cursor-pointer'/></button></div>
              </div>
            </div>
          </div>
          <div className='flex align-middle w-full my-4 font-semibold text-xl px-7 text-black-900'>
            <img src='/images/img_map.svg' className='mr-4 '></img>
            <div className='mt-2 font-outfit'>
              Map Location
            </div>
          </div>
        </div>
          <div className='w-full h-[25rem] flex justify-center'>              
          <MapContainer center={[data.Geography[0].lat,data.Geography[0].lon]} id='map' zoom={16} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; < a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[data.Geography[0].lat,data.Geography[0].lon]}>
      <Popup>
        {data.QS_Rankings.Name}
      </Popup>
    </Marker>
  </MapContainer>
              </div>
      </div>
    </div>
  )
}

export default Geography
