import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const potraits = [
    {
      picture: "Urban Monkey",
      price: "₹1200",
      hastags: "#urbanMonkey #potrait",
    },
    {
      picture: "Urban ",
      price: "₹1500",
      hastags: "#urbanMonkey #potrait",
    },
    {
      picture: "Urban style",
      price: "₹1000",
      hastags: "#urbanMonkey #potrait",
    },
    {
      picture: "Urban gabru",
      price: "₹1600",
      hastags: "#urbanMonkey #potrait",
    },
  ];
  return (
    <>
      <h1 className="bg-yellow-400 text-black rounded-xl p-5 mb-10">
        Cards Data Using Props.
      </h1>
      <Card potraits={potraits} />
    </>
  );
}

export default App;
