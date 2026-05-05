import {galleryItems} from "./data"
import {
  Home as 
  Image,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const AppGallery = () => {
  

  const getViewAllLink = (itemType: string) => {
    switch(itemType) {
      case "Top Games":
        return "/gallery-tab/top-gallery";
      case "Trend Games":
        return "/gallery-tab/trend-gallery";
      case "Wallpaper":
        return "/gallery-tab/wallpaper-gallery";
      default:
        return "#";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      

      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Gallery
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the best moments and stunning artwork from your favorite games.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-purple-600/90 rounded-full text-xs font-semibold text-white">
                    {item.type}
                  </span>
                </div>
              </div>

              <div className="p-4">
                

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Image className="w-4 h-4" />
                    <span>{item.count} items</span>
                  </div>

                  <Link
                    to={item.type ? getViewAllLink(item.type) : "#"}
                    className="text-purple-400 hover:text-purple-300 transition text-sm font-medium flex items-center gap-1"
                  >
                    View All <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500">
          © 2026 GameStore
        </div>
      </footer>

    </div>
  );
};

export default AppGallery;