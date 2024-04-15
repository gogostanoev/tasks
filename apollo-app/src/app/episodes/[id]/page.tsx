"use client"
import { GET_EPISODE } from "../../graphql/episodeQuery/episodeQuery";
import { Character } from "../../interfaces/character-interface/character-interface";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation"
import styles from "./episodePage.module.css"

export default function EpisodePage() {
    const params = useParams<{ id: string }>()
    const episodeId = params.id

    const { loading, error, data } = useQuery(GET_EPISODE, {
        variables: { episodeId }
    });

    console.log('Episode ID:', episodeId);
    console.log('Query Data:', data);

    if (loading) return <p className="loading">Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    const episode = data.episode

    return (
        <div className={styles.episodeContainer}>
            <h1 className={styles.episodeTitle}>Episode Name: {episode.name}</h1>
            <p className={styles.episodeDetails}>Air date: {episode.air_date}</p>
            <p className={styles.episodeDetails}>Episode: {episode.episode}</p>

            <h2 className={styles.characterTitle}>Characters in Episode</h2>
            <div className={styles.charactersInfo}>
                {episode.characters.map((character: Character) => (
                    <div key={character.id}>
                        <img src={character.image} alt={character.name} width="100" className={styles.characterCard} />
                        <p>Name: {character.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}