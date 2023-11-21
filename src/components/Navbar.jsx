import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="absolute inset-0 z-10 w-full bg-transparent">
      <div className="flex justify-between items-center py-4 px-8">
        <img
          src={Logo}
          alt="Explore Nature Logo"
          className="w-14 h-14 invert"
        />
        <ul className="hidden space-x-6 text-secondary-50 text-base font-medium font-source md:flex md:items-center">
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Articles</a>
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
            <button className="border border-secondary-50 py-2 px-6 text-secondary-50 bg-transparent cursor-pointer rounded-md transition-colors hover:bg-primary-600 hover:border-primary-600 hover:text-secondary-50">
              Join Us
            </button>
          </li>
        </ul>
        <button className="text-secondary-50 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
