import logo from "../assets/logo-dubana.PNG";

const Navbar = () => {
  return (
    <nav className="w-full h-24 drop-shadow-md bg-white sticky top-0 z-50">
      <div className="flex h-full items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="logo-div">
          <img className="h-14" src={logo} alt="Dubana Logo" />
        </div>
        <div className="flex justify-center items-center gap-2 flex-1">
          <ul className="flex justify-center items-center gap-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Reunion</li>
            <li className="cursor-pointer">Members</li>
            <li className="cursor-pointer">Be a Member</li>
            <li className="cursor-pointer">Executives</li>
            <li className="cursor-pointer">Dubana Talk</li>
            <li className="cursor-pointer">Articles</li>
            <li className="cursor-pointer">Activity</li>
            <li className="cursor-pointer">Gallery</li>
            <li className="cursor-pointer">About Us</li>
          </ul>
          <button className="rounded-lg px-5 py-2 bg-[#012077] text-white text-md flex justify-center items-center">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
