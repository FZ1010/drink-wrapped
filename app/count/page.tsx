"use client";

import DrinkCard from "@/app/count/DrinkCard";
export default function Home() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 md:py-10 rounded-3xl px-7 bg-foreground bg-opacity-10 backdrop-blur-3xl">
      <DrinkCard image="/photos/drinks/tequila.png" name="Tequila" />
      <DrinkCard image="/photos/drinks/cognac.png" name="Cognac" />
      <DrinkCard image="/photos/drinks/whiskey.png" name="Whiskey" />
      <DrinkCard image="/photos/drinks/vodka.png" name="Vodka" />
      <DrinkCard image="/photos/drinks/gin.png" name="Gin" />
      <DrinkCard image="/photos/drinks/rum.jpg" name="Rum" />
      <DrinkCard
        image="/photos/drinks/sagi.png"
        name="Persian Empire Arak Saggi"
      />
      <DrinkCard image="/photos/drinks/sake.jpg" name="Sake" />
      <DrinkCard isBeer image="/photos/drinks/beer.png" name="Beer" />
      <DrinkCard isWine image="/photos/drinks/wine.png" name="Wine" />
      {/*    Drinks End*/}
    </section>
  );
}
