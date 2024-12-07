"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

import DrinkCard from "@/app/count/DrinkCard";

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("Service Worker registered:", registration);
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between children animations
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      animate="visible"
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 md:py-10 rounded-3xl px-7 bg-foreground bg-opacity-10 backdrop-blur-3xl"
      initial="hidden"
      variants={containerVariants}
    >
      {[
        { image: "/photos/drinks/tequila.png", name: "Tequila" },
        { image: "/photos/drinks/cognac.png", name: "Cognac" },
        { image: "/photos/drinks/whiskey.png", name: "Whiskey" },
        { image: "/photos/drinks/vodka.png", name: "Vodka" },
        { image: "/photos/drinks/gin.png", name: "Gin" },
        { image: "/photos/drinks/rum.jpg", name: "Rum" },
        {
          image: "/photos/drinks/sagi.png",
          name: "Persian Empire Arak Saggi",
        },
        { image: "/photos/drinks/sake.jpg", name: "Sake" },
        { image: "/photos/drinks/beer.png", name: "Beer", isBeer: true },
        { image: "/photos/drinks/wine.png", name: "Wine", isWine: true },
      ].map((drink, index) => (
        <motion.div key={index} variants={cardVariants}>
          <DrinkCard {...drink} />
        </motion.div>
      ))}
    </motion.section>
  );
}
