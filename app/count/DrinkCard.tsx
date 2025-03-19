import React, { useState } from "react";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { FaCheck, FaGlassWhiskey, FaWineGlassAlt } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { Tooltip } from "@nextui-org/tooltip";
import { GiSodaCan } from "react-icons/gi";
import { LuContainer } from "react-icons/lu";
import { FaWineBottle } from "react-icons/fa6";
import { Button } from "@nextui-org/button";
import { signIn } from "next-auth/react";
import NextImage from "next/image";

interface DrinkCardProps {
  name: string;
  image: string;
  isBeer?: boolean;
  isWine?: boolean;
}

const DrinkCard = ({
  name,
  image,
  isBeer = false,
  isWine = false,
}: DrinkCardProps) => {
  const [loadingStates, setLoadingStates] = useState<{
    [key: string]: boolean;
  }>({});
  const [successStates, setSuccessStates] = useState<{
    [key: string]: boolean;
  }>({});

  const addRecord = async (type: string) => {
    setLoadingStates((prev) => ({ ...prev, [type]: true }));
    try {
      const response = await fetch("/api/drinks", {
        method: "POST",
        body: JSON.stringify({ drinkName: name, type }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.error("Error adding record:", await response.text());
        // if the user is not authenticated, redirect to the login page
        if (response.status === 401) {
          await signIn("google");
        }
      } else {
        console.log("Record added successfully");
        setSuccessStates((prev) => ({ ...prev, [type]: true }));
        setTimeout(() => {
          setSuccessStates((prev) => ({ ...prev, [type]: false }));
        }, 700); // Show success icon for 300ms
      }
    } catch (error) {
      console.error("Network error:", error);
    }
    setLoadingStates((prev) => ({ ...prev, [type]: false }));
  };

  const renderIcon = (type: string, icon: React.ReactNode) => (
    <AnimatePresence mode={"popLayout"}>
      <motion.div
        key={successStates[type] ? "success" : "default"}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {successStates[type] ? <FaCheck size={25} /> : icon}
      </motion.div>
    </AnimatePresence>
  );
  const renderButtons = () => {
    const buttonConfigs = {
      beer: [
        { type: "can", tooltip: "Add a Can", icon: <GiSodaCan size={25} /> },
        {
          type: "6-pack",
          tooltip: "Add a 6-Pack",
          icon: <LuContainer size={30} />,
        },
      ],
      wine: [
        {
          type: "glass",
          tooltip: "Add a Glass",
          icon: <FaWineGlassAlt size={25} />,
        },
        {
          type: "bottle",
          tooltip: "Add a Bottle",
          icon: <FaWineBottle size={25} />,
        },
      ],
      default: [
        {
          type: "shot",
          tooltip: "Add a Shot",
          icon: <FaGlassWhiskey size={19} />,
        },
        {
          type: "bottle",
          tooltip: "Add a Bottle",
          icon: <FaWineBottle size={25} />,
          color: "danger",
        },
      ],
    };

    const buttons = isBeer
      ? buttonConfigs.beer
      : isWine
        ? buttonConfigs.wine
        : buttonConfigs.default;

    return buttons.map(({ type, tooltip, icon }) => (
      <Tooltip key={type} showArrow content={tooltip} placement="top">
        <Button
          isIconOnly
          className="text-tiny text-white bg-black/20"
          isLoading={loadingStates[type] || false}
          radius="lg"
          size="lg"
          variant="flat"
          onPress={() => addRecord(type)}
        >
          {renderIcon(type, icon)}
        </Button>
      </Tooltip>
    ));
  };

  return (
    <Card
      isFooterBlurred
      className="w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96"
    >
      <CardHeader className="absolute z-20 top-1 flex-col items-start">
        <h4 className="text-3xl text-white/70 uppercase mx-auto font-bold">
          {name.toUpperCase()}
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt={name}
        as={NextImage}
        className="z-0 w-full h-full  -translate-y-6 object-cover hover:scale-110 transition-transform duration-300"
        height={400}
        quality={50}
        src={image}
        style={{
          width: "100%",
          height: "100%",
        }}
        width={400}
      />
      <CardFooter className="border-white/20 border-1 py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <div className={"flex w-full justify-between"}>{renderButtons()}</div>
      </CardFooter>
    </Card>
  );
};

export default DrinkCard;
