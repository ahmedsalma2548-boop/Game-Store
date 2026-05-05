import { useState } from "react";
import { Wallpaper} from "./data";
import { Link } from "react-router-dom";
import { Home as HomeIcon } from "lucide-react";

export default function WallpaperGallery(){
    const [selectedImg, setSelectedImg] = useState(null)

    function handellClick(img){
        setSelectedImg(img)
    }

    function closeOverlay(){
        setSelectedImg(null)
    }

   return(
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16">
            
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mx-5 md:px-[60px] px-4 pt-24">
            {Wallpaper.map((item)=>(
                <div key={item.id}
            className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-purple-500/20 border border-gray-700"
                >
                    <div className="relative h-64 overflow-hidden">
                        <img
                        onClick={()=> handellClick(item.img)}
                        src={item.img}
                        className="w-full h-full object-cover group-hover:scale-110 transform duration-500 cursor-pointer "
                        />
                    </div>
                    
                </div>
            ))}
        </div>


        {selectedImg &&(
            <div 
            onClick={closeOverlay}
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black/70">
                <img
                src={selectedImg}
                className="max-w-[95%] max-h-[95%] rounded-xl shadow-2xl"
                />
                <button
                onClick={closeOverlay}
                className="absolute top-5 right-5 text-white text-4xl"
                >
                    x
                </button>
            </div>
        )}
    </div>
   )
}