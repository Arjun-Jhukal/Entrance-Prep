"use client";
import { Provider } from "react-redux";
import { store } from "./store";

export default function StoreProvider({ children }: { children: React.ReactElement }) {
  return <Provider store={store}>{children}</Provider>;
}
