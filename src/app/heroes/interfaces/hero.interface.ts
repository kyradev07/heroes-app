export type Hero = {
  id: string;
  superhero: string;
  alter_ego: string;
  publisher: Publisher;
  first_appearance: string;
  characters: string;
  alt_img?: string;
}

export enum Publisher {
  DCComics = 'DC Comics',
  MarvelComics = 'Marvel Comics',
}

export type PublisherOptions = {
  id: string;
  publisher: string;
}
