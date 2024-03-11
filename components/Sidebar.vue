<template>
  <div class="bg-gray-800 mx-6 my-4">
    <span class="max-w-md mx-auto">
      <label for="prompt" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Generate</label>
      <div class="relative">
        <textarea id="prompt"
                  class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="A beautiful mountain landscape with a river flowing" required rows="7"
                  v-model="imgPrompt"/>
        <button id="imgGenBtn" type="submit"
                class="text-white absolute end-2.5 bottom-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                @click="genImg()">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image inline"
               viewBox="0 0 16 16">
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
            <path
                d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
          </svg>
          <span class="ps-2">Generate</span>
        </button>
      </div>
<!--      <label class="inline-flex items-center cursor-pointer mt-2">-->
<!--          <input type="checkbox" value="" class="sr-only peer" v-model="faceswap">-->
<!--          <div-->
<!--              class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>-->
<!--          <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Faceswap</span>-->
<!--        </label>-->
    </span>
  </div>
</template>

<script setup>
import {useState} from "#app";
import {LOADER_GIF} from "assets/css/loader.js";


  const default_prompts = ["Bronze statue of a king, with regal attire, a crown, and a stern expression, highly detailed, dramatic lighting, commanding presence",
  "Aurora borealis, vibrant lights dancing in the night sky, ethereal, abstract, high detail, nature art",
  "Chocolate cake with rich, fudgy frosting and perfectly layered cake, garnished with fresh berries and drizzled with melted chocolate, decadent, sweet, high detail, food photography",
  "Contemporary cultural center with a distinct form, featuring a vibrant public plaza and innovative exhibition spaces, futuristic, visually stunning, architectural drawings",
  "Bowl of hearty chili with tender chunks of beef, rich tomato sauce, and a mix of spices, topped with grated cheddar cheese and green onions, high detail, focused on texture and heat, comfort food, food photography",
  "Majestic dragon, perched atop a cliff overlooking a fiery landscape, with smoke and ash rising into the air, intense, detailed, scales, dynamic, epic",
  "Vibrant flower field in full bloom, surrounded by rolling hills and a brilliant blue sky, colorful, serene, high detail, spring landscape",
  "Oil painting of a enchanted forest, with glowing mushrooms, fireflies, and a unicorn, soft brushstrokes, pastel colors, dream-like atmosphere",
  "Ethereal aurora borealis over a snowy mountain range, with a full moon shining in the background, mystical, peaceful, serene, winter landscape, high detail",
  "Vintage motorcycle with gleaming chrome and polished leather, captured in soft natural light with selective focus on the engine, classic, retro, detailed",
  "Race car with sleek design, captured in a high speed motion blur, dramatic lighting and shallow depth of field, motorsports, adrenaline, studio lighting",
  "Rushing rapids in a crystal clear river, surrounded by towering trees and lush vegetation, energetic, serene, high detail, river landscape",
  "Towering robot statue in a desolate wasteland, with dust storms and abandoned vehicles in the distance, mechanical, dystopian, high detail, post-apocalyptic landscape",
  "Wooden sculpture of a seascape, with waves, boats, and sea creatures, intricate carving, textured surface, high-resolution, natural lighting",
  "Crashed spaceship in a dense forest, surrounded by tall trees and exotic vegetation, futuristic, detailed, high detail, sci-fi landscape",
  "Platter of sushi rolls with colorful and flavorful ingredients, including avocado, tuna, salmon, and crab, arranged with precision and beauty, high resolution, Asian-style, focused on texture and color, food photography", "Steam locomotive in a snowy mountain range, surrounded by tall peaks and crisp clear air, nostalgic, detailed, high detail, winter landscape",]

let imgPrompt = useState("imgPrompt")

if(!!imgPrompt) {
  imgPrompt.value = default_prompts[[Math.floor(Math.random() * default_prompts.length)]]
}
const useImages = () => useState("images", () => [])
const images = useImages()
let faceswap = useState("faceswap")
const genImg = () => {
  console.log("FS", faceswap.value)
  document.getElementById("imgGenBtn").disabled = true
  document.getElementById("imgGenBtn").setAttribute("style", "opacity: 0.5")
  images.value.unshift(LOADER_GIF)
  $fetch('/generate?faceswap=' + faceswap.value + '&prompt=' + imgPrompt.value).then((data) => {
    images.value.shift()
    images.value.unshift('data:image/png;base64,' + data.images[0])
    document.getElementById("imgGenBtn").disabled = false
    document.getElementById("imgGenBtn").setAttribute("style", "opacity: 1.0")
  })
}
</script>