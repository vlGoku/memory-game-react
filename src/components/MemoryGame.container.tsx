import { useEffect, useState } from "react";
import { IPokemon, IPokemonAllData } from "../ts/interfaces/global_interface";
import MemoryGame from "./MemoryGame";

interface Props {
  onCounterUpdate: (newCount: number) => void;
}

export default function MemoryGameContainer({ onCounterUpdate }: Props) {
  const [allPokemon, setAllPokemon] = useState<IPokemon[]>([]);
  const [allPokemonImg, setAllPokemonIMG] = useState<IPokemonAllData[]>([]);
  const [err, setErr] = useState<Error | null>(null);
  const [selectedCards, setSelectedCards] = useState<IPokemonAllData[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const [bestScore, setBestScore] = useState(0);

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
      allPokemon.forEach(async (pokemon: IPokemon) => {
        const res = await fetch(`${pokemon.url}`);
        const poke = await res.json();
        setAllPokemonIMG((prev) => [...prev, poke]);
      });
    }
  }, [allPokemon]);

  const shuffleCards = (pokemon: IPokemonAllData) => {
    if (selectedCards.includes(pokemon)) {
      alert("Spiel vorbei!");
      setSelectedCards([]);
      setClickCount(0);
      if (clickCount > bestScore) {
        setBestScore(clickCount);
      }
    } else if (clickCount <= 12) {
      setSelectedCards((prev) => [...prev, pokemon]);
      setAllPokemonIMG((prev) => [...prev.sort(() => Math.random() - 0.5)]);
      setClickCount((count) => count + 1);
    } else {
      alert("Du hast gewonnen!");
      setClickCount(0);
      setBestScore(clickCount);
    }
    onCounterUpdate(clickCount);
  };
  return (
    <>
      <p className="scoreboard">
        Score: {clickCount} Best Score: {bestScore}
      </p>
      <MemoryGame
        err={err}
        allPokemonImg={allPokemonImg}
        onCardClick={shuffleCards}
      />
    </>
  );
}
