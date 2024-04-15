"use client"
import { GET_LOCATION } from "../../graphql/locationQuery/locationQuery";
import { Character } from "../../interfaces/character-interface/character-interface";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import styles from "./locationPage.module.css"

export default function LocationPage() {
    const params = useParams<{ id: string }>()
    const locationId = params.id;

    const { loading, error, data } = useQuery(GET_LOCATION, {
        variables: { locationId }
    });

    if (loading) return <p className="loading">Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    const location = data.location

    return (
        <div className={styles.locationsContainer}>
            <h1 className={styles.locationTitle}>Name: {location.name}</h1>
            <p className={styles.locationsText}>Dimension: {location.dimension}</p>
            <p className={styles.locationsText}>Type: {location.type}</p>

            <h2 className={styles.residentTitle}>Residents</h2>
            {location.residents.length === 0 ? (
                <p className={styles.noResidence}>NO RESIDENTS</p>
            ) : (
                <ul className={styles.locationsUlContainer}>
                    {location.residents.map((resident: Character) => (
                        <li key={resident.id} className={styles.locationsListContainer}>
                            <img src={resident.image} alt={resident.name} className={styles.locationImage} />
                            <p>Name: {resident.name}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}