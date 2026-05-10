import { Routes, Route, useLocation } from "react-router-dom";
import Header from './componnet/Header'
import Hero from './componnet/HeroSection'
import TrendingGamesHead from './componnet/TrendingGamesHead'
import Gallery from './componnet/Gallery'
import MostActivePlayers from './componnet/MostActivePlayers'
import TopRatedHead from './componnet/TopRatedHead '
import Footer from './componnet/Footer'
import GameDetails from './componnet/GameDetails'
import TopRated from './componnet/TopRated'
import TrendingDetails from './componnet/TrendingDetails'
import Login from './componnet/Login'
import Signup from './componnet/SignUp'
import TopTrind from './componnet/Toptrind'
import GalleryTab from './componnet/GalleryTab'
import TrendGallery from './componnet/TrendImages'
import TopImages from './componnet/TopImages'
import WallpaperGallery from './componnet/Wallpaper'
import AboutUs from './componnet/AboutUs'

function AppContent() {
  const location = useLocation();

  const hideHeaderRoutes = ["/Login", "/register-page"];
  const hideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <TopRatedHead />
            <TrendingGamesHead />
            <Gallery />
            <MostActivePlayers />
            <Footer />
          </>
        } />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/Top-Rated" element={<TopRated />} />
        <Route path="/Trending" element={<TopTrind />} />
        <Route path="/trending/:id" element={<TrendingDetails />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register-page" element={<Signup />} />
        <Route path="/gallerytab" element={<GalleryTab />} />
        <Route path="/gallery-tab/trend-gallery" element={<TrendGallery />} />
        <Route path="/gallery-tab/top-gallery" element={<TopImages />} />
        <Route path="/gallery-tab/wallpaper-gallery" element={<WallpaperGallery />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default AppContent