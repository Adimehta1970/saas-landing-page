import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container relative sm:max-w-2xl md:max-w-6xl lg:max-w-full">
        <div className="absolute -left-42 top-16 hidden lg:block">
          <Image src={designExample1Image} alt="Design example 1" />
        </div>
        <div className="absolute -right-72 -top-16 hidden lg:block">
          <Image src={designExample2Image} alt="Design example 2" />
        </div>
        <div className="absolute left-56 top-96 hidden lg:block">
          <Pointer name="Kashish" />
        </div>
        <div className="absolute right-80 -top-4 hidden lg:block">
          <Pointer name="Devansh" color="red" />
        </div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M seed round raised
          </div>
        </div>
        <div className="md:max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 ">
            Impactful design, created effortlessly
          </h1>
        </div>
        <p className="text-center text-xl text-white/50 mt-8 max-w-xl mx-auto">
          Layers is a simple tool that allows you to create beautiful,
          responsive websites quickly and easily.
        </p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8 mx-auto max-w-xl">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 min-w-0 flex-1"
          />
          <Button
            variant="primary"
            type="submit"
            className="whitespace-nowrap"
            size="sm"
          >
            Sign up
          </Button>
        </form>
      </div>
    </section>
  );
}
