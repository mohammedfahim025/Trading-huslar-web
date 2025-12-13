import { Star } from "lucide-react";
import Navbar from "../shared/Navbar";
import banner from "../assets/hero2.png";

const Banner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "normal",
        }}
        className=" w-full relative"
      >
        <Navbar />

        <section className="max-w-7xl mx-auto px-4  sm:px-6 sm:py-24 lg:px-8 lg:py-3 text-center">
          {/* REVIEW BADGE */}
          <div className="mt-18  flex items-center justify-center gap-2 mx-auto w-fit px-6 py-3 rounded-full border border-[#28A97F] text-white">
            <div className="flex items-center gap-1">
              <Star size={20} className="text-[#FFA300] fill-[#FFA300]" />
              <Star size={20} className="text-[#FFA300] fill-[#FFA300]" />
              <Star size={20} className="text-[#FFA300] fill-[#FFA300]" />
              <Star size={20} className="text-[#FFA300] fill-[#FFA300]" />
              <Star size={20} className="text-[#FFA300] fill-[#FFA300]" />
            </div>
            <span className="text-xs sm:text-[14px] md:text-[16px] ">
              Rated 4.8/5 From 500+ Verified Reviews
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-[36px] sm:text-[70px] md:text-[90px] lg:text-[114px] font-inter-display uppercase font-bold text-white mt-8">
            Get Funded Now
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-4 text-[13px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#CACACA]">
            We fund your trading so you can focus on your strategy. Trade XAUUSD,
            Forex, Crypto and <br className="hidden sm:block" /> earn rewards on demand.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              className="inline-block cursor-pointer rounded-xl bg-white text-black px-8 py-4 font-normal font-inter-display transition hover:bg-gray-200"
              href="#"
            >
              Start Challenge
            </a>

            <a
              className="inline-block cursor-pointer rounded-xl bg-black text-white px-8 py-4 font-normal border border-[#7E7E7E] font-inter-display transition hover:bg-gray-900"
              href="#"
            >
              Join Our Telegram
            </a>
          </div>

          {/* WORKS SECTION */}
          <section className="py-10   sm:mt-24 lg:mt-24">
            <div className="mx-auto">
              <div className="grid grid-cols-2 mb-[72px] pb-15 sm:grid-cols-2 px-8  md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-items-center text-center">
                {/* Item 1 */}
                <div>
                  <h2 className="text-3xl sm:text-4xl  md:text-5xl lg:text-[40px] font-semibold text-[#002A1C]">
                    2021
                  </h2>
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#000000] mt-2 sm:mt-4">
                    Established
                  </p>
                </div>

                {/* Item 2 */}
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-semibold text-[#002A1C]">
                    2,00,000+
                  </h2>
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#000000] mt-2 sm:mt-4">
                    Trading Hustler User
                  </p>
                </div>

                {/* Item 3 */}
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-semibold text-[#002A1C]">
                    $35M+
                  </h2>
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#000000] mt-2 sm:mt-4">
                    Total Payouts
                  </p>
                </div>

                {/* Item 4 */}
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-semibold text-[#002A1C]">
                    $4,67,000+
                  </h2>
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#000000] mt-2 sm:mt-4">
                    Top-Earning Trader
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* Fade overlay to blend with next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
      </div>
    </>
  );
};

export default Banner;
