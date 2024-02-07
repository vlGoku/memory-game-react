import { IPokemon, IPokemonAllData } from "../ts/interfaces/global_interface";

interface Props {
  allPokemon: IPokemon[];
  err: Error | null;
  allPokemonImg: IPokemonAllData[];
}

export default function MemoryGame({ allPokemon, err, allPokemonImg }: Props) {
  {
    if (err !== null) {
      return <div>{err.message}</div>;
    } else {
      return (
        <div className="container">
          {" "}
          {allPokemon.map((pokemon: IPokemon): JSX.Element => {
            return (
              <div className="container" key={pokemon.url}>
                <div className="pokemonCard">{pokemon.name}</div>
              </div>
            );
          })}
        </div>
      );
    }
  }
}
