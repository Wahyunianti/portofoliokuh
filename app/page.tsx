import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import MyExperiance from "@/components/MyExperiance";
import Testemonials from "@/components/Testemonials";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Navbar />
        {/* $ */}
        <Hero />
        {/* $ */}
        <About />
        {/* $ */}
        <MyExperiance />
        {/* $ */}
      </div>
      <Testemonials />
      <div className="max-w-7xl w-full">
        <Footer />
      </div>
    </main>
  );
}
