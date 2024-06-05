"use client";

import React, { useState, useEffect } from "react";

import Banner from "./DogBanner";
import Card from "./Card";

import fetchDogs from "../hooks/dogApiUtils";

export default function DogSection() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    fetchDogs().then((result) => {
      setDogs(result);
    });
  }, []);

  const moreDogs = () => {
    fetchDogs().then((dogs) => {
      setDogs(dogs);
    });
  };

  return (
    <div className="flex flex-col gap-14">
      <Banner></Banner>
      <div className="flex flex-col gap-10">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col itens gap-2">
            <h1 className="font-bold text-4xl md:text-5xl">Adopt</h1>
            <span className="font-extralight text-2xl md:text-3xl">
              Your Favourite one
            </span>
          </div>
          <button
            className="bg-whiteDetail rounded-full w-28 h-16 shadow-md"
            onClick={moreDogs}
          >
            New Dogs
          </button>
        </div>
        <div className="flex flex-row flex-wrap gap-10">
          {dogs.map((dog) => (
            <Card
              key={dog.id}
              name={dog.name}
              sex={dog.sex}
              age={dog.age}
              image={dog.url}
              vaccine={dog.vaccine}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
}
