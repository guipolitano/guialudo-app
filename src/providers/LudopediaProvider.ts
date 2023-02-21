import { ACCESS_TOKEN, API_URL } from "@env";

export class LudopediaProvider {
  async getGames(search?: string) {
    const queryParams = new URLSearchParams();
    if (search) {
      queryParams.set("search", search);
    }

    const response = await fetch(`${API_URL}/jogos?${queryParams.toString()}`, {
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
    });

    return response.json();
  }

  async getGame(id: number) {
    const response = await fetch(`${API_URL}/jogos/${id}/arquivos`, {
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
    });

    return response.json();
  }
}
