import { View, Text, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { IGameList } from "../../../@types/games";
import GameListItem from "../GameListItem";
import { FlatList } from "react-native";
import { useQuery } from "react-query";
import { useApi } from "../../providers/ApiProvider";

interface IGamesList {
  data: IGameList;
  isLoading: boolean;
}
const GamesList: React.FC<IGamesList> = ({ data, isLoading }) => {
  const { provider } = useApi();
  const [gameId, setGameId] = useState<number | string>();

  const { data: game } = useQuery(["getGame", gameId], () =>
    provider.getGame(gameId || 0)
  );

  return isLoading ? (
    <View className="flex-row gap-2">
      <ActivityIndicator />
      <Text>Carregando...</Text>
    </View>
  ) : (
    <FlatList
      className="flex-1"
      data={data?.games}
      renderItem={(game) => (
        <GameListItem
          key={game?.item?.id}
          id={game?.item?.id}
          name={game?.item?.name}
          thumbnail={game?.item?.thumbnail}
          position={game?.index}
          action={() => setGameId(game?.item?.id)}
        />
      )}
    />
  );
};

export default GamesList;
