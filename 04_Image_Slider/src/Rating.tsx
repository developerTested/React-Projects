import { useState } from "react"
import { FaRegStar, FaStar } from "react-icons/fa"

type RatingProps = {
    stars: number,
}

export default function Rating({ stars = 5 }: RatingProps) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex: number) {
        setRating(getCurrentIndex);
    }

    function handleMouseMove(getCurrentIndex: number) {
        setHover(getCurrentIndex);

    }

    function handleMouseLeave() {
        setHover(rating);
    }

    return (
        <div className="block my-4">
            {[...Array(stars)].map((_, i) => {

                i++;

                return i <= hover ?
                    <FaStar
                        key={i}
                        className="star-rating-filled"
                        onClick={() => handleClick(i)}
                        onMouseMove={() => handleMouseMove(i)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    />
                    :
                    <FaRegStar
                        key={i}
                        className="star-rating-empty"
                        onClick={() => handleClick(i)}
                        onMouseMove={() => handleMouseMove(i)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    />
            })}
        </div>
    )
}
