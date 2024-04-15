"use client";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/characterQuery/characterQuery";
import { Character } from "../interfaces/character-interface/character-interface";
import styles from "./characters.module.css"
import Link from "next/link";

export default function Characters() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  // console.log("query data", data)

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.characterContainer}>
      <h1 className={styles.title}>Rick and Morty Characters</h1>
      <div className={styles.charactersListContainer}>
        <ul className={styles.characterList}>
          {data.characters.results.map((character: Character) => {
            return (
              <li key={character.id} className={styles.characterCard}>
                <Link href={`/characters/${character.id}`}>
                  <img
                    src={character.image}
                    alt={character.name}
                    className={styles.characterImage}
                    style={{ width: "150px", height: "150px" }}
                  />
                  <h2 className={styles.characterName}>{character.name}</h2>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}