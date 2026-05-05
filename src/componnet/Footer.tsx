import { Globe, MessageCircle, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white pt-10 mt-10 border-t border-purple-500/30">
      
      {/* العنوان */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          My Game Site
        </h2>
        <p className="text-gray-400">Best place for gamers 🎮</p>
      </div>

      <div className="container mx-auto px-6">
        <div className="border-t border-purple-500/30 my-6"></div>
      </div>

      <div className="container mx-auto px-6 pb-6 grid grid-cols-1 md:grid-cols-3 items-center text-sm text-gray-400 gap-4">
        
        <p className="text-center md:text-left">
          © 2026 All Rights Reserved
        </p>

        <div className="flex justify-center gap-5 text-lg">
          <Globe className="cursor-pointer hover:text-purple-400 transition duration-200" />
          <MessageCircle className="cursor-pointer hover:text-green-400 transition duration-200" />
          <Share2 className="cursor-pointer hover:text-pink-400 transition duration-200" />
        </div>

        <p className="text-center md:text-right">
          📞 010924016
        </p>

      </div>
    </footer>
  );
}