"use client"
import Image from "next/image";
import { Zoom } from "react-slideshow-image";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import AnimeNews from "@/components/AnimeList/AnimeInfo";

const AnimePoster = async() => {
  const originalImages = [
    "Image/1.webp",
    "Image/2.webp",
    "Image/3.webp",
    "Image/4.webp",
    "Image/5.webp",
    "Image/6.webp",
    "Image/7.webp",
    "Image/8.webp",
  ];

  const [images, setImages] = useState(originalImages);

  // Fungsi untuk mengacak array
  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  useEffect(() => {
    // Mengacak array gambar saat komponen pertama kali dimuat
    setImages(shuffleArray(originalImages));
  }, []); // Efek hanya dijalankan sekali saat komponen pertama kali dimuat
  

  const zoomInProperties = {
    indicators: true,
    duration: 5000,
    transitionDuration: 500,
    Infinite: true,
    Zindex: 22,

    prevArrow: (
      <div className="">
        <CaretLeft size={32} className="relative 2xl:ml-[0rem] xl:ml[29.8rem]" />
      </div>
    ),
    nextArrow: (
      <div className="">
        <CaretRight size={32} className="relative 2xl:mr-[54.5rem] xl:mr-[29.8rem]" />
      </div>
    ),
  };

  return (
    <div>
     <div className="md:pt-8 md:px-12 px-6 md:pb-0 pb-3">
        <h1 className="font-bold md:text-[26px] text-xl gap-0">Nonton Anime ya disini🔥</h1>
    </div>

    <div className="justify-between">
        <Zoom {...zoomInProperties} className="inline-block align-middle">
				{images.map((each, index) => (
					<div key={index} className="flex md:p-10 p-4">
						<img
							className="2xl:w-[60rem] xl:w-[45rem] md:w-[52rem] w-[42rem] xl:h-[25rem] 2xl:h-[33rem] md:h-[27rem] h-[14rem] shadow-xl dark:shadow-lg rounded-xl dark:shadow-colos-accent"
							src={each}
						/>
					</div>
				))}
             
			</Zoom>
      
      {/* Info terbaru */}
            <div className="inline-block align-middle absolute right-0 
            2xl:pl-19 2xl:pt-20 2xl:pb-20 2xl:pr-20 2xl:top-28 
            xl:pt-9 xl:pb-10 xl:pr-10 pl-5 xl:top-[7.5rem] 
            z-30 invisible xl:visible">
                <div>
                    <div>
                        <h1 className="2xl:text-3xl xl:text-xl pb-4">Info terbaru!!</h1>

                        <div id="component-info" className="2xl:w-[46rem] 2xl:h-[29rem] xl:w-[26rem] xl:h-[22.8rem] border border-colos-primary dark:border-colos-accent shadow-xl dark:shadow-colos-accent dark:shadow-lgc rounded-lg">
                          <div>
                            <AnimeNews></AnimeNews>
                          </div>
                        </div>

                    </div>
                </div>
            </div>
       </div>
    </div>
    )
};

export default AnimePoster;
