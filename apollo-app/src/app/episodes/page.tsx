"use client"
import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../graphql/episodeQuery/episodeQuery";
import { Episode } from "../interfaces/episode-interface/episode-interface";
import Link from "next/link";
import styles from "./episodes.module.css"

export default function Episodes() {
    const { data, loading, error } = useQuery(GET_EPISODES)

    if(loading) return <p className="loading">Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    return (
        <div className={styles.episodeContainer}>
            <h1 className={styles.title}>Rick and Morty Episodes</h1>
            <ul className={styles.episodeList}>
                {data.episodes.results.map((episode: Episode) => (
                    <li key={episode.id} className={styles.episodeCard}>
                        <Link href={`/episodes/${episode.id}`}>
                            <div className={styles.episodeLink}>
                                <h3>{episode.name}</h3>
                                <p>Air Date: {episode.air_date}</p>
                                <p>Episode Code: {episode.episode}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};