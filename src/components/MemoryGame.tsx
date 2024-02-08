import { IPokemonAllData } from "../ts/interfaces/global_interface";

interface Props {
  err: Error | null;
  allPokemonImg: IPokemonAllData[];
  onCardClick: (pokemon: IPokemonAllData) => void;
}

export default function MemoryGame({ err, allPokemonImg, onCardClick }: Props) {
  {
    if (err !== null) {
      return <div>{err.message}</div>;
    } else {
      return (
        <div className="container">
          {" "}
          {allPokemonImg.map((pokemon) => {
            return (
              <div
                className="cardHolder"
                key={pokemon.id}
                onClick={(e) => {
                  e.preventDefault();
                  onCardClick(pokemon);
                }}
              >
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  className="pokemonImg"
                />
                <div className="pokemonName">{pokemon.name}</div>
              </div>
            );
          })}
        </div>
      );
    }
  }
}
