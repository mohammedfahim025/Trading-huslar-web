import React from "react";
import choseCard1 from "../assets/choseCard1.png";
import chose1Child from "../assets/chose1Child.png";
import ChoseCard2 from "../assets/choseCard2.png";
import ChoseChild2 from "../assets/chose2Child.png";
import ChoseCard3 from "../assets/Chose3Card.png";
import ChoseChild3 from "../assets/Chose3Child.png";
import ChoseCard4 from "../assets/Chose4Card.png";
import Chose5Card from "../assets/Chose5Card.png";
import ChoseChild5 from "../assets/Chose5Child.png";
import headerBg from "../assets/Ellipse 1427.png";

export default function TradingChose() {
  return (
    <div className="min-h-screen text-white bg-black p-[72px] sm:p-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
     <div
  className="w-full min-h-[400px] flex flex-col justify-center items-center text-center bg-cover bg-center"
  style={{ backgroundImage: `url(${headerBg})` }}
>
  <h1 className="text-4xl sm:text-5xl font-medium text-white leading-tight px-4">
    Why Traders Chose
    <br />
    Trading Hustler
  </h1>
</div>

        {/* First Row: 2 Cards */}
        <div className="grid grid-cols-1 px-4 lg:grid-cols-2 gap-4 mb-6 justify-center">
          {/* Card 1 */}
          <div
            className="rounded-lg px-4  sm:px-6 py-6 border border-[#1A1A1A] flex flex-col justify-between bg-cover bg-center max-sm:w-[361px] max-sm:h-[320px]"
            style={{ backgroundImage: `url(${choseCard1})` }}
          >
            <div className="flex flex-col justify-center items-center mb-4 sm:mb-6">
              <img src={chose1Child} alt="Total Users" className="w-35.25%  sm:w-auto mb-2" />
            </div>

            <h3 className="text-xl sm:text-2xl mt-2 font-medium">
              Advanced Performance Dashboard
            </h3>
            <p className="text-[#9F9F9F] text-sm sm:text-base leading-relaxed pb-4 sm:pb-6">
              Fully integrated analytics dashboard with real-time metrics, trade
              tracking, and risk monitoring. Built on MetaTrader 5 for
              industry-standard reliability.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="rounded-lg px-4 sm:px-6 py-6 border border-[#1A1A1A] flex flex-col justify-between bg-cover bg-center max-sm:w-[361px] max-sm:h-[320px]"
            style={{ backgroundImage: `url(${ChoseCard2})` }}
          >
            <div className="flex justify-center items-center -mt-8 sm:mb-6">
              <img src={ChoseChild2} alt="Child Stat Icon" className="w-30% sm:w-auto" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-medium mt-2">
                Best Trading Platforms
              </h3>
              <p className="text-[#9F9F9F] text-sm sm:text-base leading-relaxed pb-4 sm:pb-6">
                Trade on MetaTrader 5 with seamless execution, institutional-grade reliability, and global market access.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row: 3 Cards */}
        <div className="grid grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-4 justify-center">

          {/* Card 3 */}
          <div
            className="rounded-lg p-3 border border-[#1A1A1A] flex flex-col justify-between bg-cover bg-center max-sm:w-[361px] max-sm:h-[330px]"
            style={{ backgroundImage: `url(${ChoseCard3})` }}
          >
            <div className="flex justify-center items-center">
              <img src={ChoseChild3} alt="" className="w-30%  sm:w-auto" />
            </div>

            <div className="pb-6">
              <h3 className="text-xl sm:text-[28px] font-medium -mt-5">Direct Challenge Pass</h3>
              <p className="text-[#9F9F9F]  text-sm sm:text-base leading-relaxed mt-2">
                Direct access to a real trading account without evaluation.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="relative  rounded-lg p-6 sm:p-8 border border-[#1A1A1A] bg-cover bg-center flex flex-col justify-between max-sm:w-[361px] max-sm:h-[330px]"
            style={{ backgroundImage: `url(${ChoseCard4})` }}
          >
            {/* <div className="flex justify-center items-center mb-4 sm:mb-6">
              <img src={ChoseCard4} alt="Card Icon" className="w-20 sm:w-24" />
            </div> */}

            <div className="mt-auto">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">7 Days Payouts</h3>
              <p className="text-[#9F9F9F] text-sm leading-relaxed pb-4 sm:pb-6">
                Receive payouts swiftly - enjoy on 80% profit share with a simple, one-time activation fee per account.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div
            className="rounded-lg p-6  sm:p-8 border border-[#1A1A1A] flex flex-col justify-between bg-cover bg-center max-sm:w-[361px] max-sm:h-[330px]"
            style={{ backgroundImage: `url(${Chose5Card})` }}
          >
            <div className="flex justify-center items-center mb-4 sm:mb-6">
              <img src={ChoseChild5} alt="" className="w-30% sm:w-auto" />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4">24/7 Live Support</h3>
              <p className="text-[#9F9F9F] text-sm leading-relaxed pb-4 sm:pb-6">
                Access 24/7 Live Personal Support with responses in seconds.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
      <div className="flex justify-center mt-6 w-full">
  <button className="bg-white text-black font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-gray-200 transition w-full sm:w-auto">
    Get Funded
  </button>
</div>

      </div>
    </div>
  );
}
