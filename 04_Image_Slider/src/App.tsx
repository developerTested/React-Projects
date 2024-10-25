import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type imagesList = {
  id: number,
  author: string,
  url: string,
  download_url: string,
  width: number,
  height: number,
}

export default function App() {

  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [imagesList, setImagesList] = useState<imagesList[]>([])


  const fetchImages = async () => {

    setLoading(true);

    try {
      const response = await fetch("https://picsum.photos/v2/list");
      const list = await response.json();
      setImagesList(list);

      setLoading(false);

    } catch (error: any) {
      setErrorMessage(`Unable to fetch Images: ${error.message}`)
    }

  }

  useEffect(() => {

    fetchImages();

    return () => {
      setImagesList([]);
    }
  }, [])

  if (loading) {
    return <div className="size-full flex items-center justify-center h-screen text-4xl">
      Loading data, Please wait...
    </div>
  }

  if (errorMessage.length) {
    return <div className="px-4 py-2 w-full text-center">
      {errorMessage}
    </div>
  }


  const handlePagePrevious = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : imagesList.length - 1));
  };
  
  const handlePageNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imagesList.length);
  };  

  return (
    <div className="w-full h-screen relative">

      <button onClick={handlePagePrevious} type="button" className="bg-white flex items-center justify-center p-2 w-14 h-14 rounded-full z-20 absolute top-1/2 bottom-1/2 left-2">
        <FaChevronLeft className="w-8 h-8" />
      </button>

      <button onClick={handlePageNext} type="button" className="bg-white flex items-center justify-center p-2 w-14 h-14 rounded-full z-20 absolute top-1/2 bottom-1/2 right-2">
        <FaChevronRight className="w-8 h-8" />
      </button>

      <div className="flex items-end justify-center gap-2 size-full z-10 absolute bottom-2">
        {imagesList.map((_, i) => <div key={i} className={`${currentSlide === i ? "bg-green-500" : "bg-black/40"} w-4 h-4 lg:w-8 lg:h-8 rounded-full`} />)}
      </div>

      <div className="h-screen block overflow-hidden">
        {imagesList.length > 0 ? imagesList.map((img, index) =>
          <img key={img.id} src={img.download_url} alt={img.download_url} className={`${currentSlide === index ? "block" : "hidden"} size-full`} />
        ) : ""}
      </div>
    </div>
  )
}