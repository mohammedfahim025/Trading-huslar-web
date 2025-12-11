import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


import TestimonialCard from "./TestimonialCard";
import start from "../../assets/stars-5 1.png";
import { Link } from "react-router-dom";
import ellips from "../../assets//Ellipse 1427.png"
import sideGlow from "../../assets/sideEllipes.png"
const Testimonials = () => {
  const testimonials = [
    {
      name: "DAN Solheim",
      icon: start,
      title: "Parent-Trader Win Juggling kids and…",
      description:
        "I was impressed with how low the commissions are at Trading Hustler account compared to other firms. The MatchTrader platform is a bit different from what I’m used to, but I adjusted quickly. Happy with the firm so far and excited to see where my trading goes..",
      to: "https://au.trustpilot.com/reviews/67a27a8ca182ae7db54044f4",
      verified: true,
    },
    {
      name: "Billy Ouimet",
      icon: start,

      title: "The fact that they use MT5 is a huge....",
      description:
        "The fact that they use MT5 is a huge plus for me. Execution is fast, and spreads are tight, which makes trading so much more efficient. Plus, customer service is always there when I need them. Highly recommended!",
      to: "https://au.trustpilot.com/reviews/67b6550a58807053540dea20",
      verified: true,
    },
    {
      name: "Frederick King",
      icon: start,
      title: "My Fx capital is hands-down incredible",
      description:
        "My Fx capital is hands-down incredible! The funding process was lightning-fast, I got up to $400K to trade with, and keeping 95% of my profits feels like hitting the jackpot every time those bi-weekly payouts roll in—support’s always there too, like a trusty sidekick!",
      to: "https://au.trustpilot.com/reviews/67df0e3481947501cc216e58",
      verified: true,
    },
    {
      name: "Kerry Collier",
      icon: start,
      title: "Scalper’s Paradise The 1:100 leverage…",
      description:
        "Scalper’s Paradise The 1:100 leverage and instant order execution let me dominate EUR/USD swings. Withdrew $1.8K in profits during lunch—no hoops. MyFxCapital gets traders.",
      to: "https://au.trustpilot.com/reviews/679e6b40a8ff794820e22eac",
      verified: true,
    },
    {
      name: "Scott Daniels",
      icon: start,
      title: "From Skeptic to Advocate After a scam…",
      description:
        "From Skeptic to Advocate After a scam firm ghosted me, I hesitated. MyFxCapital’s transparency hooked me: clear rules, real-time stats, and payouts in 4 hours. Withdrew $5K this month. Trust restored!",
      to: "https://au.trustpilot.com/reviews/679bc2b8fcc7a72032d2b8dc",
      verified: true,
    },
    {
      name: "Kathleen Miller",
      icon: start,
      title: "Customer Support Hero",
      description:
        "Customer Support Hero! I locked myself out during a critical trade, but Alex from support reset my account in 5 minutes. The MT5 platform runs flawlessly, and I’ve withdrawn $3K bi-weekly without delays. MyFxCapital feels like a true partner.",
      to: "https://au.trustpilot.com/reviews/679a6bea179d08cb9e878869",
      verified: true,
    },
    {
      name: "Octavia",
      icon: start,
      title: "I was able to scale my trading to levels",
      description:
        "I was able to scale my trading to levels I never thought possible. The funding process is fair, and having access to up to $400K makes a huge difference. This is the real deal for traders looking to grow.",
      to: "https://au.trustpilot.com/reviews/67d30af29ec448b74f26427a",
      verified: true,
    },
    {
      name: "Phong Huynh",
      icon: start,
      title: "Hands down",
      description:
        "Hands down, the best funding program I’ve joined. The evaluation system makes sense, payouts are quick, and the team is always available to help. Definitely sticking with them long-term!",
      to: "https://au.trustpilot.com/reviews/67d2636ae569f7c6c9a4e157",
      verified: true,
    },
    {
      name: "Shannon Black",
      icon: start,
      title: "Signing up was super easy",
      description:
        "Signing up was super easy, and I was able to start trading immediately. The leverage is exactly what I need, and I appreciate that they allow crypto, forex, commodities, and indices. Perfect for diverse traders like me!",
      to: "https://au.trustpilot.com/reviews/67cf230d968b3c637b64bfb2",
      verified: true,
    },
  ];

  return (
    <div className="relative">
        <img
        src={sideGlow}
        alt=""
        className="hidden lg:block absolute left-0 -ml-50 top-0 h-[607px] pointer-events-none select-none"
      />

      {/* RIGHT SIDE GLOW */}
      <img
        src={sideGlow}
        alt=""
        className="hidden lg:block absolute right-0 top-0 -mr-30 h-[607px] pointer-events-none select-none"
      />
      <div className="max-w-7xl mx-auto  lg:px-0 lg:py-20 py-12 font-poppins">
        
  {/* BOTTOM LEFT GLOW */}
  <img
    src={sideGlow}
    alt=""
    className="hidden lg:block absolute left-0 bottom-0 -ml-50 h-[607px] pointer-events-none select-none"
  />

  {/* BOTTOM RIGHT GLOW */}
  <img
    src={sideGlow}
    alt=""
    className="hidden lg:block absolute right-0 bottom-0 -mr-30 h-[607px] pointer-events-none select-none"
  />
        
        {/* Header */}
      <div
    className="w-full h-[300px] bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center text-center"
    style={{
      backgroundImage: `url(${ellips})`,
    }}
  >
    <p className="text-5xl text-[#CACACA]">Trusted Globally</p>
    <h2 className="text-[16px] font-medium text-[#CACACA] mt-4">
      Here’s what our community has to say
    </h2>
  </div>

        {/* Desktop Layout */}
        <div className="hidden mt-12 lg:block">
          <div className="columns-3 space-y-5">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <TestimonialCard
                  name={testimonial.name}
                  icon={testimonial.icon}
                  title={testimonial.title}
                  description={testimonial.description}
                  // to={testimonial.to}
                  verified={testimonial.verified}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Slider Layout */}
        <div className="lg:hidden block">
          <Swiper
            modules={[Pagination, Autoplay]} // ⬅ removed Navigation
            spaceBetween={16}
            slidesPerView={1.1}
            centeredSlides={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  name={testimonial.name}
                  icon={testimonial.icon}
                  title={testimonial.title}
                  description={testimonial.description}
                  to={testimonial.to}
                  verified={testimonial.verified}
                  index={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Trustpilot link */}
        <Link to="">
          <p className="text-center text-base text-white underline underline-offset-4 lg:mt-4 font-bold">
            See All Reviews
          </p>
        </Link>
        
      </div>
      

      {/* <div className="absolute lg:block hidden bottom-16 z-10">
        <img src={ellipse1} alt="" />
      </div> */}
    </div>
  );
};

export default Testimonials;