import { useState } from "react"

export default function App() {

  const [typeOfColor, setTypeOfColor] = useState("hex")

  const [color, setColor] = useState("#000000")

  function randomColorUtility(length: number) {
    return Math.floor(Math.random() * length);
  }

  function handleRandomHexColorClick() {

    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    let hexColor = "#"

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }

    setColor(hexColor)
  }

  function handleRandomRGBColorClick() {
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)

    setColor(`rgb(${r},${g},${b})`)
  }


  return (
    <div className="relative w-full h-screen" style={{
      background: color,
    }}>
      <div className="container flex items-center h-screen p-2">
        <div className="w-full flex items-center justify-evenly absolute top-0 left-0 right-0">
          <button type="button" onClick={() => setTypeOfColor("hex")} className="block w-full px-4 py-2 text-white">
            Hex
          </button>

          <button type="button" onClick={() => setTypeOfColor("rgb")} className="block w-full px-4 py-2 text-white">
            RGB
          </button>

          <button type="button" onClick={typeOfColor === "hex" ? handleRandomHexColorClick : handleRandomRGBColorClick} className="block w-full px-4 py-2 bg-green-500 text-white">
            Random Color
          </button>
        </div>

        <div className="w-full relative flex flex-col gap-4 text-white">
          <h1 className="text-4xl font-bold m-auto uppercase mb-14">{typeOfColor} Color</h1>
          <h2 className="block text-6xl font-bold mx-auto mt-8">{color}</h2>
        </div>
      </div>
    </div>
  )
}