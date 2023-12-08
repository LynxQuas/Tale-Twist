import { useState } from "react";

import foodVlogImg from "/food-vlog.jpg";
import educationalVlogImg from "/educational-vlog.jpg";
import travelVlogImg from "/travel-vlog.jpg";

const categories = [
    {
        id: 0,
        title: "Food Vlog",
        img: foodVlogImg,
    },
    {
        id: 1,
        title: "Educational Vlog",
        img: educationalVlogImg,
    },
    {
        id: 2,
        title: "Travel Vlog",
        img: travelVlogImg,
    },
];

function Panginitor() {
    // states.
    const [index, setIndex] = useState(0);

    // derive states.
    const currentCategory = categories[index];
    const hasNext = index !== categories.length - 1;
    const hasPrevious = index > 0;

    // handlers
    function handleNextClick() {
        if (hasNext) setIndex((prev) => prev + 1);
    }

    function handlePreviousClick() {
        if (hasPrevious) setIndex((prev) => prev - 1);
    }

    // classes
    const arrows =
        "text-center text-black rounded-full bg-gray-100 py-2 px-3 text-3xl font-extrabold  hover:bg-gray-300 absolute ";

    return (
        <div className="rounded-2xl shadow-2xl shadow-white">
            <div className="relative md:w-full sm:w-full text-center">
                <img
                    src={currentCategory.img}
                    alt="Food Vlog Post"
                    className="object-cover h-58 w-96 m-auto rounded-2xl"
                />

                {hasPrevious && (
                    <button
                        className={`${arrows} -left-12 top-1/2 translate-x-1/2`}
                        onClick={handlePreviousClick}
                    >
                        &larr;
                    </button>
                )}

                {hasNext && (
                    <button
                        className={`${arrows} -right-1 top-1/2 translate-x-1/2`}
                        onClick={handleNextClick}
                    >
                        &rarr;
                    </button>
                )}
            </div>
        </div>
    );
}

export default Panginitor;
