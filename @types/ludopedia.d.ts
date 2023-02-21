export interface Mecanica {
  id_mecanica: number;
  nm_mecanica: string;
}

export interface Categoria {
  id_categoria: number;
  nm_categoria: string;
}

export interface Tema {
  id_tema: number;
  nm_tema: string;
}

export interface Artista {
  id_profissional: number;
  nm_profissional: string;
}

export interface Designer {
  id_profissional: number;
  nm_profissional: string;
}

export interface ILudopediaGame {
  id_jogo: number;
  nm_jogo: string;
  thumb: string;
  tp_jogo: string;
  link: string;
  ano_publicacao: number;
  ano_nacional: number;
  qt_jogadores_min: number;
  qt_jogadores_max: number;
  vl_tempo_jogo: number;
  idade_minima: number;
  qt_tem: number;
  qt_teve: number;
  qt_favorito: number;
  qt_quer: number;
  qt_jogou: number;
  mecanicas: Mecanica[];
  categorias: Categoria[];
  temas: Tema[];
  artistas: Artista[];
  designers: Designer[];
}
