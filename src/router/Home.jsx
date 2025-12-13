import React from "react";
import Banner from "../components/Banner";
import TradingHustler from "../components/TradingHustler";
import ChallengeSelector from "../components/ChallengeSelector";
import challengeBg from "../assets/Ellipse 1427.png";
import TradingChose from "../components/TradingChose";
import Testimonials from "../components/testimonial/Testimonials";
import FaqSection from "../components/faqsection/FaqSection";
import Community from "../components/community/Community";
import TrustedBg from "../assets/trustedbg.png"
import FaqBg from "..//assets/faqBg.png";
import ChoseBg from '../assets/ChoseBg.png'
import faqCommunity from "../assets/faqcommunityBg.png"
import bgBanner from "../assets/Steps4.png"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div >
        <TradingHustler></TradingHustler>
      </div>
      <div className="bg-black"
        // style={{
        //   backgroundImage: `url(${challengeBg})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundBlendMode: "normal",
        // }}
      >
        <ChallengeSelector></ChallengeSelector>
      </div>
      <div 
        style={{
          backgroundImage: `url(${ChoseBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "normal",
        }}
      >
        <TradingChose></TradingChose>
      </div>
      <div className="bg-black"
      // style={{
      //   backgroundImage: `url(${TrustedBg})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundBlendMode: "normal",
      // }}
      >
        <Testimonials></Testimonials>
      </div>
      <div className="bg-black"
      // style={{
      //   backgroundImage: `url(${faqCommunity})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundBlendMode: "normal",
      // }}
      >
        <FaqSection></FaqSection>
                <Community></Community>

      </div>
    
    </div>
  );
};

export default Home;
