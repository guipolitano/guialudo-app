import { View, Text } from "react-native";
import React from "react";

const Container: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  return <View className="h-full px-8 py-4">{children}</View>;
};

export default Container;
