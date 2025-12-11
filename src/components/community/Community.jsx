import cta from "../../assets/Choose your challenge.png";
import ellips from "../../assets/sideEllipes.png"

const Community = () => {
  return (
    <div className="p-10 px-4 sm:px-6 lg:px-8 relative max-w-7xl mx-auto">
            {/* ---- Glow Image ---- */}
      <img
        src={ellips}
        alt="glow"
        className="
          absolute 
          top-0 left-1/2
          -translate-x-1/2 
          -translate-y-1/2
          w-[420px] sm:w-[520px] md:w-[700px] md:h-[700px]
          opacity-80 
          pointer-events-none 
          blur-sm
        "
      />

      <div
        className="
          max-w-6xl mx-auto 
          flex flex-col items-center justify-center 
          space-y-5 
          rounded-2xl 
          py-10 px-6 sm:px-12
          bg-cover bg-no-repeat bg-center
        "
        style={{
          backgroundImage: `url(${cta})`,
        }}
      >
        {/* ------- Text Section ------- */}
        <div className="text-center max-w-2xl">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            Are you ready to start trading?
          </h2>

          <p className="text-[#C9C9C9] text-base sm:text-lg md:text-base mt-3 leading-relaxed">
            Gain access to elite funding, cutting-edge tools, and the support of
            a whole community dedicated to your growth.
          </p>
        </div>

        {/* ------- Buttons ------- */}
       <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center w-full">
  <button className="w-full sm:w-auto bg-white text-base text-black px-8 py-3 rounded-xl hover:bg-[#008A57] hover:text-white transition font-medium shadow-md">
    Choose Your Challenge
  </button>

  <button className="w-full sm:w-auto border text-base bg-black border-[#00B67A] text-white px-8 py-3 rounded-xl hover:bg-[#00B67A] hover:text-black transition font-medium shadow-md">
    Learn More
  </button>
</div>
      </div>
    </div>
  );
};

export default Community;
