import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";
import Features from "@/sections/Features";
import Integrations from "@/sections/Integrations";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Integrations />
    </>
  );
}
