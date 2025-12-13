import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mx-auto max-w-7xl bg-transparent py-4 px-6 flex items-center justify-between relative">

      {/* Logo */}
      <div className="flex items-center">
        <img
          className="w-40 md:w-52 lg:w-60"
          src={logo}
          alt="logo"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 text-white text-lg font-normal">
        <li><a href="#" className="hover:text-green-500 transition">Home</a></li>
        <li><a href="#" className="hover:text-green-500 transition">Pricing</a></li>
        <li><a href="#" className="hover:text-green-500 transition">Contact Us</a></li>
        <li><a href="#" className="hover:text-green-500 transition">Our Rules</a></li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-2">
        <button className="px-8 py-3 cursor-pointer rounded-xl bg-white text-black font-medium text-[16px]">
          Log In
        </button>

        <button className="px-8 py-3 cursor-pointer rounded-xl border bg-[#101010] border-[#69D0A5] text-white font-normal">
          Get Funded
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white"
      >
        {open ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#0D0D0D] border-t border-white/10 p-6 flex flex-col gap-6 md:hidden">

          <ul className="flex flex-col gap-4 text-white text-lg">
            <li><a href="#" className="hover:text-green-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Pricing</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-green-500 transition">Our Rules</a></li>
          </ul>

          <div className="flex flex-col gap-3">
            <button className="py-3 rounded-xl bg-white text-black font-medium">
              Log In
            </button>

            <button className="py-3 rounded-xl border bg-[#101010] border-[#69D0A5] text-white font-normal">
              Get Funded
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
