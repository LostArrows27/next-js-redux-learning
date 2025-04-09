import { ReactNode } from "react";
import { Provider } from "react-redux";
import { counterStore } from "../stores/store/counter_store";

const BetterCounterProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={counterStore}>{children}</Provider>;
};

export default BetterCounterProvider;
