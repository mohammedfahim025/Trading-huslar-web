import { useState, useEffect } from "react";
import { ChevronRight, Info } from "lucide-react";
import header1 from "../assets/cardHeader.png";
import header2 from "../assets/cardHeader.png";
import header3 from "../assets/cardHeader.png";
import bitCoin from "../assets/bitcoin-logo 1.png";
import ethereum from "../assets/Clip path group.png";
import visa from "../assets/Visa 1 (1).png";
import americaExpress from "../assets/america.png";
import masterCard from "../assets/Mastercard 1.png";
import paypal from "../assets/logos_paypal.png";
import centeEllips from "../assets/Ellipse 1427.png";
import sidellips from "../assets/sideEllipes.png";


import {
  step2Prices,
  instantFundedPrices,
  step2Phases,
  instantFundedPhase,
  paymentMethods,
  benefits,
} from "../components/challengeData/ChallengeData.js";

export default function ChallengeSelector() {
  const headers = [header1, header2, header3];

  const [step, setStep] = useState("1-step");
  const [account, setAccount] = useState("$20k");
  const accounts = Object.keys(step2Prices);

  // step change default account reset
// step change default account reset
useEffect(() => {
  setAccount(step === "1-step" ? "$20k" : "$2k");
}, [step]);


  // display price update  step
  const displayedPrice =
    step === "1-step" ? step2Prices[account] : instantFundedPrices[account];

  const displayedPhases = step === "1-step" ? step2Phases : instantFundedPhase;

  return (
    <div className="min-h-screen bg-black sm:pb-[72px] overflow-hidden relative">
      
      {/* HEADER */}
      {/* HEADER */}
<div
  className="header relative w-full max-w-[1200px] mx-auto mb-16 px-4 sm:px-6 lg:px-8 
             py-16 sm:py-20 lg:py-28 text-center bg-no-repeat bg-center bg-cover"
  style={{
    backgroundImage: `url(${centeEllips})`,
  }}
>
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 flex flex-col items-center justify-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white 
                   mb-4 sm:mb-6 leading-snug sm:leading-tight lg:leading-tight">
      Choose your challenge
    </h1>

    <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl 
                  max-w-[900px] mx-auto leading-relaxed sm:leading-relaxed lg:leading-relaxed">
      Select your account size and begin a refined, professional trading experience.
    </p>
  </div>
</div>



      {/* STEP + ACCOUNT */}
      <div className="flex flex-col md:flex-row justify-around gap-12 mb-12 max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
<div className="flex bg-[#0A0A0A] border sm:ml-4 border-[#1A1A1A] rounded-xl p-1 gap-2 w-full max-w-xs mx-auto justify-center">
  <button
    onClick={() => setStep("1-step")}
    style={{
      background: step === "1-step"
        ? "linear-gradient(180deg, #FFFFFF 0%, #E5E5E5 100%)" // selected
        : "linear-gradient(180deg, #0D0C0C 0%, #131716 100%)",   // default
    }}
    className={`flex-1 py-3 rounded-lg font-medium text-sm sm:text-base transition ${
      step === "1-step" ? "text-black" : "text-white"
    }`}
  >
    2 - Step
  </button>

  <button
    onClick={() => setStep("2-step")}
    style={{
      background: step === "2-step"
        ? "linear-gradient(180deg, #FFFFFF 0%, #E5E5E5 100%)" // selected
        : "linear-gradient(180deg, #0D0C0C 0%, #131716 100%)",   // default
    }}
    className={`flex-1 py-3 rounded-lg font-medium text-sm sm:text-base transition ${
      step === "2-step" ? "text-black" : "text-white"
    }`}
  >
    Instant Funded
  </button>
</div>



         
{/* ACCOUNT BUTTONS */}
<div
  className={`grid 
    ${step === "2-step" ? "grid-cols-2" : "grid-cols-4 sm:grid-cols-6"} 
    sm:w-[646px] gap-3 border border-[#1A1A1A] bg-[#0A0A0A] rounded-xl p-4`}
>
  {(step === "1-step" ? accounts : ["$2k", "$5k"]).map((acc) => {
    const isSelected = account === acc;

    return (
      <button
        key={acc}
        onClick={() => setAccount(acc)}
        style={{
          background: isSelected
            ? "linear-gradient(180deg, #FFFFFF 0%, #E5E5E5 100%)" // highlight
            : "linear-gradient(180deg, #0D0C0C 0%, #131716 100%)", // default
        }}
        className={`py-2 rounded-md font-medium transition border border-[#1A1A1A]
          ${step === "2-step" ? "text-lg" : ""}
          ${isSelected ? "text-black" : "text-white"}
        `}
      >
        {acc}
      </button>
    );
  })}
</div>





        </div>

        {/* CHALLENGE PRICE */} 
        <div className="bg-[#0C0C0C] rounded-[22px] p-6 border border-[#353535] h-auto w-full max-w-sm mx-auto">
          <div className="flex justify-center gap-2 mb-6">
            <span className="text-white text-2xl ">Price</span>
            <span className="text-white text-2xl font-semibold"> ${displayedPrice}</span>
          </div>
          <button className="text-base px-7 mt-4 bg-white text-black font-medium py-4 rounded-lg flex items-center justify-center gap-2 mx-auto">
            Start Challenge <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* PHASE CARDS */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6 px-4">
        {displayedPhases.map((phase, idx) => (
          <div
            key={idx}
            className="group relative bg-slate-900/30 border border-[#1A1A1A] rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
            style={
              step === "2-step"
                ? { width: "max-w-6xl",  gridColumn: "span 3" }
                : {}
            }
          >
            <div className="relative z-20 flex justify-center items-center">
              <img
                src={step === "1-step" ? headers[idx] : headers[0]}
                alt=""
                className="w-full h-[180px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col justify-start items-start bg-black/40 rounded-lg p-6">
                <button className="px-4 py-2 border border-[#145D45] text-white rounded-md text-lg font-semibold">
                  {phase.name}
                </button>
                <p className="text-gray-300 mt-3 text-sm">{phase.desc}</p>
              </div>
            </div>
            <div className="space-y-4 bg-[#0C0C0C] p-6 pb-12 text-sm sm:text-base">
              {[
                ["Trading Period", phase.trading],
                ["Maximum Daily loss", phase.dailyLoss],
                ["Maximum loss", phase.maxLoss],
                ["Profit target", phase.profitTarget],
                ["Leverage", phase.leverage],
                ["Reward Schedule", phase.reward],
                ["Profit Split", phase.profitSplit],
              ].map(([label, value], i) => (
                <div className="flex justify-between" key={i}>
                  <div className="flex items-center gap-2 text-gray-400">
                    <span>{label}</span>
                    <Info className="w-3 h-3 bg-[#3C3C3C] rounded-full text-white" />
                  </div>
                  <span className="font-semibold text-gray-300">{value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* PAYMENT METHODS */}
      <div className="max-w-6xl mx-auto mb-6 px-4">
        <div className="border border-[#1A1A1A] bg-[#131716] rounded-xl p-4 md:p-8 flex items-center justify-center flex-wrap gap-4 md:gap-12">
          {paymentMethods.map((method, idx) => (
            <img
              key={idx}
              src={
                method === "Bitcoin"
                  ? bitCoin
                  : method === "Visa"
                  ? visa
                  : method === "Amex"
                  ? americaExpress
                  : method === "Mastercard"
                  ? masterCard
                  : paypal
              }
              className="w-7 md:w-8"
            />
          ))}
        </div>
      </div>

      {/* BENEFITS */}
      <div className="max-w-6xl mx-auto border border-[#1A1A1A] rounded-xl p-2 px-4">
        <div className="grid md:grid-cols-3 gap-2">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-2 bg-[#131716] border border-[#0D0C0C] rounded-lg p-4"
            >
              <svg
                className="w-5 h-5 text-[#00B67A]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z" />
              </svg>
              <span className="text-white font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SIDE ELLIPSES */}
      <img
        src={sidellips}
        alt="Left Ellipse"
        className="hidden md:block absolute bottom-0 left-0 w-[592px] h-[607px]  -mb-8 -ml-50"
      />
      <img
        src={sidellips}
        alt="Right Ellipse"
        className="hidden md:block absolute -bottom-10 right-0 w-[592px] h-[707px]  -mb-8 -mr-30"
      />
    </div>
  );
}
