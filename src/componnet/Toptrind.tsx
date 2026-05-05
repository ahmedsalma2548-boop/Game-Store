import { Trending, Topformonth } from "./data";


export default function TopTrind() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16">



      <h2 className="text-left text-purple-400 ml-8 my-10 font-bold text-xl inline-block border-b-2 border-purple-500 pb-2">
        Top Trend For This Month →
      </h2>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {Trending.map((game) => (
          <div key={game.id} className="bg-gray-800/50 backdrop-blur-sm shadow rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300">
            <img src={game.img} className="w-full h-48 object-cover" alt={game.name} />
            <div className="p-4">
              <h3 className="font-bold text-white">{game.name}</h3>
              <p className="text-gray-400 text-sm">{game.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-left text-purple-400 ml-8 my-10 font-bold text-xl inline-block border-b-2 border-purple-500 pb-2">
        Top Trending Last Month →
      </h2>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {Topformonth.map((game) => (
          <div key={game.id} className="bg-gray-800/50 backdrop-blur-sm shadow rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300">
            <img src={game.img} className="w-full h-48 object-cover" alt={game.name} />
            <div className="p-4">
              <h3 className="font-bold text-white">{game.name}</h3>
              <p className="text-gray-400 text-sm">{game.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}