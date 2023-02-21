export interface IGameProvider<T> {
  getGames(search?: string): Promise<IGameList>;
  getGame(id: T["id"]): Promise<IGame>;
  convertGameFromApi(game: T): IGame;
}
