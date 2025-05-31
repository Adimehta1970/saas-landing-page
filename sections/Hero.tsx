"use client";
import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursonYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();
  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, []);
  return (
    <section
      className="py-24 overflow-x-clip"
      style={{ cursor: `url(${cursonYouImage.src}), auto` }}
    >
      <div className="container relative">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className="absolute -left-42 top-16 hidden lg:block"
        >
          <Image
            src={designExample1Image}
            alt="Design example 1"
            draggable={false}
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-56 top-96 hidden lg:block"
        >
          <Pointer name="Kashish" />
        </motion.div>
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, y: 100, x: 100 }}
          drag
          className="absolute -right-72 -top-16 hidden lg:block"
        >
          <Image
            src={designExample2Image}
            alt="Design example 2"
            draggable={false}
          />
        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, y: 100, x: 275 }}
          className="absolute right-80 -top-4 hidden lg:block"
        >
          <Pointer name="Devansh" color="red" />
        </motion.div>
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
            className="bg-transparent px-4 flex-1 w-full"
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
