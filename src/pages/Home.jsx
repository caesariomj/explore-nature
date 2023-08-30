import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";
import HeroImage from "../assets/images/hero.webp";

import Iceland from "../assets/images/iceland-northern-lights.webp";
import Indonesia from "../assets/images/indonesia-komodo-island.webp";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="">
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
        <section className="w-screen h-screen relative bg-secondary-200 px-8">
          <div className="pt-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-800 sm:text-6xl">
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesn't care if you live or die.
            </p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-20">
            <div class="grid gap-4">
              <div>
                <img
                  class="h-auto max-w-full object-cover object-center rounded-lg"
                  src={Iceland}
                  alt=""
                />
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg" src="" alt="" />
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg" src="" alt="" />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <img
                  class="h-auto max-w-full object-cover object-center rounded-lg"
                  src={Indonesia}
                  alt=""
                />
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg" src="" alt="" />
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg" src="" alt="" />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <img class="h-auto max-w-full rounded-lg" src="" alt="" />
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg" src="" alt="" />
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg" src="" alt="" />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <img class="h-auto max-w-full rounded-lg" src="" alt="" />
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg" src="" alt="" />
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg" src="" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
