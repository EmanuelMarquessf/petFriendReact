"use client";

import React, { useState, useEffect } from "react";

import Banner from "../components/Banner";
import Card from "../components/Card";

import fetchCats from "../hooks/apiUtils";

export default function CatSection() {

  const [cats, setCats] = useState([]);
  useEffect(() => {
    fetchCats().then((result) => {
      setCats(result);
    });
  }, []);

  const moreCats = () => {
    fetchCats().then((cats) => {
      setCats(cats);
    });
  };

  return (
    <div className="flex flex-col gap-14">
      <Banner></Banner>
      <div className="flex flex-col gap-10">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col itens gap-2">
            <h1 className="font-bold text-5xl">Adopt</h1>
            <span className="font-extralight text-3xl">Your Favourite one</span>
          </div>
          <button className="bg-whiteDetail rounded-full w-28 h-16" onClick={moreCats} >New Cats</button>
        </div>
        <div className="flex flex-row flex-wrap gap-10">
          {cats.map((cat) => (
            <Card key={cat.id} name={cat.name} sex={cat.sex} age={cat.age} image={cat.url} vaccine={cat.vaccine}></Card>
          ))}

        </div>
      </div>

    </div>
  )
}