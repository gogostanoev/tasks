"use client"
import { GET_CHARACTER } from "../../graphql/characterQuery/characterQuery"
import { useQuery } from "@apollo/client"
import { useParams } from "next/navigation";
import styles from "./characterPage.module.css"

export default function CharacterPage() {
    const params = useParams<{ id: string }>();
    const characterId = params.id;

    const { loading, error, data } = useQuery(GET_CHARACTER, {
        variables: { characterId }
    });

    console.log('Character ID:', characterId);
    console.log('Query Data:', data);

    if (loading) return <p className="loading">Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    const character = data.character

    return (
        <div className={styles.characterContainer}>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
            <h3>Location</h3>
            <p>Name: {character.location.name}</p>
            <p>Dimension: {character.location.dimension}</p>
            <p>Type: {character.type ? character.type : "N/A"}</p>
            <h3>Origin:</h3>
            <p>Name: {character.origin.name}</p>
        </div>
    )
}