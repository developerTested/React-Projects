import { useState } from "react"
import data from "./data";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function App() {

  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);


  const toggleAll = () => {
    setSelected(null);
    setShowAll(!showAll);
  }

  const handleClick = (itemId: number | null) => {
    setSelected(itemId);
  }

  return (
    <div className="relative flex items-center justify-center">
      <div className="container space-y-2">
        <button onClick={toggleAll} type="button" className="mx-auto px-4 py-2 bg-black text-white rounded-md">
          {showAll ? "Collapse All" : "Expand All"}
        </button>

        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={item.id} className="size-full block rounded-lg border border-black">
              <div className="flex items-center justify-between bg-black text-white px-4">
                <div
                  onClick={() => handleClick(selected === index ? null : index)}
                  className="block text-lg font-semibold list-none cursor-pointer py-2"
                >
                  {item.question}
                </div>
                {showAll || selected === index ? (
                  <FaChevronUp className="w-6 h-6" />
                ) : (
                  <FaChevronDown className="w-6 h-6" />
                )}
              </div>
              <p
                className={`${showAll || selected === index ? "animate-slide-in" : "animate-slide-out hidden"} transition-all px-4 py-2`}
              >
                {item.answer}
              </p>
            </div>
          ))
        ) : null}
      </div>
    </div>
  )
}