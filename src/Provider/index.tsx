import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";

interface ProviderAppProps {
  children: React.ReactNode;
}

const ProviderApp = ({ children }: ProviderAppProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderApp;
