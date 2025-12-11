import card1 from "../assets/Card1.png";
import card2 from "../assets/Card 2.png";
import card3 from "../assets/Card 3.png";
// import banner from "../assets/Steps4.png"
import navGlow from "../assets/Ellipse 1427.png"
export default function TradingHustler() {
  return (
    <div
      className="min-h-screen bg-black relative  overflow-hidden"

      
      // style={{
      //   backgroundImage: `url(${banner})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundBlendMode: "normal"
      // }}
    >
         {/* NAVBAR CENTER GLOW IMAGE */}
    
  {/* GLOW ABOVE CENTER */}
  <img
    src={navGlow}
    className="
      absolute 
      top-0
      left-1/2
      -translate-x-1/2
      w-[600px]
      md:w-[800px]
      opacity-60 
      pointer-events-none 
      select-none
      blur-sm
    "
    alt="glow"
  />
      
      {/* Header Section */}
      <div className="relative z-10 mt-[72px] text-center px-4 md:px-0">
        <button className="inline-block rounded-[28px] border border-[#537066] text-white px-4 py-2 mb-4">
          Step by Step
        </button>

        <h1 className="text-3xl sm:text-4xl md:text-[48px] font-medium font-inter-display text-white mb-3">
          Your Path to Becoming a <br />
          Trading Hustler
        </h1>

        <p className="text-sm sm:text-base text-[#DFDFDF] max-w-2xl mx-auto">
          From sign-up to scaling your profits, this streamlined process turns
          your trading <br /> strategy into a long-term earning opportunity.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-7xl mx-auto px-4 md:px-6">
        {/* Card 1 */}
        <div
          className="relative w-full h-90 md:h-[416px] px-4 py-6 border border-[#323232] rounded-xl overflow-hidden text-white"
          style={{
            backgroundImage: `url(${card1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Choose</h2>
            <p className="text-[#B1B1B1] text-sm sm:text-base leading-relaxed">
              Customize your trading experience by selecting 
              
                funding program and account size that fits your goals.
              
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative w-full h-90 md:h-[416px] px-4 py-6 border border-[#323232] rounded-xl overflow-hidden text-white"
          style={{
            backgroundImage: `url(${card2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-2">Trade</h3>
            <p className="text-[#B1B1B1] text-sm sm:text-base leading-relaxed">
              Meet the trading objectives displayed on your dashboard with no
              deadlines & no pressure.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="relative w-full h-90 md:h-[416px] px-4 py-6 border border-[#323232] rounded-xl overflow-hidden text-white"
          style={{
            backgroundImage: `url(${card3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-2">Get Funded</h3>
            <p className="text-[#B1B1B1] text-sm sm:text-base mb-4 leading-relaxed">
              Unlock up to $400,000 in trading capital after passing the
              challenge.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-4">
              {["$4500", "$8500", "$6500", "$8500"].map((item, i) => (
                <div key={i} className="bg-black/30 rounded-lg p-2 text-center">
                  <span className="text-emerald-400 font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
