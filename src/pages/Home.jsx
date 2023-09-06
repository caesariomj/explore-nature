import { useState } from "react";

import Counter from "../components/Counter";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../assets/images/hero.webp";

import NorthernLights from "../assets/images/iceland-northern-lights.webp";
import KomodoIsland from "../assets/images/indonesia-komodo-island.webp";
import Everest from "../assets/images/everest.webp";
import Amazon from "../assets/images/south-america-amazon-river.webp";
import HaLongBay from "../assets/images/vietnam-ha-long-bay.webp";
import VictoriaFalls from "../assets/images/zimbabwe-victoria-falls.webp";
import ArticleFirst from "../assets/images/article-1.webp";
import ArticleSecond from "../assets/images/article-2.webp";
import ArticleThird from "../assets/images/article-3.webp";

import WorldMap from "../assets/images/worldmap.png";
import CTA from "../assets/images/cta.jpg";

const Home = () => {
  const [isSlided, setIsSlided] = useState(false);

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
            <p className="text-secondary-50/80 mt-4 mb-10 font-source">
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
        <section className="bg-secondary-200 px-8">
          <div className="w-full max-w-xl md:max-w-4xl flex flex-col text-center pt-16 mx-auto">
            <h2 className="text-5xl md:text-6xl text-primary-800 font-playfair">
              Safeguarding Earth's Breathtaking Beauty: Our Shared Duty
            </h2>
            <p className="md:text-xl font-source font-medium text-primary-800/80 mt-8">
              Cherishing and Preserving Nature's Gifts for the Well-being of Our
              Planet and Future Generations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-12 md:py-24">
            <div className="grid gap-4 content-between">
              <a href="#" className="relative rounded-lg overflow-hidden group">
                <img
                  className="h-auto md:h-[32.6125rem] w-full object-cover object-center transition-transform ease-in-out duration-300 group-hover:scale-110"
                  src={NorthernLights}
                  alt=""
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                <div className="absolute bottom-0 flex items-center justify-start p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-secondary-100"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <div className="flex flex-col ml-2 font-semibold">
                    <p className="text-secondary-100 text-sm">Place Name</p>
                    <p className="text-secondary-100/75 text-xs">Country</p>
                  </div>
                </div>
              </a>
              <a href="#" className="relative rounded-lg overflow-hidden group">
                <img
                  className="h-auto max-w-full object-cover object-center transition-transform ease-in-out duration-300 group-hover:scale-110"
                  src={KomodoIsland}
                  alt=""
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                <div className="absolute bottom-0 flex items-center justify-start p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-secondary-100"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <div className="flex flex-col ml-2 font-semibold">
                    <p className="text-secondary-100 text-sm">Place Name</p>
                    <p className="text-secondary-100/75 text-xs">Country</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="grid gap-4 content-between">
              <a href="#" className="relative rounded-lg overflow-hidden group">
                <img
                  className="h-auto max-w-full object-cover object-center transition-transform ease-in-out duration-300 group-hover:scale-110"
                  src={Amazon}
                  alt=""
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                <div className="absolute bottom-0 flex items-center justify-start p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-secondary-100"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <div className="flex flex-col ml-2 font-semibold">
                    <p className="text-secondary-100 text-sm">Place Name</p>
                    <p className="text-secondary-100/75 text-xs">Country</p>
                  </div>
                </div>
              </a>
              <a href="#" className="relative rounded-lg overflow-hidden group">
                <img
                  className="h-auto md:h-[32.6125rem] max-w-full object-cover object-center transition-transform ease-in-out duration-300 group-hover:scale-110"
                  src={Everest}
                  alt=""
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                <div className="absolute bottom-0 flex items-center justify-start p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-secondary-100"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <div className="flex flex-col ml-2 font-semibold">
                    <p className="text-secondary-100 text-sm">Place Name</p>
                    <p className="text-secondary-100/75 text-xs">Country</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="grid gap-4 content-between">
              <a href="#" className="relative rounded-lg overflow-hidden group">
                <img
                  className="h-auto md:h-[32.6125rem] max-w-full object-cover object-center transition-transform ease-in-out duration-300 group-hover:scale-110"
                  src={HaLongBay}
                  alt=""
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                <div className="absolute bottom-0 flex items-center justify-start p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-secondary-100"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <div className="flex flex-col ml-2 font-semibold">
                    <p className="text-secondary-100 text-sm">Place Name</p>
                    <p className="text-secondary-100/75 text-xs">Country</p>
                  </div>
                </div>
              </a>
              <a href="#" className="relative rounded-lg overflow-hidden group">
                <img
                  className="h-auto max-w-full object-cover object-center transition-transform ease-in-out duration-300 group-hover:scale-110"
                  src={VictoriaFalls}
                  alt=""
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                <div className="absolute bottom-0 flex items-center justify-start p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-secondary-100"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <div className="flex flex-col ml-2 font-semibold">
                    <p className="text-secondary-100 text-sm">Place Name</p>
                    <p className="text-secondary-100/75 text-xs">Country</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="bg-primary-900 relative overflow-hidden md:w-screen md:h-screen">
          <div
            className={`${
              isSlided ? "-translate-x-[30rem]" : ""
            } transition-transform ease-in-out duration-300 flex flex-col py-16 px-8 w-full h-full md:p-0 md:flex-row`}
          >
            <div className="flex flex-col flex-none justify-center text-center md:text-left md:pl-8 md:max-w-md">
              <h2 className="text-5xl font-playfair text-secondary-100 md:text-6xl">
                Exploring Ecosystems and Environmental Dynamics
              </h2>
              <p className="text-sm font-medium text-secondary-200/90 md:text-base mt-8">
                Embark on a journey of discovery as we unravel the intricacies
                of Earth's biodiversity, from the smallest organisms to the
                grandest species. Delve into the harmonious interplay between
                nature's components, understanding how ecosystems function as
                unified entities. Stay informed about the latest environmental
                challenges, and explore the ongoing efforts to preserve and
                sustain our planet's invaluable resources.
              </p>
            </div>
            <div className="flex flex-col flex-1 flex-nowrap py-12 gap-8 md:gap-0 md:p-0 md:ml-8 md:flex-row">
              <a
                href="#"
                className="relative group h-full w-full rounded-lg overflow-hidden md:w-[29rem] md:rounded-none md:overflow-visible"
              >
                <article className="top-0 right-0 w-full h-[40rem] transition-all ease-in-out duration-300 md:absolute md:group-hover:h-full">
                  <img
                    src={ArticleFirst}
                    className="h-full w-full object-cover object-center"
                    alt=""
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 transition-opacity ease-in-out duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 p-4 text-left md:sticky">
                    <h3 className="text-2xl text-secondary-100 font-playfair">
                      Take Action to Save Endangered Wildlife!
                    </h3>
                    <p className="text-sm font-medium transition-colors ease-in-out duration-300 mt-3 text-secondary-100/90 md:text-secondary-100/0 md:group-hover:text-secondary-100/90">
                      Empowering Conservation: Every Small Effort Counts in
                      Preserving Our Precious Fauna
                    </p>
                  </div>
                </article>
              </a>
              <a
                href="#"
                className="relative group h-full w-full rounded-lg overflow-hidden md:w-[29rem] md:rounded-none md:overflow-visible"
              >
                <article className="top-0 right-0 w-full h-[40rem] transition-all ease-in-out duration-300 md:absolute md:group-hover:h-full">
                  <img
                    src={ArticleSecond}
                    className="h-full w-full object-cover object-center"
                    alt=""
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 transition-opacity ease-in-out duration-300 group-hover:opacity-100" />
                  <div className="sticky bottom-0 p-4 text-left">
                    <h3 className="text-2xl text-secondary-100 font-playfair">
                      Transform the Earth, One Seed at a Time!
                    </h3>
                    <p className="text-sm font-medium transition-colors ease-in-out duration-300 mt-3 text-secondary-100/90 md:text-secondary-100/0 md:group-hover:text-secondary-100/90">
                      Unleash the potential of a greener world – let your hands
                      plant the seeds of transformation.
                    </p>
                  </div>
                </article>
              </a>
              <a
                href="#"
                className="relative group h-full w-full rounded-lg overflow-hidden md:w-[29rem] md:rounded-none md:overflow-visible"
              >
                <article className="top-0 right-0 w-full h-[40rem] transition-all ease-in-out duration-300 md:absolute md:group-hover:h-full">
                  <img
                    src={ArticleThird}
                    className="h-full w-full object-cover object-center"
                    alt=""
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 transition-opacity ease-in-out duration-300 group-hover:opacity-100" />
                  <div className="sticky bottom-0 p-4 text-left">
                    <h3 className="text-2xl text-secondary-100 font-playfair">
                      Embracing Nature's Beauty: A Journey into Environmental
                      Conservation
                    </h3>
                    <p className="text-sm font-medium transition-colors ease-in-out duration-300 mt-3 text-secondary-100/90 md:text-secondary-100/0 md:group-hover:text-secondary-100/90">
                      Discover the Power of Preservation and Sustainability in
                      Protecting Our Planet
                    </p>
                  </div>
                </article>
              </a>
            </div>
          </div>
          <button
            className="hidden absolute top-1/2 right-10 -translate-y-1/2 md:block"
            onClick={() => setIsSlided(!isSlided)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${
                isSlided ? "rotate-180" : ""
              } w-12 h-12 bg-secondary-100 text-primary-600 rounded-full rotate-0 p-2 opacity-50 transition-all ease-in-out duration-300 hover:opacity-100`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </section>
        <section className="w-full h-full bg-secondary-200 relative">
          <div className="absolute flex justify-center items-center top-1/2 -translate-y-1/2 w-full text-center z-10 px-8">
            <div className="w-1/3 py-2 px-2 md:py-6 md:px-12">
              <h3 className="text-5xl md:text-8xl font-black tracking-tight text-primary-800 drop-shadow-xl">
                <Counter endNumber={16300} duration={0.01} />+
              </h3>
              <p className="font-source text-base md:text-lg font-medium text-primary-800/90 drop-shadow-xl mt-4">
                Number of Endangered Species
              </p>
            </div>
            <span className="w-[2px] h-32 bg-primary-800 md:h-64"></span>
            <div className="w-1/3 py-2 px-2 md:py-6 md:px-12">
              <h3 className="text-5xl md:text-8xl font-black tracking-tight text-primary-800 drop-shadow-xl">
                <Counter endNumber={4.1} duration={300} /> M Hectares
              </h3>
              <p className="font-source text-base md:text-lg font-medium text-primary-800/90 drop-shadow-xl mt-4">
                Tropical Primary Forest Lost
              </p>
            </div>
            <span className="w-[2px] h-32 bg-primary-800 md:h-64"></span>
            <div className="w-1/3 py-2 px-2 md:py-6 md:px-12">
              <h3 className="text-5xl md:text-8xl font-black tracking-tight text-primary-800 drop-shadow-xl">
                <Counter endNumber={17} duration={50} />%
              </h3>
              <p className="font-source text-base md:text-lg font-medium text-primary-800/90 drop-shadow-xl mt-4">
                Conservation Area Size
              </p>
            </div>
          </div>
          <img
            src={WorldMap}
            alt="World Map Image"
            width={1920}
            height={1080}
            className="object-cover object-center scale-90 blur-sm"
          />
        </section>
        <section className="w-full h-full relative bg-primary-900 px-8 md:w-screen md:h-screen">
          <div className="w-full h-full gap-8 items-center py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16">
            <img
              src={CTA}
              alt=""
              className="w-full object-cover object-center rounded-md"
            />
            <div className="mt-4 md:mt-0">
              <h2 className="text-6xl font-playfair text-secondary-200 mb-4">
                Preserve Our Planet's Future
              </h2>
              <p className="font-source text-secondary-200/70 mb-6 md:text-lg">
                Join hands with us in the global effort to protect and nurture
                our planet. Your actions today can secure a sustainable tomorrow
                for generations to come. Let's take the first step towards a
                greener, cleaner world. Together, we can make a difference.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-primary-900 bg-secondary-200 hover:bg-secondary-100 focus:ring-4 font-source rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
              >
                Take Action Now
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
