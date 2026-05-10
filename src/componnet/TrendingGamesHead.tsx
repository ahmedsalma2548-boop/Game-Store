import { Trending } from "./data";
import { Link } from "react-router-dom";

export default function TrendingGamesHead() {
  return (
    <div className="py-[60px]" id="articles">

      <h2 className="text-center text-xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
        Trending Games
      </h2>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 px-[60px]">

        {Trending.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800/50 backdrop-blur-sm shadow-[0_2px_15px_rgba(0,0,0,0.186)] rounded-[6px] overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-2.5 hover:shadow-[0_2px_15px_rgba(0,0,0,0.578)] border border-gray-700 hover:border-purple-500 flex flex-col"
          >

            <img
              src={item.img}
              alt="article"
              className="w-full max-w-full h-[420px] object-cover"
            />

            <div className="content flex-1 flex flex-col">
              <h3 className="pl-2.5 pt-2 text-[20px] text-white">
                {item.name}
              </h3>

              <p className="pl-2.5 pr-2.5 pb-2.5 text-gray-400 border-b border-gray-700 flex-1">
                {item.desc}
              </p>
            </div>

            <div className="px-[10px] py-3 flex justify-between items-center group">
              <Link
                to={`/trending/${item.id}`}
                className="text-purple-400 font-bold text-[16px] hover:text-purple-300 transition-colors duration-300"
              >
                Read More →
              </Link>

              <i className="text-purple-400 group-hover:animate-[moveing-right_0.5s_linear_infinite]">
                ▶
              </i>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}