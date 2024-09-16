'use client'

import '../globals.css';
import { useState, useEffect } from "react";

export default function Sky() {

   interface BackgroundColor { hue: number, saturation: number, lightness:number }

   const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;
  
   let defaultColor: BackgroundColor ={
    hue: 197,
    saturation:61,
    lightness:83
   }

   const [backColor, setBackColor] = useState<BackgroundColor>(defaultColor);
   const [weather, setWeather] = useState<string>();
   const [time, setTime] = useState<number>();

   useEffect (() => {

      function getTheTime(): number {
         const time = new Date();
         const hours = time.getHours();
         console.log(hours)
         setTime(hours);
   
      return hours;
      }
      getTheTime()
   },[])

   useEffect (() => {

   function chooseBackground(){
      let hours = time || 12;
      console.log(hours)
      let lightnessNow:number;

      if(hours <= 6) {
         lightnessNow = hours * 6;
         console.log (` less than 6 `)
         } else if(hours > 6 && hours < 14) {
         lightnessNow= hours * 7;
         console.log (` greater than 6 and less than 14 `)
         }else{
         lightnessNow= (98 - (hours * 2 ));
         console.log (` greater than 14 `)
         }
      
      const newColor: BackgroundColor = {
         hue: 197,
         saturation:61,
         lightness: lightnessNow
      }
      setBackColor(newColor)
   }
   chooseBackground()
      
   },[time])


   useEffect(() => {
    const zipCode = 22718
    
    fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${encodeURIComponent(zipCode)}`)
    .then(response => response.json())
    .then((json) => { 
     if (json.error) {
        console.log(json.error)
        setWeather('clear')
     }else
        console.log(json)
        setWeather(json.current.condition.text)
    })
}, []);

console.log()
   return(
      <div className="sky" style={{backgroundColor:  `hsl(${backColor.hue}, ${backColor.saturation}%, ${backColor.lightness}%)`}}>
         <h1>the Sky</h1>
      </div>
   )

}