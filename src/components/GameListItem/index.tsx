import {
  Text,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import { IGame } from "../../../@types/games";

interface IGameListItem extends IGame {
  position: number;
  action?: ((event: GestureResponderEvent) => void) | undefined;
}

const GameListItem: React.FC<IGameListItem> = ({
  name,
  thumbnail,
  position,
  id,
  action,
}) => {
  return (
    <TouchableOpacity
      onPress={action}
      className={`h-32 flex-row ${
        position % 2 == 0 ? "bg-gray-300" : "bg-gray-200"
      } items-center justify-center my-1`}
    >
      <Image
        className="flex-1 h-full w-32 rounded-sm relative my-1"
        source={{ uri: thumbnail }}
      />
      <Text className="h-min flex-1 my-1 mx-2">{name}</Text>
    </TouchableOpacity>
  );
};

export default GameListItem;
