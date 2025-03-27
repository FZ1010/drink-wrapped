"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Alert } from "@heroui/alert";

import DrinkCard from "@/app/count/DrinkCard";
import { userName } from "@/utils/helper";
import Type from "@/components/animations/Type";

export default function Home() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserName = async () => {
      const fetchedName = await userName();

      setName(fetchedName);
    };

    fetchUserName();
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
    hidden: { opacity: 0, y: 50 }, // Start position (invisible, below)
    visible: { opacity: 1, y: 0 }, // End position (visible, in place)
  };

  return (
    <>
      <motion.section
        animate="visible"
        className={"grid gap-8"}
        initial="hidden"
        variants={containerVariants}
      >
        <motion.div className={"backdrop-blur-3xl rounded-xl "}>
          {name && (
            <Alert
              hideIcon
              description={
                <Type
                  speed={35}
                  text="How loooovely to see you here, you right old pisshead... back at it again, neckin’ the booze like a proper bloody knobhead, aren’t you?"
                />
              }
              radius={"lg"}
              title={`${name}, you dirty drunkard!`}
              variant="bordered"
            />
          )}
        </motion.div>
        <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 md:py-10 rounded-3xl px-7 bg-foreground bg-opacity-10 backdrop-blur-3xl">
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
        </motion.div>
      </motion.section>
    </>
  );
}
