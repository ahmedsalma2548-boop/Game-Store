export default function Testimonials() {
  type Gamer = {
  id: number;
  name: string;
  img: string;
  role: string;
  text: string;
}; 
  const data : Gamer[] = [
    {
      id: 1,
      name: "Mohamed Farag",
      img: "img/avatar-01.png",
      role: "GAMER",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
    },
    {
      id: 2,
      name: "Mohamed Ibrahim",
      img: "img/avatar-02.png",
      role: "GAMER",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
    },
    {
      id: 3,
      name: "Shady Nabil",
      img: "img/avatar-03.png",
      role: "GAMER",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
    },
    {
      id: 4,
      name: "Amr Hendawy",
      img: "img/avatar-04.png",
      role: "GAMER",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
    },
    {
      id: 5,
      name: "Sherif Ashraf",
      img: "img/avatar-05.png",
      role: "GAMER",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
    },
    {
      id: 6,
      name: "Osama Mohamed",
      img: "img/avatar-06.png",
      role: "GAMER",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
    },
  ];

  return (
    <div className="py-16">  

      <h2 className="text-center text-xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
        Most Active Players
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">

        {data.map((item) => (
          <div
            key={item.id}
            className="relative bg-gray-800/50 backdrop-blur-sm p-5 rounded-lg shadow-sm mt-10 border border-gray-700 hover:border-purple-500 transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-20 h-20 rounded-full border-4 border-purple-500 absolute -top-10 right-4 bg-gray-800 p-1"
            />

            <h3 className="text-lg font-bold uppercase mt-8 text-white">
              {item.name}
            </h3>

            <span className="text-purple-400 text-sm block mb-3">
              {item.role}
            </span>

            <div className="flex text-yellow-400 mb-3">
              {[...Array(4)].map((_, i) => (
                <span key={i}>★</span>
              ))}
              <span className="text-gray-600">★</span>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}