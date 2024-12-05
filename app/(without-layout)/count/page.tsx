"use client";
import DrinkCard from "@/app/(without-layout)/count/DrinkCard";
import {GoogleLogin} from "@react-oauth/google";
export default function Home() {
  return (
    <section className="grid grid-cols-4 items-center justify-center gap-4 py-8 md:py-10">
        <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            auto_select
            useOneTap
        />
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
    </section>
  );
}
