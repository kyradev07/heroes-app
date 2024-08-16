export interface Hero {
  id: string;
  superhero: string;
  alter_ego: string;
  publisher: Publisher;
  first_appearance: string;
  characters: string;
}

export enum Publisher {
  DCComics = "DC Comics",
  MarvelComics = "Marvel Comics",
}
