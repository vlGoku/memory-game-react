export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonAllData {
  name: string;
  id: number;
  url: string;
  image: string;
  sprites: {
    front_default: string;
  };
}
