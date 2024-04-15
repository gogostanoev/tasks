"use client";
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../graphql/locationQuery/locationQuery";
import { Location } from "../interfaces/location-interface/location-interface";
import styles from "./location.module.css";
import Link from "next/link";

export default function Locations() {
    const { loading, error, data } = useQuery(GET_LOCATIONS);

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className={styles.locationsContainer}>
            <h1 className={styles.title}>Locations</h1>
            <ul className={styles.locationList}>
                {data.locations.results.map((location: Location) => (
                    <li key={location.id} className={styles.locationCard}>
                        <Link href={`/locations/${location.id}`}>
                            <h2 className={styles.locationName}>{location.name}</h2>
                            <p className={styles.locationDetails}>Dimension: {location.dimension}</p>
                            <p className={styles.locationDetails}>Type: {location.type}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}