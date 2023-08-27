import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="absolute inset-0 z-50 w-full bg-transparent">
      <div className="flex justify-between items-center py-4 px-8">
        <img
          src={Logo}
          alt="Explore Nature Logo"
          className="w-14 h-14 invert"
        />
        <ul className="hidden space-x-6 text-white text-sm font-medium md:flex md:items-center">
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Maps</a>
          </li>
          <li>
            <a href="#">Challenge</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <button className="border rounded-md hover:bg-white hover:text-gray-600 py-2 px-6">
              Join Us
            </button>
          </li>
        </ul>
        <button class="relative group md:hidden">
          <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200">
            <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <span class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></span>
              <span class="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></span>
              <span class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></span>

              <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                <span class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></span>
                <span class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></span>
              </div>
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
