import { useState } from "react";
import { Trindgallery} from "./data";

export default function TrendGallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  function handleClick(img: string) {
    setSelectedImg(img);
  }

  function closeOverlay() {
    setSelectedImg(null);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mx-5 md:px-[60px] px-4 pt-24">
        {Trindgallery.map((item) => (
          <div
            key={item.id}
            className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-purple-500/20 border border-gray-700"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                onClick={() => handleClick(item.img)}
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>



      {selectedImg && (
        <div
          onClick={closeOverlay}
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black/70"
        >
          <img
            src={selectedImg}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[95%] max-h-[95%] rounded-xl shadow-2xl"
          />

          <button
            onClick={closeOverlay}
            className="absolute top-5 right-5 text-white text-4xl"
          >
            ×
          </button>
        </div>
      )}

    </div>
  );
}