export default function AboutUs(){
    return(
        <div className="px-8 py-8">
            <div className="flex justify-between gap-3">
                <div className="py-9">
                    <h1 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold text-5xl mb-5"><span className="text-white">About</span> Game Store</h1>
                <p className="text-white mb-3">More Than Just a Game Store</p>
                <p className="max-w-2xl text-gray-300 text-lg leading-loose mt-6">At GameStore, we live and breathe gaming. Our mission is to bring you the latest, most exciting, and highest quality games from around the world. Whether you're a casual player or a hardcore gamer, we've got something for everyone.</p>
                </div>
                <div>
                <img className="max-w-2xl rounded-md"
                src="/public/img/wallpaper/2.jpg"/>
            </div>
            </div>
        
            <hr className="border-gray-700 my-6" />

            <div className="flex justify-between gap-5 mt-10">
                <div className="py-9">
                    <h1 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold text-5xl mb-5"><span className="text-white">Our</span> Mission</h1>
                <p className="max-w-2xl text-gray-300 text-lg leading-loose mt-6">We aim to create the ultimate destination for gamers worldwide. By offering a wide range of games, exceptional user experience, and a passionate community, we strive to make gaming accessible, enjoyable, and unforgettable for everyone.</p>
                </div>
                <div>
                <img className="max-w-2xl rounded-md"
                 src="/public/img/wallpaper/17.jpg"/>
            </div>
            </div>
            
        </div>
    )
}