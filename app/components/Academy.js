import React from 'react'

const Academy = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <iframe
      className="w-[100%] my-4 col-span-1 md:w-[25rem] mx-4"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/cPZrPwxx4vo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
      className="w-[100%] my-4 md:w-[25rem]"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/lrJiRlV351o"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
      className="w-[100%] my-4 md:w-[25rem] mx-4"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/X1L-TKsTuKs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
      className="w-[100%] my-4 md:w-[25rem] mx-4"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-bjRrTB8mks"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Academy;