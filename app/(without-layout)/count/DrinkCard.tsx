import React from "react";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import {FaGlassWhiskey, FaWineBottle, FaWineGlassAlt} from "react-icons/fa";
import { Tooltip } from "@nextui-org/tooltip";
import {GiSodaCan} from "react-icons/gi";
import {GoContainer} from "react-icons/go";
import {LuContainer} from "react-icons/lu";

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
    const rednerButtons = () => {
        if (isBeer) {
            return (
                <>
                    <Tooltip showArrow content="Add a Can" placement="top">
                        <Button
                            isIconOnly
                            className="text-tiny text-white bg-black/20"
                            color="default"
                            radius="lg"
                            size="lg"
                            variant="flat"
                        >
                            <GiSodaCan size={22}/>
                        </Button>
                    </Tooltip>
                    <Tooltip showArrow content="Add a 6 Pack" placement="top">
                        <Button
                            className="text-tiny text-white bg-black/20"
                            color="default"
                            radius="lg"
                            size="lg"
                            variant="flat"
                        >
                            <LuContainer   size={28} />
                        </Button>
                    </Tooltip>
                </>
            );
        } else if (isWine) {
                return (
                    <>
                        <Tooltip showArrow content="Add a Glass" placement="top">
                            <Button
                                isIconOnly
                                className="text-tiny text-white bg-black/20"
                                color="default"
                                radius="lg"
                                size="lg"
                                variant="flat"
                            >
                                <FaWineGlassAlt  size={25} />
                            </Button>
                        </Tooltip>
                        <Tooltip showArrow content="Add a Bottle" placement="top">
                            <Button
                                className="text-tiny text-white bg-black/20"
                                color="default"
                                radius="lg"
                                size="lg"
                                variant="flat"
                            >
                                <FaWineBottle size={25} />
                            </Button>
                        </Tooltip>
                    </>
                );
            }
        else {
            return (
                <>
                    <Tooltip showArrow content="Add a Shot" placement="top">
                        <Button
                            isIconOnly
                            className="text-tiny text-white bg-black/20"
                            color="default"
                            radius="lg"
                            size="lg"
                            variant="flat"
                        >
                            <FaGlassWhiskey size={17} />
                        </Button>
                    </Tooltip>
                    <Tooltip
                        showArrow
                        color={"danger"}
                        content="Add a Bottle"
                        placement="top"
                    >
                        <Button
                            className="text-tiny text-white bg-black/20"
                            color="default"
                            radius="lg"
                            size="lg"
                            variant="flat"
                        >
                            <FaWineBottle size={25} />
                        </Button>
                    </Tooltip>
                </>
            );
        }
    }

  return (
    <Card isFooterBlurred className="border-none" radius="lg">
      <CardHeader className="absolute z-20 top-1 flex-col items-start">
        <h4 className="text-3xl text-white/70 uppercase mx-auto font-bold">
          {name.toUpperCase()}
        </h4>
      </CardHeader>
      <Image
        alt={name}
        className="object-cover"
        height={500}
        src={image}
        width={500}
      />
      <CardFooter className="border-white/20 border-1 py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <div className={"flex w-full justify-between"}>
            {rednerButtons()}
        </div>
      </CardFooter>
    </Card>
  );
};

export default DrinkCard;
