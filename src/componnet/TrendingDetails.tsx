import { useParams} from "react-router-dom"; 
import { Trending } from "./data";

export default function TrendingDetails(){
  const {id} = useParams()
  const item = Trending.find((t)=> t.id === Number(id))
  
  if(!item) return (
      <h2 className="text-center text-2xl text-white mb-6">Game Not Found!</h2>
       
  ) 
  
  return(
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-10">
        <div className="max-w-4xl mx-auto px-4">
        
            <h1 className="text-3xl font-bold mt-8 mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {item.name}
            </h1>
          
        
        <img
          src={item.img}
          alt={item.name}
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-8 border border-purple-500/30"
        />
        
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg mb-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-purple-400">About This Game</h2>
          <p className="text-gray-300 leading-relaxed">{item.fullDesc}</p>
        </div>
        
        <div className="flex gap-4 flex-wrap">
          <a 
            href={item.youtube} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Watch on YouTube 🎬
          </a>
        </div>
      </div>
    </div>
  )
}