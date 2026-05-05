import { Images } from "./data";

function Gallery() {
  return (
    <div className="py-[60px]">
      
      <h2 className="text-center text-xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
        Gallery
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-[30px] mx-5 px-[60px]">
        {Images.map((img, index) => (
          <div 
            key={index} 
            className="p-[15px] bg-gradient-to-br from-purple-900/30 to-gray-800/50 backdrop-blur-sm shadow-[0_2px_15px_rgba(0,0,0,0.186)] rounded-[6px] overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300"
          >
            <img 
              src={img} 
              alt={`gallery-${index}`} 
              className="w-full max-w-full rounded-[4px] transition-transform duration-300 hover:rotate-3 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;