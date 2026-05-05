import { ChevronDown } from "lucide-react";

export default function Hero() {


  return (
    <section className="relative flex items-center justify-center min-h-[600px] bg-center bg-no-repeat bg-cover"
      style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      }}>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-purple-900/50 to-black/70"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        
        <div className="inline-block mb-4">
          <div className="px-4 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/50">
            <span className="text-sm text-purple-300">🎮 Welcome Gamers</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Game Store
          </span>
        </h1>
        
        <div className="space-y-4 mb-8">
          
          <div className="flex flex-wrap justify-center gap-4 text-gray-300">
            <span className="px-3 py-1 bg-white/5 rounded-full backdrop-blur-sm">📱 Phone Games</span>
            <span className="px-3 py-1 bg-white/5 rounded-full backdrop-blur-sm">🎮 3D Games</span>
            <span className="px-3 py-1 bg-white/5 rounded-full backdrop-blur-sm">🔥 Your Favorite Games</span>
          </div>
        </div>
        
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
            Start Your Journey 🚀
          </button>
        </div>
           <div className="absolute left-1/2 -translate-x-1/2 mt-20">
            <ChevronDown className="text-white animate-bounce w-8 h-8" />
      </div>
      </div>
    </section>
  );
}