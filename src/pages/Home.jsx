import Section from "../components/Section";
import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";
import HeroImage from "../assets/images/hero.webp";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="w-screen h-screen overflow-hidden relative">
        <img
          src={HeroImage}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 max-w-xl z-10 px-8">
          <h1 className="text-4xl font-bold text-white">
            Discover the Enchanting Wonders of Nature
          </h1>
          <p className="text-gray-200 mt-2">
            Embark on a Journey to Explore and Preserve Our Earth's Treasures
          </p>
          <button className="border py-3 px-6 mt-8 text-white bg-transparent cursor-pointer">
            Join the Green Movement
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
