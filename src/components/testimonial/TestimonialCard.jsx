
import { FaCircle } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

const TestimonialCard = ({
  name,
  title,
  description,
  to,
  verified,
  index,
}) => {
  return (
    <>
      <Link to={to}>
        <div
          className={`px-4 bg-[#141414] py-4 font-poppins ${index + 1 === 3 ? "mb-0" : ""}`}
          style={{
            borderRadius: "25px",
           
            backdropFilter: "blur(6.15px)",
          }}
        >
          <div className="divide-y divide-[#363636]">
            <div className="justify-between items-center flex mb-4">
              <h2 className="text-[#F5F8FB] font-bold lg:text-[18px] text-[16px]">
                {name}
              </h2>

              <div className="flex items-center gap-2">
                <p className="flex items-center gap-1">
                  <FaCircle className="text-white" size={10} />
                  <span className="text-[#F5F8FB] text-sm">
                    {verified ? "Verified" : ""}
                  </span>
                </p>

                {/*   Stars*/}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <IoStar key={i} className="text-[#00B67A] text-lg" />
                  ))}
                </div>
              </div>
            </div>
            <div></div>
          </div>

          <div className="text-white lg:text-base text-sm font-semibold mt-4 mb-2">
            {title}
          </div>

          <div className="text-[#C5C5C5] text-sm lg:text-base">
            {description}
          </div>
        </div>
      </Link>
    </>
  );
};

export default TestimonialCard;