import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";
import HeroImage from "../assets/images/hero.webp";

import Iceland from "../assets/images/iceland-northern-lights.webp";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="overflow-hidden">
        <section className="w-screen h-screen relative">
          <img
            src={HeroImage}
            alt=""
            className="w-screen h-screen object-cover object-center"
          />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-screen z-10 px-8 text-center md:text-left">
            <h1 className="text-5xl text-secondary-50 font-playfair md:text-6xl md:max-w-xl">
              Discover the Enchanting Wonders of Nature
            </h1>
            <p className="text-secondary-50 mt-4 mb-10 font-source">
              Embark on a Journey to Explore and Preserve Our Earth's Treasures
            </p>
            <a
              href="#"
              className="border border-secondary-50 py-3 px-6 text-secondary-50 bg-transparent cursor-pointer rounded-md transition-colors hover:bg-primary-600 hover:border-primary-600 hover:text-secondary-50"
            >
              Join the Green Movement
            </a>
          </div>
        </section>
        <section className="w-screen h-screen flex flex-col bg-secondary-200">
          <div className="h-1/2">
            <h2>Hello</h2>
          </div>
          <div className="h-1/2">
            <div className="grid grid-cols-7 w-full h-full">
              <div className="col-span-1 relative">
                <img
                  src={Iceland}
                  alt=""
                  className="w-auto h-full object-cover object-center"
                />
              </div>
              <div className="col-span-1 relative">
                <img
                  src={Iceland}
                  alt=""
                  className="w-auto h-full object-cover object-center"
                />
              </div>
              <div className="col-span-1 relative">
                <img
                  src={Iceland}
                  alt=""
                  className="w-auto h-full object-cover object-center"
                />
              </div>
              <div className="col-span-1 relative">
                <img
                  src={Iceland}
                  alt=""
                  className="w-auto h-full object-cover object-center"
                />
              </div>
              <div className="col-span-1 relative">
                <img
                  src={Iceland}
                  alt=""
                  className="w-auto h-full object-cover object-center"
                />
              </div>
              <div className="col-span-1 relative">
                <img
                  src={Iceland}
                  alt=""
                  className="w-auto h-full object-cover object-center"
                />
              </div>
              <div className="col-span-1 relative">
                <img
                  src={Iceland}
                  alt=""
                  className="w-auto h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
