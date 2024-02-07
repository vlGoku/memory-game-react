import { useEffect, useState } from "react";
import { IPokemon, IPokemonAllData } from "../ts/interfaces/global_interface";
import MemoryGame from "./MemoryGame";

interface Props {
  allPokemon: IPokemon[];
  allPokemonImg: IPokemonAllData[];
}

export default function MemoryGameContainer() {
  const [allPokemon, setAllPokemon] = useState<IPokemon[]>([]);
  const [allPokemonImg, setAllPokemonIMG] = useState<string[]>([]);
  const [err, setErr] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12`);
        const pokemon = await data.json();
        setAllPokemon(pokemon.results);
      } catch (error) {
        setErr(error as Error);
      }
    })();
  }, []);

  useEffect(() => {
    if (allPokemon.length > 0) {
      const myImgData = allPokemon.forEach(async (pokemon: IPokemon) => {
        const res = await fetch(`${pokemon.url}`);
        const poke = await res.json();
        //setAllPokemonIMG((prev) => [...prev, poke.sprites.front_default]);
        setAllPokemonIMG(poke.results);
      });
    }
  }, [allPokemon]);

  return (
    <MemoryGame
      allPokemon={allPokemon}
      err={err}
      allPokemonImg={allPokemonImg}
    />
  );
}
