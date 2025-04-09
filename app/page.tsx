"use client";

import type { Metadata } from "next";
import BetterCounter from "./components/better-counter/BetterCounter";
import BetterCounterProvider from "./provider/BetterCounterProvider";
// import { Counter } from "./components/counter/Counter";

export default function IndexPage() {
  // return <Counter />;
  return (
    <BetterCounterProvider>
      <BetterCounter />
    </BetterCounterProvider>
  );
}
