'use client'

import { type } from "os";
import { useState } from "react"

export default function Sky() {

   interface BackgroundColor { hue: number, saturation: number, lightness:number }

   const [backColor, setBackColor] = useState<BackgroundColor>({hue: 197, saturation:61, lightness:83 });


   let backgroundNow: BackgroundColor ={
    hue: 197,
    saturation:61,
    lightness:83
   }
   


    



}