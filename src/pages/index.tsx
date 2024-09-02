import Head from "next/head";
import Email from "@/components/Email";
import Loader from "@/components/Loader";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import React, { useEffect, useState } from "react";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  function isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileRegex = /mobile|android|iphone|ipad|ipod|blackberry|windows phone|opera mini|iemobile|mobile safari|silk/i;
    return mobileRegex.test(userAgent);
  }  
  useEffect(() => {
      if(isMobileDevice()) return ;
      console.log("Hello ")
    const script = document.createElement('script');
    script.src = 'script.js';
    script.async = true;
    script.type = 'module';
    document.body.appendChild(script);

  }, []);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <div className="app" id="app">
      <Head>
        <title>Awais Oem</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {showContent && (
        <>
          <Navbar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
            <About />
            <Experience />
            {/* <Projects /> */} 
            <Contact />
          </main>
          <Footer />
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  );
}

export default Index;
