import { Link } from "react-router-dom";
import { gamesObject } from "./data";

export default function TeamMembers() {
  return (
    <div className="py-16">
      
      <h2 className="text-center text-xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
        Top Rated
      </h2>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {gamesObject.map((game) => (
          <div
            key={game.id}
            className="group bg-gray-800/50 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden flex flex-col border border-gray-700 hover:border-purple-500 transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={game.img}
                alt={game.name}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col flex-1 p-4">
              <h3 className="font-bold text-lg text-white">{game.name}</h3>
              <p className="text-gray-400 text-sm mt-2 flex-1">
                {game.desc}
              </p>

              <Link 
                to={`/game/${game.id}`}
                className="text-purple-400 font-bold hover:text-purple-300 mt-auto text-left inline-block transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}