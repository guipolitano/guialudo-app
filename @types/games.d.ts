export interface IGame {
  id: number | string;
  name: string;
  thumbnail?: string;
}

export interface IGameList {
  games: IGame[];
  total: number;
}
