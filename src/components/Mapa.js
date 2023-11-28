"use client";
import styles from "../styles/Mapa.module.css";
import Image from "next/image";
import getCoordinates from "../lib/coordinates";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useSearchParams } from "next/navigation";

const Mapa = () => {
    const searchParams = useSearchParams();
    const municipio = searchParams.get("municipio") || "Amagá";
    const coordinates = getCoordinates(municipio);
    // move the coordinates to the left by 0.0005
    const position = {
        lat: coordinates.latitude,
        lng: coordinates.longitude,
    };
    const card = (
        <div className={styles.card}>
            <Image
                src={coordinates.url}
                width={1600}
                height={900}
                alt="Background image"
                className={styles.image}
                quality={65}
                priority={true}
            />
        </div>
    );
    return (
        <main className={styles.main}>
            <div className={styles.card}>
                <Image
                    src={coordinates.url}
                    width={1600}
                    height={900}
                    alt="Background image"
                    className={styles.image}
                    quality={65}
                    priority={true}
                />
            </div>
            <section className={styles.mapOverlay}>
                <div className={styles.imageContainer}>
                    <Image
                        src={coordinates.url}
                        width={1600}
                        height={900}
                        alt="Background image"
                        className={styles.locationImage}
                        quality={65}
                        priority={true}
                    />
                </div>
                <div className={styles.titleContainer}>
                    <i className={`fa-solid fa-compass`}></i>
                    <p className={styles.title}>{municipio}</p>
                </div>
            </section>
            <APIProvider apiKey={"AIzaSyBXp3swOU8DtCEqJRSHPd5axh0VmLIfIoo"}>
                <Map
                    center={position}
                    zoom={coordinates.zoom}
                    mapTypeId={"hybrid"}
                    streetViewControl={false}
                    className={styles.map}
                >
                    <Marker position={position} />
                </Map>
            </APIProvider>
        </main>
    );
};

export default Mapa;
