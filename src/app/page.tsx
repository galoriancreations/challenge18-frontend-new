import Hero from "./components/hero";
import { DESCRIPTION_TEXT } from "@/constant/homePageText";

const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <Hero />

        {DESCRIPTION_TEXT.map((item, index) => (
          <section key={index} className="mt-10 p-5">
            <h2 className="text-3xl font-bold">{item.title}</h2>
            <p className="mt-4">{item.text}</p>
          </section>
        ))}
      </div>
    </div>
  );
};
export default HomePage;
