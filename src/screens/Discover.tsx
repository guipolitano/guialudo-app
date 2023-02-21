import { TextInput } from "react-native";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useDebounce } from "../hooks/useDebounce";
import Container from "../components/Container";
import GamesList from "../components/GamesList";
import { LudopediaProvider } from "../providers/LudopediaProvider";
import { useGame } from "../providers/ApiProvider";

const Discover = () => {
  const { provider } = useGame();
  const [filter, setFilter] = useState("");
  const debouncedFilter = useDebounce(filter, 500);

  const { data, isLoading } = useQuery(
    ["discoverGamesList", debouncedFilter],
    () => provider.getGames(debouncedFilter)
  );

  return (
    <Container>
      <TextInput
        className="bg-gray-300 rounded-sm p-2 mb-3"
        placeholder="Buscar"
        onChangeText={(e) => setFilter(e)}
      />
      {
        <GamesList
          data={data || { games: [], total: 0 }}
          isLoading={isLoading}
        />
      }
    </Container>
  );
};

export default Discover;
