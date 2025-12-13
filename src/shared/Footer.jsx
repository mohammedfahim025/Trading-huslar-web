import React from 'react';
import { Facebook, Mail, Twitter, Linkedin, Instagram } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../assets/logo.png"

export default function Footer() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1  px-8 py-16">
        {/* Header */}
        <div className="w-full flex items-center justify-between mb-16 max-w-6xl mx-auto gap-6 flex-row">
          <div className="">
            <img src={logo} alt="" className="w-[85px] md:w-auto" />
          </div>

         {/* Social Icons */}
          <div className="flex gap-1 md:gap-4  ml-auto">
  {/* Facebook */}
  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-[linear-gradient(90deg,#0D0C0C,#171513)] cursor-pointer transition hover:scale-105">
    <FaFacebookF className="text-white text-[30px] md:text-[18px] hover:text-[#00B67A]" />
  </div>

  {/* Mail */}
  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-[linear-gradient(90deg,#0D0C0C,#171513)] cursor-pointer transition hover:scale-105">
    <MdEmail className="text-white text-[30px] md:text-[18px] hover:text-[#00B67A]" />
  </div>

  {/* Twitter */}
  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-[linear-gradient(90deg,#0D0C0C,#171513)] cursor-pointer transition hover:scale-105">
    <FaTwitter className="text-white text-[30px] md:text-[18px] hover:text-[#00B67A]" />
  </div>

  {/* LinkedIn */}
  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-[linear-gradient(90deg,#0D0C0C,#171513)] cursor-pointer transition hover:scale-105">
    <FaLinkedinIn className="text-white text-[30px] md:text-[18px] hover:text-[#00B67A]" />
  </div>

  {/* Instagram */}
  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-[linear-gradient(90deg,#0D0C0C,#171513)] cursor-pointer transition hover:scale-105">
    <FaInstagram className="text-white text-[30px] md:text-[18px] hover:text-[#00B67A]" />
  </div>
</div>
        </div>

        {/* Navigation Grid */}
        <div className="flex flex-row flex-wrap md:flex-row justify-between max-w-7xl p-4 md:p-2 pb-8 pt-8 border-y border-[#1A1A1A] mx-auto gap-12 bg-black md:bg-transparent">
          {/* Left Group: Trade+Resources grouped, Community separate */}
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex flex-col sm:flex-row gap-8">
              {/* Trade Column */}
              {/* Trade + Resources Parent */}
<div className="flex flex-row justify-between w-full 
                sm:flex-row sm:justify-start sm:gap-8">

  {/* Trade Column */}
  <div>
    <h3 className="text-white font-bold mb-4">Trade</h3>
    <ul className="space-y-3 text-sm text-[#B0B0B0]">
      <li><a href="#" className="hover:text-emerald-500 transition">Affiliate Program</a></li>
      <li><a href="#" className="hover:text-emerald-500 transition">Economic Calendar</a></li>
      <li><a href="#" className="hover:text-emerald-500 transition">Symbols</a></li>
      <li><a href="#" className="hover:text-emerald-500 transition">Direct Pass</a></li>
    </ul>
  </div>

  {/* Resources Column */}
  <div>
    <h3 className="text-white font-bold mb-4">Resources</h3>
    <ul className="space-y-3 text-sm text-[#B0B0B0]">
      <li><a href="#" className="hover:text-emerald-500 transition">About us</a></li>
      <li><a href="#" className="hover:text-emerald-500 transition">Support center</a></li>
      <li><a href="#" className="hover:text-emerald-500 transition">Our history</a></li>
      <li><a href="#" className="hover:text-emerald-500 transition">Blog</a></li>
    </ul>
  </div>

</div>
            </div>

            {/* Community Column */}
            <div>
              <h3 className="text-white font-bold mb-4">Community</h3>
              <ul className="space-y-3 text-sm text-[#B0B0B0] ">
                <li><a href="#" className="hover:text-emerald-500  transition">Facebook</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Discord</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Instagram</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Twitter</a></li>
              </ul>
            </div>
          </div>

          {/* Right Column: Business Hours */}
          <div className="mt-8 md:mt-0 md:w-64">
            <h3 className="text-white font-bold mb-4">Business hours</h3>
            <ul className="space-y-3 text-sm text-[#B0B0B0] ">
              <li className="flex justify-between">
                <span>Weekdays</span>
                <span className="text-white">08:00 AM - 21:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">08:00 AM - 18:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="max-w-7xl  mx-auto py-8  space-y-6 text-[16px] text-[#B0B0B0] ">
          <div>
            <h4 className="text-white font-bold mb-2">Trading Hustler Evaluation Disclaimer</h4>
            <p className="leading-relaxed">
              The Trading Hustler Evaluation Program is designed to provide real-world trading conditions with strict risk parameters. It is intentionally challenging, even for experienced traders. Before joining, ensure you fully understand how trading evaluators work and the associated risks. This program is not recommended for individuals with limited or no trading experience. There is real money at risk. Trading involves significant risk, and you may lose your capital.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-2">Leverage Risk</h4>
            <p className="leading-relaxed">
              Trading futures, forex, and CFDs carries a high level of risk and may not be suitable for all investors. You could lose all or more than your initial investment. Only trade with risk capital you can afford to lose without impacting your financial security or lifestyle. Always remember that past performance does not guarantee future results.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-2">CFTC Rule 4.41</h4>
            <p className="leading-relaxed">
              Hypothetical or simulated trading performance results have inherent limitations. Unlike actual trading results, simulated outcomes do not represent real market conditions. Since no real transactions executed, simulated results may overstate or understate performance due to market factors such as liquidity. Additionally, simulated programs are designed with the benefit of hindsight. No claim is made that any trading account will or is likely to achieve profits or losses similar to those shown.
            </p>
          </div>
        </div>

        
      </div>

      {/* Bottom Section with Glow */}
      <div className="relative mt-20">
        {/* Gradient glow effect */}
        <div className="absolute inset-0  "></div>

        {/* Footer Bottom */}
        <div className="relative px-8 py-8  flex flex-col md:flex-row justify-between items-center text-base text-gray-500 max-w-6xl mx-auto gap-4 md:gap-0">
          <p className='text-white '>©Trading Hustler. All Rights Reserved.</p>
          <div className="flex gap-6 flex-wrap justify-center md:justify-end">
            <a href="#" className="hover:text-emerald-500 transition">Terms & Conditions</a>
            <a href="#" className="hover:text-emerald-500 transition">Risk disclosure</a>
            <a href="#" className="text-emerald-500 hover:text-emerald-400 transition">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
