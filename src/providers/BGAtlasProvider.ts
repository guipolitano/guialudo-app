import { API_ID, API_URL } from "@env";
import {
  IBoardGameAtlasGames,
  IBoardgameAtlasGame,
} from "../../@types/boardgameatlas";
import { IGame, IGameList } from "../../@types/games";
import { IGameProvider } from "../../@types/providers";

export class BGAtlasProvider implements IGameProvider<IBoardgameAtlasGame> {
  async getGames(search?: string): Promise<IGameList> {
    console.log("entrou");
    const queryParams = new URLSearchParams();
    queryParams.set("client_id", API_ID);

    if (search) {
      queryParams.set("name", search);
    }

    const response = await fetch(
      `${API_URL}/search?${queryParams.toString()}`,
      {}
    );
    const data: IBoardGameAtlasGames = await response.json();

    return {
      games: data.games.map(this.convertGameFromApi),
      total: data.count,
    };
  }

  async getGame(id: number | string): Promise<IGame> {
    const queryParams = new URLSearchParams();
    queryParams.set("client_id", API_ID);
    queryParams.set("ids", String(id));

    const response = await fetch(`${API_URL}/search?${queryParams.toString()}`);

    return response.json();
  }

  convertGameFromApi(game: IBoardgameAtlasGame): IGame {
    return {
      id: game.id,
      name: game.name,
      thumbnail: game.thumb_url,
    };
  }
}
