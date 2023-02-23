import { useState } from "react";
import Boost from "./components/Boost";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ShortenedUrls from "./components/ShortenedUrls";
import UrlShorter from "./components/UrlShorter";


function App() {

  const [shortenedUrls, setShortenedUrls] = useState([])



  return (
    <div className="App font-pappins text-default bg-customGray">
      <Navbar />
      <Hero />
      <div className="flex flex-col relative -top-20">
        <UrlShorter setShortenedUrls={setShortenedUrls} shortenedUrls={shortenedUrls} />
        <ShortenedUrls shortenedUrls={shortenedUrls} setShortenedUrls={setShortenedUrls} />
      </div>
      <Content />
      <Boost />
      <Footer/>
    </div>
  );
}

export default App;
