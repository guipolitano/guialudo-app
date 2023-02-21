import { createContext, useContext, useLayoutEffect, useState } from "react";
import { API_PROVIDER } from "@env";
import { BGAtlasProvider } from "./BGAtlasProvider";
import { View } from "react-native";

interface ApiProviderProps {
  children: React.ReactNode;
}

interface ApiContextProps {
  provider: BGAtlasProvider;
}

export const ApiContext = createContext<ApiContextProps>({} as ApiContextProps);

export default function ApiProvider({ children }: ApiProviderProps) {
  const [provider, setProvider] = useState<BGAtlasProvider>();
  useLayoutEffect(() => {
    if (API_PROVIDER === "boardgameatlas") {
      const actualProvider = new BGAtlasProvider();
      setProvider(actualProvider);
    }
  }, []);
  return provider ? (
    <ApiContext.Provider value={{ provider }}>{children}</ApiContext.Provider>
  ) : (
    <View />
  );
}

export function useApi() {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error(`useGame must be used within a ApiProvider`);
  }
  return context;
}
